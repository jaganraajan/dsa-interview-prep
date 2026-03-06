import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const MAX_CODE_LENGTH = 30000;
const TIMEOUT_MS = 4000;

type RunRequest = {
  code?: string;
  input?: string;
};

type RunResponse = {
  stdout: string;
  stderr: string;
  timedOut: boolean;
  error?: string;
};

const errorResponse = (message: string, status = 400) =>
  Response.json(
    {
      stdout: '',
      stderr: '',
      timedOut: false,
      error: message,
    },
    { status }
  );

export async function POST(request: Request) {
  let payload: RunRequest;

  try {
    payload = (await request.json()) as RunRequest;
  } catch {
    return errorResponse('Invalid JSON body.');
  }

  const code = payload.code ?? '';
  const input = payload.input ?? '';

  if (!code.trim()) {
    return errorResponse('Python code is required.');
  }

  if (code.length > MAX_CODE_LENGTH) {
    return errorResponse(`Code is too long. Max length: ${MAX_CODE_LENGTH} characters.`);
  }

  const tempFile = path.join(os.tmpdir(), `leetcode-python-${randomUUID()}.py`);

  try {
    await fs.writeFile(tempFile, code, 'utf8');

    const result = await new Promise<RunResponse>((resolve) => {
      const child = spawn('python3', ['-I', tempFile], {
        stdio: 'pipe',
        env: {
          ...process.env,
          PYTHONUNBUFFERED: '1',
        },
      });

      let stdout = '';
      let stderr = '';
      let timedOut = false;

      child.stdout.on('data', (chunk) => {
        stdout += String(chunk);
      });

      child.stderr.on('data', (chunk) => {
        stderr += String(chunk);
      });

      child.on('error', (error) => {
        resolve({
          stdout: '',
          stderr: '',
          timedOut: false,
          error: `Failed to run python3: ${error.message}`,
        });
      });

      const timeout = setTimeout(() => {
        timedOut = true;
        child.kill('SIGKILL');
      }, TIMEOUT_MS);

      child.on('close', () => {
        clearTimeout(timeout);
        resolve({ stdout, stderr, timedOut });
      });

      child.stdin.write(input);
      child.stdin.end();
    });

    return Response.json(result);
  } finally {
    await fs.unlink(tempFile).catch(() => undefined);
  }
}
