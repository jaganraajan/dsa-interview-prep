import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const sourcePath = path.join(rootDir, 'top_leetcode_questions_faang_list.txt');
const outputPath = path.join(rootDir, 'lib', 'questions.ts');

const source = fs.readFileSync(sourcePath, 'utf8');
const lines = source.split(/\r?\n/);

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const escapeTs = (value) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

const inferCategory = (title, week) => {
  const normalized = title.toLowerCase();
  if (normalized.includes('linked list')) return 'Linked List';
  if (normalized.includes('tree') || normalized.includes('bst') || normalized.includes('trie')) return 'Tree / Trie';
  if (normalized.includes('graph') || normalized.includes('island') || normalized.includes('course')) return 'Graph';
  if (normalized.includes('string') || normalized.includes('palindrome') || normalized.includes('anagram')) return 'String';
  if (normalized.includes('stack') || normalized.includes('queue') || normalized.includes('parentheses')) return 'Stack / Queue';
  if (normalized.includes('heap') || normalized.includes('kth') || normalized.includes('median')) return 'Heap / Priority Queue';
  if (normalized.includes('dp') || normalized.includes('path') || normalized.includes('subsequence')) return 'Dynamic Programming';
  if (week.includes('Arrays')) return 'Array';
  if (week.includes('Searching')) return 'Binary Search';
  return 'General';
};

const inferComplexity = (title) => {
  const normalized = title.toLowerCase();
  if (normalized.includes('binary search') || normalized.includes('rotated') || normalized.includes('kth')) {
    return { time: 'O(log n) to O(n log n) depending on the approach', space: 'O(1) to O(n)' };
  }
  if (normalized.includes('tree') || normalized.includes('graph') || normalized.includes('island')) {
    return { time: 'O(V + E) or O(n) traversal time', space: 'O(h) recursion stack or O(n) queue/set' };
  }
  if (normalized.includes('window') || normalized.includes('subarray') || normalized.includes('string')) {
    return { time: 'O(n) sliding-window style', space: 'O(1) to O(k) hash map/set' };
  }
  if (normalized.includes('dp') || normalized.includes('path') || normalized.includes('subsequence')) {
    return { time: 'Usually O(n) to O(n^2)', space: 'O(n) to O(n^2)' };
  }
  return { time: 'Typically O(n) or O(n log n)', space: 'O(1) to O(n)' };
};

const buildLeetCodeStyleDetails = (title, week, explanation) => {
  const category = inferCategory(title, week);
  const complexity = inferComplexity(title);

  return `Problem
Given the standard LeetCode prompt for "${title}", implement a correct and efficient Python solution.

Category
${category}

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Approach Hint
${explanation}

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: ${complexity.time}
- Space: ${complexity.space}`;
};

const keywordPatterns = [
  {
    match: ['contains duplicate'],
    explanation: 'Use a set to track seen values while scanning once.',
    code: `from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False`,
  },
  {
    match: ['two sum ii'],
    explanation: 'Two pointers on sorted input locate the target in linear time.',
    code: `from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1
        while left < right:
            total = numbers[left] + numbers[right]
            if total == target:
                return [left + 1, right + 1]
            if total < target:
                left += 1
            else:
                right -= 1
        return []`,
  },
  {
    match: ['two sum'],
    explanation: 'Hash map stores needed complement indices in O(n).',
    code: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}
        for i, num in enumerate(nums):
            want = target - num
            if want in lookup:
                return [lookup[want], i]
            lookup[num] = i
        return []`,
  },
  {
    match: ['remove duplicates from sorted array'],
    explanation: 'Two-pointer overwrite keeps unique values in-place.',
    code: `from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        write = 1
        for read in range(1, len(nums)):
            if nums[read] != nums[write - 1]:
                nums[write] = nums[read]
                write += 1
        return write`,
  },
  {
    match: ['find the duplicate number'],
    explanation: 'Floyd cycle detection treats values as next pointers.',
    code: `from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow = fast = nums[0]
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        slow = nums[0]
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow`,
  },
  {
    match: ['majority element'],
    explanation: 'Boyer-Moore voting tracks a candidate with constant space.',
    code: `from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1
        return candidate`,
  },
  {
    match: ['next permutation'],
    explanation: 'Find pivot, swap with next larger suffix element, then reverse suffix.',
    code: `from typing import List

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = len(nums) - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        left, right = i + 1, len(nums) - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1`,
  },
  {
    match: ['sort colors'],
    explanation: 'Dutch national flag partitions into 0/1/2 in one pass.',
    code: `from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        low = mid = 0
        high = len(nums) - 1
        while mid <= high:
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1`,
  },
  {
    match: ['best time to buy and sell stock'],
    explanation: 'Track the minimum price so far and max profit.',
    code: `from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        best = 0
        for price in prices:
            min_price = min(min_price, price)
            best = max(best, price - min_price)
        return best`,
  },
  {
    match: ['longest consecutive sequence'],
    explanation: 'Set lookup starts runs only at sequence starts for O(n).',
    code: `from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        values = set(nums)
        best = 0
        for num in values:
            if num - 1 not in values:
                current = num
                length = 1
                while current + 1 in values:
                    current += 1
                    length += 1
                best = max(best, length)
        return best`,
  },
  {
    match: ['maximum subarray'],
    explanation: 'Kadane algorithm tracks the best subarray ending at each index.',
    code: `from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        best = nums[0]
        current = nums[0]
        for num in nums[1:]:
            current = max(num, current + num)
            best = max(best, current)
        return best`,
  },
  {
    match: ['maximum product subarray'],
    explanation: 'Track both max and min products because negatives can swap roles.',
    code: `from typing import List

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        best = nums[0]
        max_here = nums[0]
        min_here = nums[0]
        for num in nums[1:]:
            candidates = (num, max_here * num, min_here * num)
            max_here = max(candidates)
            min_here = min(candidates)
            best = max(best, max_here)
        return best`,
  },
  {
    match: ['3sum'],
    explanation: 'Sort and fix one value; two pointers find complementary pairs.',
    code: `from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        out: List[List[int]] = []

        for i in range(n - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, n - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    out.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return out`,
  },
  {
    match: ['container with most water'],
    explanation: 'Two pointers shrink from ends while preserving max area.',
    code: `from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        best = 0
        while left < right:
            width = right - left
            best = max(best, width * min(height[left], height[right]))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return best`,
  },
  {
    match: ['valid anagram'],
    explanation: 'Character counts must match exactly for both strings.',
    code: `from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)`,
  },
  {
    match: ['group anagrams'],
    explanation: 'Use sorted-character signature as the grouping key.',
    code: `from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for word in strs:
            groups[tuple(sorted(word))].append(word)
        return list(groups.values())`,
  },
  {
    match: ['isomorphic strings'],
    explanation: 'Bidirectional mapping ensures one-to-one character correspondence.',
    code: `class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        m1, m2 = {}, {}
        for a, b in zip(s, t):
            if m1.get(a, b) != b or m2.get(b, a) != a:
                return False
            m1[a] = b
            m2[b] = a
        return True`,
  },
  {
    match: ['reverse string'],
    explanation: 'Two pointers swap characters in place.',
    code: `from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1`,
  },
  {
    match: ['reverse words in a string'],
    explanation: 'Split on whitespace, reverse list of words, and join.',
    code: `class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))`,
  },
  {
    match: ['valid palindrome ii'],
    explanation: 'Allow one deletion by checking both skip options at first mismatch.',
    code: `class Solution:
    def validPalindrome(self, s: str) -> bool:
        def is_pal(left: int, right: int) -> bool:
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            return True

        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                return is_pal(left + 1, right) or is_pal(left, right - 1)
            left += 1
            right -= 1
        return True`,
  },
  {
    match: ['valid palindrome'],
    explanation: 'Two-pointer scan over alphanumeric lowercased characters.',
    code: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True`,
  },
  {
    match: ['longest substring without repeating characters'],
    explanation: 'Sliding window tracks last index of each character.',
    code: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        seen = {}
        best = 0
        for right, ch in enumerate(s):
            if ch in seen and seen[ch] >= left:
                left = seen[ch] + 1
            seen[ch] = right
            best = max(best, right - left + 1)
        return best`,
  },
  {
    match: ['permutation in string'],
    explanation: 'Fixed-size sliding window compares frequency counts.',
    code: `from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        need = Counter(s1)
        window = Counter(s2[:len(s1)])
        if window == need:
            return True
        for i in range(len(s1), len(s2)):
            window[s2[i]] += 1
            left = s2[i - len(s1)]
            window[left] -= 1
            if window[left] == 0:
                del window[left]
            if window == need:
                return True
        return False`,
  },
  {
    match: ['find all anagrams in a string'],
    explanation: 'Slide a window of length p and compare character counts.',
    code: `from collections import Counter
from typing import List

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(p) > len(s):
            return []
        need = Counter(p)
        window = Counter(s[:len(p)])
        ans = [0] if window == need else []
        for i in range(len(p), len(s)):
            window[s[i]] += 1
            left = s[i - len(p)]
            window[left] -= 1
            if window[left] == 0:
                del window[left]
            if window == need:
                ans.append(i - len(p) + 1)
        return ans`,
  },
  {
    match: ['longest repeating character replacement'],
    explanation: 'Window is valid while replacements needed are <= k.',
    code: `from collections import defaultdict

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = defaultdict(int)
        left = 0
        max_freq = 0
        best = 0
        for right, ch in enumerate(s):
            count[ch] += 1
            max_freq = max(max_freq, count[ch])
            while (right - left + 1) - max_freq > k:
                count[s[left]] -= 1
                left += 1
            best = max(best, right - left + 1)
        return best`,
  },
  {
    match: ['minimum window substring'],
    explanation: 'Expand and contract sliding window while maintaining required counts.',
    code: `from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = Counter(t)
        missing = len(t)
        left = start = end = 0

        for right, ch in enumerate(s, 1):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1

            if missing == 0:
                while left < right and need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if end == 0 or right - left < end - start:
                    start, end = left, right
                need[s[left]] += 1
                missing += 1
                left += 1

        return s[start:end]`,
  },
  {
    match: ['valid parentheses'],
    explanation: 'Stack stores expected closing brackets in sequence.',
    code: `class Solution:
    def isValid(self, s: str) -> bool:
        close_for = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for ch in s:
            if ch in close_for:
                stack.append(close_for[ch])
            elif not stack or stack.pop() != ch:
                return False
        return not stack`,
  },
  {
    match: ['decode string'],
    explanation: 'Stack keeps previous string and repeat count at each bracket.',
    code: `class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        curr = ''
        num = 0
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == '[':
                stack.append((curr, num))
                curr, num = '', 0
            elif ch == ']':
                prev, repeat = stack.pop()
                curr = prev + curr * repeat
            else:
                curr += ch
        return curr`,
  },
  {
    match: ['implement strstr'],
    explanation: 'Use Python find for concise O(n*m) worst-case behavior.',
    code: `class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0
        return haystack.find(needle)`,
  },
  {
    match: ['remove k digits'],
    explanation: 'Monotonic stack removes larger preceding digits first.',
    code: `class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for ch in num:
            while k and stack and stack[-1] > ch:
                stack.pop()
                k -= 1
            stack.append(ch)
        while k:
            stack.pop()
            k -= 1
        result = ''.join(stack).lstrip('0')
        return result or '0'`,
  },
  {
    match: ['basic calculator ii'],
    explanation: 'Single pass with stack handles +, -, *, / precedence.',
    code: `class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0
        op = '+'
        for ch in s + '+':
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch != ' ':
                if op == '+':
                    stack.append(num)
                elif op == '-':
                    stack.append(-num)
                elif op == '*':
                    stack[-1] *= num
                else:
                    stack[-1] = int(stack[-1] / num)
                op = ch
                num = 0
        return sum(stack)`,
  },
  {
    match: ['design add and search words data structure'],
    explanation: 'Trie with DFS wildcard search supports dot matches.',
    code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.end = True

    def search(self, word: str) -> bool:
        def dfs(i: int, node: TrieNode) -> bool:
            if i == len(word):
                return node.end
            ch = word[i]
            if ch == '.':
                return any(dfs(i + 1, child) for child in node.children.values())
            if ch not in node.children:
                return False
            return dfs(i + 1, node.children[ch])

        return dfs(0, self.root)`,
  },
  {
    match: ['binary search'],
    explanation: 'Classic low/high binary search over sorted array.',
    code: `from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1`,
  },
  {
    match: ['search insert position'],
    explanation: 'Lower-bound binary search finds insertion index.',
    code: `from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left`,
  },
  {
    match: ['find peak element'],
    explanation: 'Binary search moves toward the rising slope.',
    code: `from typing import List

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return left`,
  },
  {
    match: ['search in rotated sorted array'],
    explanation: 'At each step, one side is sorted; keep target in sorted side.',
    code: `from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        return -1`,
  },
  {
    match: ['find minimum in rotated sorted array'],
    explanation: 'Binary search on pivot compares mid with right boundary.',
    code: `from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        return nums[left]`,
  },
  {
    match: ['time based key-value store'],
    explanation: 'Store sorted timestamp-value pairs and binary search by timestamp.',
    code: `from collections import defaultdict

class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        arr = self.store.get(key, [])
        left, right = 0, len(arr) - 1
        ans = ''
        while left <= right:
            mid = (left + right) // 2
            if arr[mid][0] <= timestamp:
                ans = arr[mid][1]
                left = mid + 1
            else:
                right = mid - 1
        return ans`,
  },
  {
    match: ['reverse linked list'],
    explanation: 'Iteratively redirect pointers using prev/curr traversal.',
    code: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head):
        prev = None
        curr = head
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev`,
  },
  {
    match: ['merge two sorted lists'],
    explanation: 'Iterative merge with a dummy head pointer.',
    code: `class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = tail = ListNode()
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
        tail.next = list1 or list2
        return dummy.next`,
  },
  {
    match: ['remove nth node from end of list'],
    explanation: 'Fast/slow pointers keep n-node gap to remove target node.',
    code: `class Solution:
    def removeNthFromEnd(self, head, n: int):
        dummy = ListNode(0, head)
        fast = slow = dummy
        for _ in range(n):
            fast = fast.next
        while fast.next:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return dummy.next`,
  },
  {
    match: ['add two numbers'],
    explanation: 'Digit-by-digit addition with carry on linked lists.',
    code: `class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = tail = ListNode()
        carry = 0
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            carry, digit = divmod(v1 + v2 + carry, 10)
            tail.next = ListNode(digit)
            tail = tail.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next`,
  },
  {
    match: ['reorder list'],
    explanation: 'Find middle, reverse second half, then merge alternately.',
    code: `class Solution:
    def reorderList(self, head) -> None:
        if not head or not head.next:
            return
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev, curr = None, slow.next
        slow.next = None
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        first, second = head, prev
        while second:
            n1, n2 = first.next, second.next
            first.next = second
            second.next = n1
            first, second = n1, n2`,
  },
  {
    match: ['copy list with random pointer'],
    explanation: 'Hash map clone pass + pointer wiring pass.',
    code: `class Solution:
    def copyRandomList(self, head):
        if not head:
            return None
        copies = {}
        curr = head
        while curr:
            copies[curr] = Node(curr.val)
            curr = curr.next
        curr = head
        while curr:
            copies[curr].next = copies.get(curr.next)
            copies[curr].random = copies.get(curr.random)
            curr = curr.next
        return copies[head]`,
  },
  {
    match: ['merge k sorted lists'],
    explanation: 'Min-heap always extracts the current smallest node.',
    code: `import heapq

class Solution:
    def mergeKLists(self, lists):
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))

        dummy = tail = ListNode()
        while heap:
            _, i, node = heapq.heappop(heap)
            tail.next = node
            tail = tail.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next`,
  },
  {
    match: ['lru cache'],
    explanation: 'OrderedDict gives O(1) get/put with recency updates.',
    code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
  },
  {
    match: ['linked list cycle ii'],
    explanation: 'Floyd cycle detection finds meeting point and cycle entry.',
    code: `class Solution:
    def detectCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                break
        else:
            return None

        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next
        return slow`,
  },
  {
    match: ['linked list cycle'],
    explanation: 'Floyd tortoise-hare detects a cycle in O(1) space.',
    code: `class Solution:
    def hasCycle(self, head) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`,
  },
  {
    match: ['min stack'],
    explanation: 'Store pairs of value and minimum-so-far on stack.',
    code: `class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        minimum = val if not self.stack else min(val, self.stack[-1][1])
        self.stack.append((val, minimum))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]`,
  },
  {
    match: ['daily temperatures'],
    explanation: 'Monotonic decreasing stack gives next warmer day index.',
    code: `from typing import List

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0] * len(temperatures)
        stack = []

        for i, temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < temp:
                prev = stack.pop()
                ans[prev] = i - prev
            stack.append(i)
        return ans`,
  },
  {
    match: ['evaluate reverse polish notation'],
    explanation: 'Stack evaluates each token using last two operands.',
    code: `from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens:
            if token in {'+', '-', '*', '/'}:
                b = stack.pop()
                a = stack.pop()
                if token == '+':
                    stack.append(a + b)
                elif token == '-':
                    stack.append(a - b)
                elif token == '*':
                    stack.append(a * b)
                else:
                    stack.append(int(a / b))
            else:
                stack.append(int(token))
        return stack[-1]`,
  },
  {
    match: ['next greater element i'],
    explanation: 'Monotonic decreasing stack builds next-greater map.',
    code: `from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        nxt = {}
        for num in nums2:
            while stack and stack[-1] < num:
                nxt[stack.pop()] = num
            stack.append(num)
        return [nxt.get(num, -1) for num in nums1]`,
  },
  {
    match: ['next greater element ii'],
    explanation: 'Circular scan with monotonic stack and modulo indices.',
    code: `from typing import List

class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [-1] * n
        stack = []
        for i in range(2 * n):
            while stack and nums[stack[-1]] < nums[i % n]:
                ans[stack.pop()] = nums[i % n]
            if i < n:
                stack.append(i)
        return ans`,
  },
  {
    match: ['stock span problem'],
    explanation: 'Monotonic stack stores (price, span) pairs for O(1) amortized next.',
    code: `class StockSpanner:
    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span`,
  },
  {
    match: ['minimum add to make parentheses valid'],
    explanation: 'Track balance and required insertions for unmatched closes.',
    code: `class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        balance = 0
        add = 0
        for ch in s:
            if ch == '(':
                balance += 1
            elif balance == 0:
                add += 1
            else:
                balance -= 1
        return add + balance`,
  },
  {
    match: ['insert delete getrandom o(1)'],
    explanation: 'Array + hash index map supports O(1) insert/delete/random.',
    code: `import random

class RandomizedSet:
    def __init__(self):
        self.values = []
        self.index = {}

    def insert(self, val: int) -> bool:
        if val in self.index:
            return False
        self.index[val] = len(self.values)
        self.values.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.index:
            return False
        i = self.index[val]
        last = self.values[-1]
        self.values[i] = last
        self.index[last] = i
        self.values.pop()
        del self.index[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.values)`,
  },
  {
    match: ['sliding window maximum'],
    explanation: 'Deque stores candidate indices in decreasing value order.',
    code: `from collections import deque
from typing import List

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        dq = deque()
        out = []

        for i, num in enumerate(nums):
            while dq and dq[0] <= i - k:
                dq.popleft()
            while dq and nums[dq[-1]] <= num:
                dq.pop()
            dq.append(i)
            if i >= k - 1:
                out.append(nums[dq[0]])

        return out`,
  },
  {
    match: ['largest rectangle in histogram'],
    explanation: 'Monotonic stack computes max rectangle with each bar as min height.',
    code: `from typing import List

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        best = 0

        for i, h in enumerate(heights + [0]):
            start = i
            while stack and stack[-1][1] > h:
                idx, height = stack.pop()
                best = max(best, height * (i - idx))
                start = idx
            stack.append((start, h))

        return best`,
  },
  {
    match: ['trapping rain water'],
    explanation: 'Two pointers maintain max left/right boundaries and trapped water.',
    code: `from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        left_max = right_max = 0
        water = 0

        while left < right:
            if height[left] < height[right]:
                left_max = max(left_max, height[left])
                water += left_max - height[left]
                left += 1
            else:
                right_max = max(right_max, height[right])
                water += right_max - height[right]
                right -= 1

        return water`,
  },
  {
    match: ['inorder traversal'],
    explanation: 'Recursive DFS visits left-root-right.',
    code: `from typing import List, Optional

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def inorderTraversal(self, root: Optional['TreeNode']) -> List[int]:
        out: List[int] = []

        def dfs(node: Optional['TreeNode']) -> None:
            if not node:
                return
            dfs(node.left)
            out.append(node.val)
            dfs(node.right)

        dfs(root)
        return out`,
  },
  {
    match: ['preorder traversal'],
    explanation: 'Recursive DFS visits root-left-right.',
    code: `from typing import List, Optional

class Solution:
    def preorderTraversal(self, root: Optional['TreeNode']) -> List[int]:
        out: List[int] = []

        def dfs(node: Optional['TreeNode']) -> None:
            if not node:
                return
            out.append(node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return out`,
  },
  {
    match: ['postorder traversal'],
    explanation: 'Recursive DFS visits left-right-root.',
    code: `from typing import List, Optional

class Solution:
    def postorderTraversal(self, root: Optional['TreeNode']) -> List[int]:
        out: List[int] = []

        def dfs(node: Optional['TreeNode']) -> None:
            if not node:
                return
            dfs(node.left)
            dfs(node.right)
            out.append(node.val)

        dfs(root)
        return out`,
  },
  {
    match: ['level order traversal'],
    explanation: 'BFS with queue processes nodes level by level.',
    code: `from collections import deque
from typing import List, Optional

class Solution:
    def levelOrder(self, root: Optional['TreeNode']) -> List[List[int]]:
        if not root:
            return []

        q = deque([root])
        out: List[List[int]] = []

        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            out.append(level)

        return out`,
  },
  {
    match: ['validate binary search tree'],
    explanation: 'DFS with lower/upper bounds validates each node range.',
    code: `class Solution:
    def isValidBST(self, root) -> bool:
        def dfs(node, low, high):
            if not node:
                return True
            if not (low < node.val < high):
                return False
            return dfs(node.left, low, node.val) and dfs(node.right, node.val, high)

        return dfs(root, float('-inf'), float('inf'))`,
  },
  {
    match: ['same tree'],
    explanation: 'DFS compares structure and value equality recursively.',
    code: `class Solution:
    def isSameTree(self, p, q) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)`,
  },
  {
    match: ['symmetric tree'],
    explanation: 'Mirror recursion compares left subtree vs right subtree.',
    code: `class Solution:
    def isSymmetric(self, root) -> bool:
        def mirror(a, b):
            if not a and not b:
                return True
            if not a or not b or a.val != b.val:
                return False
            return mirror(a.left, b.right) and mirror(a.right, b.left)

        return mirror(root.left, root.right) if root else True`,
  },
  {
    match: ['lowest common ancestor of a binary tree'],
    explanation: 'Postorder recursion returns node when split across subtrees.',
    code: `class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if left and right:
            return root
        return left or right`,
  },
  {
    match: ['populating next right pointers in each node'],
    explanation: 'Level-order traversal connects nodes from left to right per level.',
    code: `from collections import deque

class Solution:
    def connect(self, root):
        if not root:
            return None
        q = deque([root])
        while q:
            prev = None
            for _ in range(len(q)):
                node = q.popleft()
                if prev:
                    prev.next = node
                prev = node
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return root`,
  },
  {
    match: ['subtree of another tree'],
    explanation: 'Check each node as potential match using same-tree helper.',
    code: `class Solution:
    def isSubtree(self, root, subRoot) -> bool:
        def same(a, b):
            if not a and not b:
                return True
            if not a or not b or a.val != b.val:
                return False
            return same(a.left, b.left) and same(a.right, b.right)

        if not root:
            return False
        if same(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)`,
  },
  {
    match: ['implement trie'],
    explanation: 'Nested dict nodes store children and end-of-word marker.',
    code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True`,
  },
  {
    match: ['word search ii'],
    explanation: 'Build trie + DFS backtracking with pruning.',
    code: `from typing import List

class TrieNode(dict):
    def __init__(self):
        super().__init__()
        self.word = None


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode()
        for word in words:
            node = root
            for ch in word:
                node = node.setdefault(ch, TrieNode())
            node.word = word

        rows, cols = len(board), len(board[0])
        out = []

        def dfs(r: int, c: int, node: TrieNode) -> None:
            ch = board[r][c]
            if ch not in node:
                return
            nxt = node[ch]
            if nxt.word:
                out.append(nxt.word)
                nxt.word = None

            board[r][c] = '#'
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '#':
                    dfs(nr, nc, nxt)
            board[r][c] = ch

            if not nxt:
                node.pop(ch)

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)

        return out`,
  },
  {
    match: ['word search'],
    explanation: 'Backtracking DFS with visited marking finds word path.',
    code: `from typing import List

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])

        def dfs(r: int, c: int, i: int) -> bool:
            if i == len(word):
                return True
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]:
                return False

            tmp = board[r][c]
            board[r][c] = '#'
            found = (
                dfs(r + 1, c, i + 1)
                or dfs(r - 1, c, i + 1)
                or dfs(r, c + 1, i + 1)
                or dfs(r, c - 1, i + 1)
            )
            board[r][c] = tmp
            return found

        for r in range(rows):
            for c in range(cols):
                if dfs(r, c, 0):
                    return True
        return False`,
  },
  {
    match: ['kth largest element in an array'],
    explanation: 'Min-heap of size k keeps current k largest values.',
    code: `import heapq
from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = nums[:k]
        heapq.heapify(heap)
        for num in nums[k:]:
            if num > heap[0]:
                heapq.heapreplace(heap, num)
        return heap[0]`,
  },
  {
    match: ['kth largest element in a stream'],
    explanation: 'Maintain a min-heap of size k; top is current kth largest.',
    code: `import heapq
from typing import List

class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = nums[:]
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val: int) -> int:
        if len(self.heap) < self.k:
            heapq.heappush(self.heap, val)
        elif val > self.heap[0]:
            heapq.heapreplace(self.heap, val)
        return self.heap[0]`,
  },
  {
    match: ['top k frequent elements'],
    explanation: 'Count then return top-k by frequency.',
    code: `from collections import Counter
from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        return [num for num, _ in Counter(nums).most_common(k)]`,
  },
  {
    match: ['last stone weight'],
    explanation: 'Max-heap (via negatives) repeatedly smashes two largest stones.',
    code: `import heapq
from typing import List

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-s for s in stones]
        heapq.heapify(heap)
        while len(heap) > 1:
            a = -heapq.heappop(heap)
            b = -heapq.heappop(heap)
            if a != b:
                heapq.heappush(heap, -(a - b))
        return -heap[0] if heap else 0`,
  },
  {
    match: ['k closest points to origin'],
    explanation: 'Keep k points with smallest squared distance using heap.',
    code: `import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        return heapq.nsmallest(k, points, key=lambda p: p[0] * p[0] + p[1] * p[1])`,
  },
  {
    match: ['top k frequent words'],
    explanation: 'Count words and sort by frequency desc then lexicographic asc.',
    code: `from collections import Counter
from typing import List

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        counts = Counter(words)
        return sorted(counts, key=lambda w: (-counts[w], w))[:k]`,
  },
  {
    match: ['task scheduler'],
    explanation: 'Greedy idle-slot formula based on most frequent task count.',
    code: `from collections import Counter
from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = Counter(tasks).values()
        max_freq = max(freq)
        max_count = sum(1 for x in freq if x == max_freq)
        return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`,
  },
  {
    match: ['design twitter'],
    explanation: 'Store tweets per user and merge feeds from followees via heap.',
    code: `import heapq
from collections import defaultdict
from typing import List

class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)
        self.following = defaultdict(set)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.time += 1
        self.tweets[userId].append((self.time, tweetId))

    def getNewsFeed(self, userId: int) -> List[int]:
        self.following[userId].add(userId)
        heap = []
        for uid in self.following[userId]:
            arr = self.tweets[uid]
            if arr:
                idx = len(arr) - 1
                time, tid = arr[idx]
                heapq.heappush(heap, (-time, tid, uid, idx - 1))
        out = []
        while heap and len(out) < 10:
            _, tid, uid, idx = heapq.heappop(heap)
            out.append(tid)
            if idx >= 0:
                time, tid = self.tweets[uid][idx]
                heapq.heappush(heap, (-time, tid, uid, idx - 1))
        return out

    def follow(self, followerId: int, followeeId: int) -> None:
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId != followerId:
            self.following[followerId].discard(followeeId)`,
  },
  {
    match: ['reorganize string'],
    explanation: 'Max-heap greedily places most frequent characters without adjacency clash.',
    code: `import heapq
from collections import Counter

class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = Counter(s)
        heap = [(-cnt, ch) for ch, cnt in freq.items()]
        heapq.heapify(heap)
        prev_cnt, prev_ch = 0, ''
        out = []
        while heap:
            cnt, ch = heapq.heappop(heap)
            out.append(ch)
            cnt += 1
            if prev_cnt < 0:
                heapq.heappush(heap, (prev_cnt, prev_ch))
            prev_cnt, prev_ch = cnt, ch
        result = ''.join(out)
        return result if len(result) == len(s) else ''`,
  },
  {
    match: ['meeting rooms ii'],
    explanation: 'Sort intervals and track ongoing meetings with min-heap of end times.',
    code: `import heapq
from typing import List

class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        heap = []
        for start, end in intervals:
            if heap and heap[0] <= start:
                heapq.heapreplace(heap, end)
            else:
                heapq.heappush(heap, end)
        return len(heap)`,
  },
  {
    match: ['minimum cost to connect sticks'],
    explanation: 'Always combine two smallest sticks first (Huffman-style greedy).',
    code: `import heapq
from typing import List

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        heapq.heapify(sticks)
        cost = 0
        while len(sticks) > 1:
            a = heapq.heappop(sticks)
            b = heapq.heappop(sticks)
            total = a + b
            cost += total
            heapq.heappush(sticks, total)
        return cost`,
  },
  {
    match: ['find median from data stream'],
    explanation: 'Two heaps balance lower and upper halves.',
    code: `import heapq

class MedianFinder:
    def __init__(self):
        self.low = []   # max-heap via negatives
        self.high = []  # min-heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.low, -num)
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.high) > len(self.low):
            heapq.heappush(self.low, -heapq.heappop(self.high))

    def findMedian(self) -> float:
        if len(self.low) > len(self.high):
            return float(-self.low[0])
        return (-self.low[0] + self.high[0]) / 2`,
  },
  {
    match: ['number of islands'],
    explanation: 'DFS flood-fill each unvisited land cell and count components.',
    code: `from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
                return
            grid[r][c] = '0'
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        count = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    count += 1
                    dfs(r, c)
        return count`,
  },
  {
    match: ['clone graph'],
    explanation: 'DFS with hashmap copies each node once and reconnects neighbors.',
    code: `class Solution:
    def cloneGraph(self, node):
        if not node:
            return None

        copied = {}

        def dfs(curr):
            if curr in copied:
                return copied[curr]
            clone = Node(curr.val)
            copied[curr] = clone
            for nei in curr.neighbors:
                clone.neighbors.append(dfs(nei))
            return clone

        return dfs(node)`,
  },
  {
    match: ['course schedule ii'],
    explanation: 'Topological sort via indegree and BFS queue.',
    code: `from collections import defaultdict, deque
from typing import List

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        indegree = [0] * numCourses

        for course, pre in prerequisites:
            graph[pre].append(course)
            indegree[course] += 1

        q = deque([i for i in range(numCourses) if indegree[i] == 0])
        order = []

        while q:
            node = q.popleft()
            order.append(node)
            for nei in graph[node]:
                indegree[nei] -= 1
                if indegree[nei] == 0:
                    q.append(nei)

        return order if len(order) == numCourses else []`,
  },
  {
    match: ['course schedule'],
    explanation: 'Kahn BFS topological sort detects whether all nodes can be completed.',
    code: `from collections import defaultdict, deque
from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = defaultdict(list)
        indegree = [0] * numCourses

        for course, pre in prerequisites:
            graph[pre].append(course)
            indegree[course] += 1

        q = deque([i for i in range(numCourses) if indegree[i] == 0])
        visited = 0

        while q:
            node = q.popleft()
            visited += 1
            for nei in graph[node]:
                indegree[nei] -= 1
                if indegree[nei] == 0:
                    q.append(nei)

        return visited == numCourses`,
  },
  {
    match: ['word ladder ii'],
    explanation: 'BFS layers for distances + DFS backtracking for all shortest paths.',
    code: `from collections import defaultdict
from string import ascii_lowercase
from typing import List

class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        words = set(wordList)
        if endWord not in words:
            return []

        parents = defaultdict(set)
        level = {beginWord}

        while level and endWord not in parents:
            next_level = defaultdict(set)
            for word in level:
                for i in range(len(word)):
                    for ch in ascii_lowercase:
                        cand = word[:i] + ch + word[i + 1:]
                        if cand in words and cand not in parents:
                            next_level[cand].add(word)
            level = set(next_level)
            parents.update(next_level)

        out = []

        def build(path: List[str], word: str) -> None:
            if word == beginWord:
                out.append(path[::-1])
                return
            for p in parents[word]:
                build(path + [p], p)

        if endWord in parents:
            build([endWord], endWord)
        return out`,
  },
  {
    match: ['word ladder'],
    explanation: 'BFS by single-letter transformations gives shortest path length.',
    code: `from collections import deque
from string import ascii_lowercase
from typing import List

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        words = set(wordList)
        if endWord not in words:
            return 0

        q = deque([(beginWord, 1)])
        seen = {beginWord}

        while q:
            word, steps = q.popleft()
            if word == endWord:
                return steps
            for i in range(len(word)):
                for ch in ascii_lowercase:
                    cand = word[:i] + ch + word[i + 1:]
                    if cand in words and cand not in seen:
                        seen.add(cand)
                        q.append((cand, steps + 1))
        return 0`,
  },
  {
    match: ['dijkstra'],
    explanation: 'Priority queue always expands the currently shortest known distance.',
    code: `import heapq
from typing import List, Tuple


def dijkstra(n: int, edges: List[Tuple[int, int, int]], source: int) -> List[int]:
    graph = [[] for _ in range(n)]
    for u, v, w in edges:
        graph[u].append((v, w))

    dist = [float('inf')] * n
    dist[source] = 0
    pq = [(0, source)]

    while pq:
        d, node = heapq.heappop(pq)
        if d != dist[node]:
            continue
        for nei, w in graph[node]:
            nd = d + w
            if nd < dist[nei]:
                dist[nei] = nd
                heapq.heappush(pq, (nd, nei))

    return dist`,
  },
  {
    match: ['climbing stairs'],
    explanation: 'Fibonacci-style DP with O(1) space.',
    code: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b`,
  },
  {
    match: ['jump game ii'],
    explanation: 'Greedy range expansion tracks minimum jumps per layer.',
    code: `from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        current_end = 0
        farthest = 0

        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_end:
                jumps += 1
                current_end = farthest

        return jumps`,
  },
  {
    match: ['jump game'],
    explanation: 'Greedy keep the farthest reachable index while scanning.',
    code: `from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        farthest = 0
        for i, jump in enumerate(nums):
            if i > farthest:
                return False
            farthest = max(farthest, i + jump)
        return True`,
  },
  {
    match: ['coin change ii'],
    explanation: '1D DP counts combinations with each coin used in forward order.',
    code: `from typing import List

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] += dp[x - coin]
        return dp[amount]`,
  },
  {
    match: ['coin change'],
    explanation: '1D DP where dp[x] is minimum coins to make sum x.',
    code: `from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        INF = amount + 1
        dp = [0] + [INF] * amount

        for x in range(1, amount + 1):
            for coin in coins:
                if coin <= x:
                    dp[x] = min(dp[x], dp[x - coin] + 1)

        return dp[amount] if dp[amount] != INF else -1`,
  },
  {
    match: ['house robber ii'],
    explanation: 'Solve two linear rob passes (exclude first or exclude last).',
    code: `from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        def linear(arr: List[int]) -> int:
            rob1 = rob2 = 0
            for n in arr:
                rob1, rob2 = rob2, max(rob2, rob1 + n)
            return rob2

        return max(linear(nums[:-1]), linear(nums[1:]))`,
  },
  {
    match: ['house robber'],
    explanation: 'At each house choose rob or skip using rolling DP.',
    code: `from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1 = rob2 = 0
        for n in nums:
            rob1, rob2 = rob2, max(rob2, rob1 + n)
        return rob2`,
  },
  {
    match: ['decode ways'],
    explanation: 'DP counts decodings from each index with 1- or 2-digit transitions.',
    code: `class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        prev2, prev1 = 1, 1
        for i in range(1, len(s)):
            current = 0
            if s[i] != '0':
                current += prev1
            if '10' <= s[i - 1:i + 1] <= '26':
                current += prev2
            prev2, prev1 = prev1, current
        return prev1`,
  },
  {
    match: ['word break ii'],
    explanation: 'Memoized DFS builds all valid sentence decompositions.',
    code: `from functools import lru_cache
from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        words = set(wordDict)

        @lru_cache(maxsize=None)
        def dfs(i: int) -> List[str]:
            if i == len(s):
                return ['']
            out = []
            for j in range(i + 1, len(s) + 1):
                part = s[i:j]
                if part in words:
                    for tail in dfs(j):
                        out.append(part if not tail else f"{part} {tail}")
            return out

        return dfs(0)`,
  },
  {
    match: ['word break'],
    explanation: 'DP over string indices checks dictionary word endings.',
    code: `from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        words = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for i in range(1, len(s) + 1):
            for j in range(i):
                if dp[j] and s[j:i] in words:
                    dp[i] = True
                    break

        return dp[-1]`,
  },
  {
    match: ['longest increasing subsequence'],
    explanation: 'Patience sorting with binary search gives O(n log n).',
    code: `from bisect import bisect_left
from typing import List

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        tails: List[int] = []
        for num in nums:
            idx = bisect_left(tails, num)
            if idx == len(tails):
                tails.append(num)
            else:
                tails[idx] = num
        return len(tails)`,
  },
  {
    match: ['longest common subsequence'],
    explanation: '2D DP combines match and skip transitions.',
    code: `class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        rows, cols = len(text1), len(text2)
        dp = [[0] * (cols + 1) for _ in range(rows + 1)]

        for r in range(rows - 1, -1, -1):
            for c in range(cols - 1, -1, -1):
                if text1[r] == text2[c]:
                    dp[r][c] = 1 + dp[r + 1][c + 1]
                else:
                    dp[r][c] = max(dp[r + 1][c], dp[r][c + 1])

        return dp[0][0]`,
  },
  {
    match: ['edit distance'],
    explanation: 'Classic dynamic programming for insert/delete/replace transitions.',
    code: `class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        rows, cols = len(word1), len(word2)
        dp = [[0] * (cols + 1) for _ in range(rows + 1)]

        for r in range(rows + 1):
            dp[r][cols] = rows - r
        for c in range(cols + 1):
            dp[rows][c] = cols - c

        for r in range(rows - 1, -1, -1):
            for c in range(cols - 1, -1, -1):
                if word1[r] == word2[c]:
                    dp[r][c] = dp[r + 1][c + 1]
                else:
                    dp[r][c] = 1 + min(dp[r + 1][c], dp[r][c + 1], dp[r + 1][c + 1])

        return dp[0][0]`,
  },
  {
    match: ['partition equal subset sum'],
    explanation: 'Subset-sum DP tracks reachable sums up to target/2.',
    code: `from typing import List

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2:
            return False

        target = total // 2
        possible = {0}
        for num in nums:
            possible |= {s + num for s in possible if s + num <= target}

        return target in possible`,
  },
  {
    match: ['regular expression matching'],
    explanation: 'Memoized recursion over (i, j) handles literal and star branches.',
    code: `from functools import lru_cache

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        @lru_cache(maxsize=None)
        def dp(i: int, j: int) -> bool:
            if j == len(p):
                return i == len(s)

            first = i < len(s) and p[j] in {s[i], '.'}
            if j + 1 < len(p) and p[j + 1] == '*':
                return dp(i, j + 2) or (first and dp(i + 1, j))
            return first and dp(i + 1, j + 1)

        return dp(0, 0)`,
  },
];

const makeFallback = (title) => {
  const safeTitle = title.replace(/'/g, "\\'");
  return {
    explanation:
      'Python starter with an implementation checklist. Replace `solve` with the exact LeetCode function signature and complete the marked steps.',
    code: `# ${safeTitle}\n# Replace the method signature with the exact LeetCode signature.\n# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)\n# 2) Handle edge cases first\n# 3) Keep time and space within interview constraints\n\nclass Solution:\n    def solve(self, *args, **kwargs):\n        # TODO: Implement ${safeTitle}\n        return None`,
  };
};

const getAnswer = (title) => {
  const normalized = title.toLowerCase();

  for (const pattern of keywordPatterns) {
    const matched = pattern.match.every((part) => normalized.includes(part));
    if (matched) {
      return { explanation: pattern.explanation, code: pattern.code };
    }
  }

  if (normalized.includes('binary tree') || normalized.includes('bst')) {
    return {
      explanation: 'Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.',
      code: `from collections import deque\n\nclass Solution:\n    def solve(self, root):\n        if not root:\n            return None\n\n        q = deque([root])\n        result = []\n        while q:\n            node = q.popleft()\n            result.append(node.val)\n            if getattr(node, 'left', None):\n                q.append(node.left)\n            if getattr(node, 'right', None):\n                q.append(node.right)\n\n        return result`,
    };
  }

  if (normalized.includes('linked list')) {
    return {
      explanation: 'Two-pointer linked-list reference pattern; adapt pointer logic for the exact objective.',
      code: `class Solution:\n    def solve(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n\n        return slow`,
    };
  }

  if (normalized.includes('matrix') || normalized.includes('grid')) {
    return {
      explanation: 'Grid traversal reference pattern with boundary checks and visited marking.',
      code: `from typing import List\n\nclass Solution:\n    def solve(self, grid: List[List[int]]):\n        rows, cols = len(grid), len(grid[0])\n\n        def dfs(r: int, c: int) -> None:\n            if r < 0 or c < 0 or r >= rows or c >= cols:\n                return\n            # Add state checks/updates specific to the prompt.\n\n        for r in range(rows):\n            for c in range(cols):\n                dfs(r, c)\n\n        return grid`,
    };
  }

  if (normalized.includes('subarray') || normalized.includes('window')) {
    return {
      explanation: 'Sliding window / prefix-sum reference pattern for contiguous range problems.',
      code: `from collections import defaultdict\nfrom typing import List\n\nclass Solution:\n    def solve(self, nums: List[int], k: int) -> int:\n        count = defaultdict(int)\n        count[0] = 1\n        prefix = 0\n        ans = 0\n\n        for num in nums:\n            prefix += num\n            ans += count[prefix - k]\n            count[prefix] += 1\n\n        return ans`,
    };
  }

  if (normalized.includes('graph') || normalized.includes('island') || normalized.includes('course')) {
    return {
      explanation: 'Graph traversal reference pattern (BFS/DFS) with visited tracking.',
      code: `from collections import defaultdict, deque\n\nclass Solution:\n    def solve(self, n, edges):\n        graph = defaultdict(list)\n        for u, v in edges:\n            graph[u].append(v)\n            graph[v].append(u)\n\n        visited = set()\n        q = deque([0])\n        visited.add(0)\n\n        while q:\n            node = q.popleft()\n            for nei in graph[node]:\n                if nei not in visited:\n                    visited.add(nei)\n                    q.append(nei)\n\n        return len(visited)`,
    };
  }

  if (normalized.includes('dp') || normalized.includes('path') || normalized.includes('palindrome')) {
    return {
      explanation: 'Dynamic programming reference template with memo/iterative transitions.',
      code: `from functools import lru_cache\n\nclass Solution:\n    def solve(self, *args):\n        @lru_cache(maxsize=None)\n        def dp(i: int) -> int:\n            if i == 0:\n                return 0\n            best = dp(i - 1)\n            # Add additional transitions for this problem.\n            return best\n\n        return dp(0)`,
    };
  }

  return makeFallback(title);
};

let currentWeek = '';
let weekOrder = 0;
let questionOrder = 0;
const weekMap = new Map();
const questions = [];

for (const rawLine of lines) {
  const line = rawLine.trim();
  if (!line) {
    continue;
  }

  if (line.startsWith('Week')) {
    currentWeek = line;
    weekOrder += 1;
    questionOrder = 0;
    weekMap.set(currentWeek, weekOrder);
    continue;
  }

  questionOrder += 1;
  const id = `${weekOrder}-${questionOrder}`;
  const answer = getAnswer(line);
  const details = buildLeetCodeStyleDetails(line, currentWeek, answer.explanation);

  questions.push({
    id,
    title: line,
    week: currentWeek,
    weekOrder,
    questionOrder,
    slug: `${toSlug(line)}-${id}`,
    pythonAnswer: answer.code,
    explanation: answer.explanation,
    details,
    starterCode: `# ${line}\n# Write your Python solution below and run with custom input in Playground.\n\nclass Solution:\n    def solve(self, *args, **kwargs):\n        pass`,
  });
}

const weekNames = [...weekMap.keys()];

const output = `/* eslint-disable max-lines */
export type QuestionItem = {
  id: string;
  title: string;
  week: string;
  weekOrder: number;
  questionOrder: number;
  slug: string;
  explanation: string;
  details: string;
  pythonAnswer: string;
  starterCode: string;
};

export const WEEK_NAMES: string[] = [
${weekNames.map((week) => `  \`${escapeTs(week)}\`,`).join('\n')}
];

export const QUESTIONS: QuestionItem[] = [
${questions
  .map(
    (q) => `  {
    id: \`${escapeTs(q.id)}\`,
    title: \`${escapeTs(q.title)}\`,
    week: \`${escapeTs(q.week)}\`,
    weekOrder: ${q.weekOrder},
    questionOrder: ${q.questionOrder},
    slug: \`${escapeTs(q.slug)}\`,
    explanation: \`${escapeTs(q.explanation)}\`,
    details: \`${escapeTs(q.details)}\`,
    pythonAnswer: \`${escapeTs(q.pythonAnswer)}\`,
    starterCode: \`${escapeTs(q.starterCode)}\`,
  },`
  )
  .join('\n')}
];

export const QUESTIONS_BY_WEEK = WEEK_NAMES.map((weekName) => ({
  weekName,
  questions: QUESTIONS.filter((q) => q.week === weekName),
}));
`;

fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Generated ${questions.length} questions to ${outputPath}`);
