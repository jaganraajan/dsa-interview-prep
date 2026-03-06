/* eslint-disable max-lines */
export type QuestionItem = {
  id: string;
  title: string;
  week: string;
  weekOrder: number;
  questionOrder: number;
  slug: string;
  explanation: string;
  pythonAnswer: string;
  starterCode: string;
};

export const WEEK_NAMES: string[] = [
  `Week 1: Core Arrays + Subarrays`,
  `Week 2: Medium/Hard Arrays`,
  `Week 3: Strings`,
  `Week 4: Searching & Sorting`,
  `Week 5: Linked Lists`,
  `Week 6: Stacks & Queues`,
  `Week 7: Trees & BSTs`,
  `Week 8: Advanced Trees, Trie, Segment Trees`,
  `Week 9: Heaps / Priority Queue`,
  `Week 10-11: Graphs`,
  `Week 12-13: Dynamic Programming`,
];

export const QUESTIONS: QuestionItem[] = [
  {
    id: `1-1`,
    title: `Contains Duplicate`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 1,
    slug: `contains-duplicate-1-1`,
    explanation: `Use a set to track seen values while scanning once.`,
    pythonAnswer: `from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False`,
    starterCode: `# Contains Duplicate
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-2`,
    title: `Remove Duplicates from Sorted Array`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 2,
    slug: `remove-duplicates-from-sorted-array-1-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Remove Duplicates from Sorted Array
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Remove Duplicates from Sorted Array')`,
    starterCode: `# Remove Duplicates from Sorted Array
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-3`,
    title: `Find the Duplicate Number`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 3,
    slug: `find-the-duplicate-number-1-3`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find the Duplicate Number
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find the Duplicate Number')`,
    starterCode: `# Find the Duplicate Number
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-4`,
    title: `Two Sum`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 4,
    slug: `two-sum-1-4`,
    explanation: `Hash map stores needed complement indices in O(n).`,
    pythonAnswer: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}
        for i, num in enumerate(nums):
            want = target - num
            if want in lookup:
                return [lookup[want], i]
            lookup[num] = i
        return []`,
    starterCode: `# Two Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-5`,
    title: `Two Sum II - Input Array Is Sorted`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 5,
    slug: `two-sum-ii-input-array-is-sorted-1-5`,
    explanation: `Two pointers on sorted input locate the target in linear time.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Two Sum II - Input Array Is Sorted
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-6`,
    title: `Find Pivot Index`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 6,
    slug: `find-pivot-index-1-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find Pivot Index
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find Pivot Index')`,
    starterCode: `# Find Pivot Index
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-7`,
    title: `Majority Element`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 7,
    slug: `majority-element-1-7`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Majority Element
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Majority Element')`,
    starterCode: `# Majority Element
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-8`,
    title: `Maximum Subarray`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 8,
    slug: `maximum-subarray-1-8`,
    explanation: `Kadane algorithm tracks the best subarray ending at each index.`,
    pythonAnswer: `from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        best = nums[0]
        current = nums[0]
        for num in nums[1:]:
            current = max(num, current + num)
            best = max(best, current)
        return best`,
    starterCode: `# Maximum Subarray
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-9`,
    title: `Largest Subarray with Sum K`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 9,
    slug: `largest-subarray-with-sum-k-1-9`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Largest Subarray with Sum K
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-10`,
    title: `Longest Subarray with Sum K`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 10,
    slug: `longest-subarray-with-sum-k-1-10`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Longest Subarray with Sum K
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-11`,
    title: `Subarray Sum Equals K`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 11,
    slug: `subarray-sum-equals-k-1-11`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Subarray Sum Equals K
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-12`,
    title: `Count Subarrays with Given XOR`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 12,
    slug: `count-subarrays-with-given-xor-1-12`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Count Subarrays with Given XOR
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-13`,
    title: `Maximum Product Subarray`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 13,
    slug: `maximum-product-subarray-1-13`,
    explanation: `Track both max and min products because negatives can swap roles.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Maximum Product Subarray
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-14`,
    title: `Minimum Size Subarray Sum`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 14,
    slug: `minimum-size-subarray-sum-1-14`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Minimum Size Subarray Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-15`,
    title: `3Sum`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 15,
    slug: `3sum-1-15`,
    explanation: `Sort and fix one value; two pointers find complementary pairs.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# 3Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `1-16`,
    title: `Container With Most Water`,
    week: `Week 1: Core Arrays + Subarrays`,
    weekOrder: 1,
    questionOrder: 16,
    slug: `container-with-most-water-1-16`,
    explanation: `Two pointers shrink from ends while preserving max area.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Container With Most Water
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-1`,
    title: `Next Permutation`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 1,
    slug: `next-permutation-2-1`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Next Permutation
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Next Permutation')`,
    starterCode: `# Next Permutation
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-2`,
    title: `Sort Colors`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 2,
    slug: `sort-colors-2-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Sort Colors
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Sort Colors')`,
    starterCode: `# Sort Colors
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-3`,
    title: `Set Mismatch`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 3,
    slug: `set-mismatch-2-3`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Set Mismatch
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Set Mismatch')`,
    starterCode: `# Set Mismatch
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-4`,
    title: `Set Matrix Zeroes`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 4,
    slug: `set-matrix-zeroes-2-4`,
    explanation: `Grid traversal reference pattern with boundary checks and visited marking.`,
    pythonAnswer: `from typing import List

class Solution:
    def solve(self, grid: List[List[int]]):
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            # Add state checks/updates specific to the prompt.

        for r in range(rows):
            for c in range(cols):
                dfs(r, c)

        return grid`,
    starterCode: `# Set Matrix Zeroes
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-5`,
    title: `Spiral Matrix`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 5,
    slug: `spiral-matrix-2-5`,
    explanation: `Grid traversal reference pattern with boundary checks and visited marking.`,
    pythonAnswer: `from typing import List

class Solution:
    def solve(self, grid: List[List[int]]):
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            # Add state checks/updates specific to the prompt.

        for r in range(rows):
            for c in range(cols):
                dfs(r, c)

        return grid`,
    starterCode: `# Spiral Matrix
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-6`,
    title: `Rotate Image`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 6,
    slug: `rotate-image-2-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Rotate Image
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Rotate Image')`,
    starterCode: `# Rotate Image
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-7`,
    title: `Merge Sorted Arrays Without Extra Space`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 7,
    slug: `merge-sorted-arrays-without-extra-space-2-7`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Merge Sorted Arrays Without Extra Space
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Merge Sorted Arrays Without Extra Space')`,
    starterCode: `# Merge Sorted Arrays Without Extra Space
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-8`,
    title: `Best Time to Buy and Sell Stock`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 8,
    slug: `best-time-to-buy-and-sell-stock-2-8`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Best Time to Buy and Sell Stock
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Best Time to Buy and Sell Stock')`,
    starterCode: `# Best Time to Buy and Sell Stock
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-9`,
    title: `Max Consecutive Ones`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 9,
    slug: `max-consecutive-ones-2-9`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Max Consecutive Ones
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Max Consecutive Ones')`,
    starterCode: `# Max Consecutive Ones
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-10`,
    title: `Sliding Window Maximum`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 10,
    slug: `sliding-window-maximum-2-10`,
    explanation: `Deque stores candidate indices in decreasing value order.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Sliding Window Maximum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `2-11`,
    title: `Longest Consecutive Sequence`,
    week: `Week 2: Medium/Hard Arrays`,
    weekOrder: 2,
    questionOrder: 11,
    slug: `longest-consecutive-sequence-2-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Longest Consecutive Sequence
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Longest Consecutive Sequence')`,
    starterCode: `# Longest Consecutive Sequence
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-1`,
    title: `Valid Anagram`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 1,
    slug: `valid-anagram-3-1`,
    explanation: `Character counts must match exactly for both strings.`,
    pythonAnswer: `from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)`,
    starterCode: `# Valid Anagram
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-2`,
    title: `Isomorphic Strings`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 2,
    slug: `isomorphic-strings-3-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Isomorphic Strings
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Isomorphic Strings')`,
    starterCode: `# Isomorphic Strings
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-3`,
    title: `Group Anagrams`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 3,
    slug: `group-anagrams-3-3`,
    explanation: `Use sorted-character signature as the grouping key.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for word in strs:
            groups[tuple(sorted(word))].append(word)
        return list(groups.values())`,
    starterCode: `# Group Anagrams
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-4`,
    title: `Valid Palindrome`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 4,
    slug: `valid-palindrome-3-4`,
    explanation: `Two-pointer scan over alphanumeric lowercased characters.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Valid Palindrome
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-5`,
    title: `Reverse String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 5,
    slug: `reverse-string-3-5`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Reverse String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Reverse String')`,
    starterCode: `# Reverse String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-6`,
    title: `Reverse Words in a String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 6,
    slug: `reverse-words-in-a-string-3-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Reverse Words in a String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Reverse Words in a String')`,
    starterCode: `# Reverse Words in a String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-7`,
    title: `Valid Palindrome II`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 7,
    slug: `valid-palindrome-ii-3-7`,
    explanation: `Allow one deletion by checking both skip options at first mismatch.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Valid Palindrome II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-8`,
    title: `Longest Palindromic Substring`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 8,
    slug: `longest-palindromic-substring-3-8`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Longest Palindromic Substring
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-9`,
    title: `Longest Substring Without Repeating Characters`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 9,
    slug: `longest-substring-without-repeating-characters-3-9`,
    explanation: `Sliding window tracks last index of each character.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Longest Substring Without Repeating Characters
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-10`,
    title: `Minimum Window Substring`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 10,
    slug: `minimum-window-substring-3-10`,
    explanation: `Expand and contract sliding window while maintaining required counts.`,
    pythonAnswer: `from collections import Counter

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
    starterCode: `# Minimum Window Substring
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-11`,
    title: `Permutation in String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 11,
    slug: `permutation-in-string-3-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Permutation in String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Permutation in String')`,
    starterCode: `# Permutation in String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-12`,
    title: `Find All Anagrams in a String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 12,
    slug: `find-all-anagrams-in-a-string-3-12`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find All Anagrams in a String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find All Anagrams in a String')`,
    starterCode: `# Find All Anagrams in a String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-13`,
    title: `Longest Repeating Character Replacement`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 13,
    slug: `longest-repeating-character-replacement-3-13`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Longest Repeating Character Replacement
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Longest Repeating Character Replacement')`,
    starterCode: `# Longest Repeating Character Replacement
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-14`,
    title: `Longest Substring with At Most K Distinct Characters`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 14,
    slug: `longest-substring-with-at-most-k-distinct-characters-3-14`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Longest Substring with At Most K Distinct Characters
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-15`,
    title: `Valid Parentheses`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 15,
    slug: `valid-parentheses-3-15`,
    explanation: `Stack stores expected closing brackets in sequence.`,
    pythonAnswer: `class Solution:
    def isValid(self, s: str) -> bool:
        close_for = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for ch in s:
            if ch in close_for:
                stack.append(close_for[ch])
            elif not stack or stack.pop() != ch:
                return False
        return not stack`,
    starterCode: `# Valid Parentheses
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-16`,
    title: `Remove All Adjacent Duplicates In String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 16,
    slug: `remove-all-adjacent-duplicates-in-string-3-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Remove All Adjacent Duplicates In String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Remove All Adjacent Duplicates In String')`,
    starterCode: `# Remove All Adjacent Duplicates In String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-17`,
    title: `Decode String`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 17,
    slug: `decode-string-3-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Decode String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Decode String')`,
    starterCode: `# Decode String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-18`,
    title: `Implement strStr()`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 18,
    slug: `implement-strstr-3-18`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Implement strStr()
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Implement strStr()')`,
    starterCode: `# Implement strStr()
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-19`,
    title: `Multiply Strings`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 19,
    slug: `multiply-strings-3-19`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Multiply Strings
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Multiply Strings')`,
    starterCode: `# Multiply Strings
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-20`,
    title: `Remove K Digits`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 20,
    slug: `remove-k-digits-3-20`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Remove K Digits
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Remove K Digits')`,
    starterCode: `# Remove K Digits
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-21`,
    title: `Count and Say`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 21,
    slug: `count-and-say-3-21`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Count and Say
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Count and Say')`,
    starterCode: `# Count and Say
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-22`,
    title: `Basic Calculator II`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 22,
    slug: `basic-calculator-ii-3-22`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Basic Calculator II
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Basic Calculator II')`,
    starterCode: `# Basic Calculator II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `3-23`,
    title: `Design Add and Search Words Data Structure`,
    week: `Week 3: Strings`,
    weekOrder: 3,
    questionOrder: 23,
    slug: `design-add-and-search-words-data-structure-3-23`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Design Add and Search Words Data Structure
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Design Add and Search Words Data Structure')`,
    starterCode: `# Design Add and Search Words Data Structure
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-1`,
    title: `Binary Search`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 1,
    slug: `binary-search-4-1`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Binary Search
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-2`,
    title: `Find Peak Element`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 2,
    slug: `find-peak-element-4-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find Peak Element
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find Peak Element')`,
    starterCode: `# Find Peak Element
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-3`,
    title: `Search Insert Position`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 3,
    slug: `search-insert-position-4-3`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Search Insert Position
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Search Insert Position')`,
    starterCode: `# Search Insert Position
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-4`,
    title: `Search in Rotated Sorted Array`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 4,
    slug: `search-in-rotated-sorted-array-4-4`,
    explanation: `At each step, one side is sorted; keep target in sorted side.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Search in Rotated Sorted Array
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-5`,
    title: `Find Minimum in Rotated Sorted Array`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 5,
    slug: `find-minimum-in-rotated-sorted-array-4-5`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find Minimum in Rotated Sorted Array
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find Minimum in Rotated Sorted Array')`,
    starterCode: `# Find Minimum in Rotated Sorted Array
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-6`,
    title: `Single Element in a Sorted Array`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 6,
    slug: `single-element-in-a-sorted-array-4-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Single Element in a Sorted Array
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Single Element in a Sorted Array')`,
    starterCode: `# Single Element in a Sorted Array
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-7`,
    title: `Search a 2D Matrix`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 7,
    slug: `search-a-2d-matrix-4-7`,
    explanation: `Grid traversal reference pattern with boundary checks and visited marking.`,
    pythonAnswer: `from typing import List

class Solution:
    def solve(self, grid: List[List[int]]):
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            # Add state checks/updates specific to the prompt.

        for r in range(rows):
            for c in range(cols):
                dfs(r, c)

        return grid`,
    starterCode: `# Search a 2D Matrix
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-8`,
    title: `Matrix Median`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 8,
    slug: `matrix-median-4-8`,
    explanation: `Grid traversal reference pattern with boundary checks and visited marking.`,
    pythonAnswer: `from typing import List

class Solution:
    def solve(self, grid: List[List[int]]):
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            # Add state checks/updates specific to the prompt.

        for r in range(rows):
            for c in range(cols):
                dfs(r, c)

        return grid`,
    starterCode: `# Matrix Median
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-9`,
    title: `Time Based Key-Value Store`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 9,
    slug: `time-based-key-value-store-4-9`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Time Based Key-Value Store
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Time Based Key-Value Store')`,
    starterCode: `# Time Based Key-Value Store
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-10`,
    title: `Koko Eating Bananas`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 10,
    slug: `koko-eating-bananas-4-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Koko Eating Bananas
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Koko Eating Bananas')`,
    starterCode: `# Koko Eating Bananas
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-11`,
    title: `Capacity To Ship Packages Within D Days`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 11,
    slug: `capacity-to-ship-packages-within-d-days-4-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Capacity To Ship Packages Within D Days
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Capacity To Ship Packages Within D Days')`,
    starterCode: `# Capacity To Ship Packages Within D Days
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-12`,
    title: `Minimum Number of Days to Make m Bouquets`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 12,
    slug: `minimum-number-of-days-to-make-m-bouquets-4-12`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Minimum Number of Days to Make m Bouquets
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Minimum Number of Days to Make m Bouquets')`,
    starterCode: `# Minimum Number of Days to Make m Bouquets
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-13`,
    title: `Median of Two Sorted Arrays`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 13,
    slug: `median-of-two-sorted-arrays-4-13`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Median of Two Sorted Arrays
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Median of Two Sorted Arrays')`,
    starterCode: `# Median of Two Sorted Arrays
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-14`,
    title: `K-th Element of Two Sorted Arrays`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 14,
    slug: `k-th-element-of-two-sorted-arrays-4-14`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# K-th Element of Two Sorted Arrays
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement K-th Element of Two Sorted Arrays')`,
    starterCode: `# K-th Element of Two Sorted Arrays
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-15`,
    title: `Nth Root of an Integer`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 15,
    slug: `nth-root-of-an-integer-4-15`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Nth Root of an Integer
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Nth Root of an Integer')`,
    starterCode: `# Nth Root of an Integer
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-16`,
    title: `Insert Interval`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 16,
    slug: `insert-interval-4-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Insert Interval
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Insert Interval')`,
    starterCode: `# Insert Interval
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-17`,
    title: `Merge Intervals`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 17,
    slug: `merge-intervals-4-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Merge Intervals
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Merge Intervals')`,
    starterCode: `# Merge Intervals
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-18`,
    title: `Allocate Minimum Number of Pages`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 18,
    slug: `allocate-minimum-number-of-pages-4-18`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Allocate Minimum Number of Pages
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Allocate Minimum Number of Pages')`,
    starterCode: `# Allocate Minimum Number of Pages
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-19`,
    title: `Book Allocation Problem`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 19,
    slug: `book-allocation-problem-4-19`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Book Allocation Problem
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Book Allocation Problem')`,
    starterCode: `# Book Allocation Problem
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `4-20`,
    title: `Aggressive Cows`,
    week: `Week 4: Searching & Sorting`,
    weekOrder: 4,
    questionOrder: 20,
    slug: `aggressive-cows-4-20`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Aggressive Cows
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Aggressive Cows')`,
    starterCode: `# Aggressive Cows
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-1`,
    title: `Reverse Linked List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 1,
    slug: `reverse-linked-list-5-1`,
    explanation: `Iteratively redirect pointers using prev/curr traversal.`,
    pythonAnswer: `# class ListNode:
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
    starterCode: `# Reverse Linked List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-2`,
    title: `Middle of the Linked List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 2,
    slug: `middle-of-the-linked-list-5-2`,
    explanation: `Two-pointer linked-list reference pattern; adapt pointer logic for the exact objective.`,
    pythonAnswer: `class Solution:
    def solve(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow`,
    starterCode: `# Middle of the Linked List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-3`,
    title: `Merge Two Sorted Lists`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 3,
    slug: `merge-two-sorted-lists-5-3`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Merge Two Sorted Lists
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Merge Two Sorted Lists')`,
    starterCode: `# Merge Two Sorted Lists
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-4`,
    title: `Remove Nth Node From End of List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 4,
    slug: `remove-nth-node-from-end-of-list-5-4`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Remove Nth Node From End of List
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Remove Nth Node From End of List')`,
    starterCode: `# Remove Nth Node From End of List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-5`,
    title: `Delete Node in a Linked List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 5,
    slug: `delete-node-in-a-linked-list-5-5`,
    explanation: `Two-pointer linked-list reference pattern; adapt pointer logic for the exact objective.`,
    pythonAnswer: `class Solution:
    def solve(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow`,
    starterCode: `# Delete Node in a Linked List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-6`,
    title: `Intersection of Two Linked Lists`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 6,
    slug: `intersection-of-two-linked-lists-5-6`,
    explanation: `Two-pointer linked-list reference pattern; adapt pointer logic for the exact objective.`,
    pythonAnswer: `class Solution:
    def solve(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow`,
    starterCode: `# Intersection of Two Linked Lists
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-7`,
    title: `Linked List Cycle`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 7,
    slug: `linked-list-cycle-5-7`,
    explanation: `Floyd tortoise-hare detects a cycle in O(1) space.`,
    pythonAnswer: `class Solution:
    def hasCycle(self, head) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`,
    starterCode: `# Linked List Cycle
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-8`,
    title: `Linked List Cycle II`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 8,
    slug: `linked-list-cycle-ii-5-8`,
    explanation: `Floyd cycle detection finds meeting point and cycle entry.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Linked List Cycle II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-9`,
    title: `Palindrome Linked List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 9,
    slug: `palindrome-linked-list-5-9`,
    explanation: `Two-pointer linked-list reference pattern; adapt pointer logic for the exact objective.`,
    pythonAnswer: `class Solution:
    def solve(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow`,
    starterCode: `# Palindrome Linked List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-10`,
    title: `Add Two Numbers`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 10,
    slug: `add-two-numbers-5-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Add Two Numbers
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Add Two Numbers')`,
    starterCode: `# Add Two Numbers
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-11`,
    title: `Reorder List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 11,
    slug: `reorder-list-5-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Reorder List
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Reorder List')`,
    starterCode: `# Reorder List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-12`,
    title: `Rotate List`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 12,
    slug: `rotate-list-5-12`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Rotate List
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Rotate List')`,
    starterCode: `# Rotate List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-13`,
    title: `Reverse Linked List II`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 13,
    slug: `reverse-linked-list-ii-5-13`,
    explanation: `Iteratively redirect pointers using prev/curr traversal.`,
    pythonAnswer: `# class ListNode:
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
    starterCode: `# Reverse Linked List II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-14`,
    title: `Reverse Nodes in k-Group`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 14,
    slug: `reverse-nodes-in-k-group-5-14`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Reverse Nodes in k-Group
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Reverse Nodes in k-Group')`,
    starterCode: `# Reverse Nodes in k-Group
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-15`,
    title: `Copy List with Random Pointer`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 15,
    slug: `copy-list-with-random-pointer-5-15`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Copy List with Random Pointer
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Copy List with Random Pointer')`,
    starterCode: `# Copy List with Random Pointer
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-16`,
    title: `LRU Cache`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 16,
    slug: `lru-cache-5-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LRU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LRU Cache')`,
    starterCode: `# LRU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-17`,
    title: `LFU Cache`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 17,
    slug: `lfu-cache-5-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LFU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LFU Cache')`,
    starterCode: `# LFU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-18`,
    title: `Merge k Sorted Lists`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 18,
    slug: `merge-k-sorted-lists-5-18`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Merge k Sorted Lists
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Merge k Sorted Lists')`,
    starterCode: `# Merge k Sorted Lists
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-19`,
    title: `Find the Duplicate Number`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 19,
    slug: `find-the-duplicate-number-5-19`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Find the Duplicate Number
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Find the Duplicate Number')`,
    starterCode: `# Find the Duplicate Number
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `5-20`,
    title: `Binary Tree to DLL`,
    week: `Week 5: Linked Lists`,
    weekOrder: 5,
    questionOrder: 20,
    slug: `binary-tree-to-dll-5-20`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Binary Tree to DLL
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-1`,
    title: `Min Stack`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 1,
    slug: `min-stack-6-1`,
    explanation: `Store pairs of value and minimum-so-far on stack.`,
    pythonAnswer: `class MinStack:
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
    starterCode: `# Min Stack
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-2`,
    title: `Implement Stack using Queues`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 2,
    slug: `implement-stack-using-queues-6-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Implement Stack using Queues
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Implement Stack using Queues')`,
    starterCode: `# Implement Stack using Queues
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-3`,
    title: `Valid Parentheses`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 3,
    slug: `valid-parentheses-6-3`,
    explanation: `Stack stores expected closing brackets in sequence.`,
    pythonAnswer: `class Solution:
    def isValid(self, s: str) -> bool:
        close_for = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for ch in s:
            if ch in close_for:
                stack.append(close_for[ch])
            elif not stack or stack.pop() != ch:
                return False
        return not stack`,
    starterCode: `# Valid Parentheses
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-4`,
    title: `Implement Queue using Stacks`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 4,
    slug: `implement-queue-using-stacks-6-4`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Implement Queue using Stacks
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Implement Queue using Stacks')`,
    starterCode: `# Implement Queue using Stacks
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-5`,
    title: `Evaluate Reverse Polish Notation`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 5,
    slug: `evaluate-reverse-polish-notation-6-5`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Evaluate Reverse Polish Notation
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Evaluate Reverse Polish Notation')`,
    starterCode: `# Evaluate Reverse Polish Notation
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-6`,
    title: `Daily Temperatures`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 6,
    slug: `daily-temperatures-6-6`,
    explanation: `Monotonic decreasing stack gives next warmer day index.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Daily Temperatures
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-7`,
    title: `Next Greater Element I`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 7,
    slug: `next-greater-element-i-6-7`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Next Greater Element I
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Next Greater Element I')`,
    starterCode: `# Next Greater Element I
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-8`,
    title: `Next Greater Element II`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 8,
    slug: `next-greater-element-ii-6-8`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Next Greater Element II
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Next Greater Element II')`,
    starterCode: `# Next Greater Element II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-9`,
    title: `Next Smaller Element`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 9,
    slug: `next-smaller-element-6-9`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Next Smaller Element
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Next Smaller Element')`,
    starterCode: `# Next Smaller Element
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-10`,
    title: `Stock Span Problem`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 10,
    slug: `stock-span-problem-6-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Stock Span Problem
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Stock Span Problem')`,
    starterCode: `# Stock Span Problem
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-11`,
    title: `Sliding Window Maximum`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 11,
    slug: `sliding-window-maximum-6-11`,
    explanation: `Deque stores candidate indices in decreasing value order.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Sliding Window Maximum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-12`,
    title: `First Negative Integer in Every Window`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 12,
    slug: `first-negative-integer-in-every-window-6-12`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# First Negative Integer in Every Window
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-13`,
    title: `Maximum of All Subarrays`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 13,
    slug: `maximum-of-all-subarrays-6-13`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Maximum of All Subarrays
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-14`,
    title: `Largest Rectangle in Histogram`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 14,
    slug: `largest-rectangle-in-histogram-6-14`,
    explanation: `Monotonic stack computes max rectangle with each bar as min height.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Largest Rectangle in Histogram
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-15`,
    title: `Trapping Rain Water`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 15,
    slug: `trapping-rain-water-6-15`,
    explanation: `Two pointers maintain max left/right boundaries and trapped water.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Trapping Rain Water
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-16`,
    title: `Minimum Add to Make Parentheses Valid`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 16,
    slug: `minimum-add-to-make-parentheses-valid-6-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Minimum Add to Make Parentheses Valid
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Minimum Add to Make Parentheses Valid')`,
    starterCode: `# Minimum Add to Make Parentheses Valid
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-17`,
    title: `Remove K Digits`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 17,
    slug: `remove-k-digits-6-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Remove K Digits
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Remove K Digits')`,
    starterCode: `# Remove K Digits
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-18`,
    title: `Decode String`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 18,
    slug: `decode-string-6-18`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Decode String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Decode String')`,
    starterCode: `# Decode String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-19`,
    title: `Simplify Path`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 19,
    slug: `simplify-path-6-19`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Simplify Path
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-20`,
    title: `LRU Cache`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 20,
    slug: `lru-cache-6-20`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LRU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LRU Cache')`,
    starterCode: `# LRU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-21`,
    title: `LFU Cache`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 21,
    slug: `lfu-cache-6-21`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LFU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LFU Cache')`,
    starterCode: `# LFU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `6-22`,
    title: `Insert Delete GetRandom O(1)`,
    week: `Week 6: Stacks & Queues`,
    weekOrder: 6,
    questionOrder: 22,
    slug: `insert-delete-getrandom-o-1-6-22`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Insert Delete GetRandom O(1)
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Insert Delete GetRandom O(1)')`,
    starterCode: `# Insert Delete GetRandom O(1)
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-1`,
    title: `Binary Tree Inorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 1,
    slug: `binary-tree-inorder-traversal-7-1`,
    explanation: `Recursive DFS visits left-root-right.`,
    pythonAnswer: `from typing import List, Optional

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
    starterCode: `# Binary Tree Inorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-2`,
    title: `Binary Tree Preorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 2,
    slug: `binary-tree-preorder-traversal-7-2`,
    explanation: `Recursive DFS visits root-left-right.`,
    pythonAnswer: `from typing import List, Optional

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
    starterCode: `# Binary Tree Preorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-3`,
    title: `Binary Tree Postorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 3,
    slug: `binary-tree-postorder-traversal-7-3`,
    explanation: `Recursive DFS visits left-right-root.`,
    pythonAnswer: `from typing import List, Optional

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
    starterCode: `# Binary Tree Postorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-4`,
    title: `Binary Tree Level Order Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 4,
    slug: `binary-tree-level-order-traversal-7-4`,
    explanation: `BFS with queue processes nodes level by level.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Binary Tree Level Order Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-5`,
    title: `Binary Tree Zigzag Level Order Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 5,
    slug: `binary-tree-zigzag-level-order-traversal-7-5`,
    explanation: `BFS with queue processes nodes level by level.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Binary Tree Zigzag Level Order Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-6`,
    title: `Binary Tree Right Side View`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 6,
    slug: `binary-tree-right-side-view-7-6`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Binary Tree Right Side View
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-7`,
    title: `Left View of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 7,
    slug: `left-view-of-binary-tree-7-7`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Left View of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-8`,
    title: `Top View of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 8,
    slug: `top-view-of-binary-tree-7-8`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Top View of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-9`,
    title: `Bottom View of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 9,
    slug: `bottom-view-of-binary-tree-7-9`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Bottom View of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-10`,
    title: `Boundary Traversal of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 10,
    slug: `boundary-traversal-of-binary-tree-7-10`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Boundary Traversal of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-11`,
    title: `Maximum Width of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 11,
    slug: `maximum-width-of-binary-tree-7-11`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Maximum Width of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-12`,
    title: `Maximum Depth of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 12,
    slug: `maximum-depth-of-binary-tree-7-12`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Maximum Depth of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-13`,
    title: `Diameter of Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 13,
    slug: `diameter-of-binary-tree-7-13`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Diameter of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-14`,
    title: `Validate Binary Search Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 14,
    slug: `validate-binary-search-tree-7-14`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Validate Binary Search Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-15`,
    title: `Balanced Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 15,
    slug: `balanced-binary-tree-7-15`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Balanced Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-16`,
    title: `Same Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 16,
    slug: `same-tree-7-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Same Tree
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Same Tree')`,
    starterCode: `# Same Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-17`,
    title: `Symmetric Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 17,
    slug: `symmetric-tree-7-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Symmetric Tree
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Symmetric Tree')`,
    starterCode: `# Symmetric Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-18`,
    title: `Invert Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 18,
    slug: `invert-binary-tree-7-18`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Invert Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-19`,
    title: `Lowest Common Ancestor of a Binary Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 19,
    slug: `lowest-common-ancestor-of-a-binary-tree-7-19`,
    explanation: `Postorder recursion returns node when split across subtrees.`,
    pythonAnswer: `class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if left and right:
            return root
        return left or right`,
    starterCode: `# Lowest Common Ancestor of a Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-20`,
    title: `Lowest Common Ancestor of a Binary Search Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 20,
    slug: `lowest-common-ancestor-of-a-binary-search-tree-7-20`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Lowest Common Ancestor of a Binary Search Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-21`,
    title: `Search in a Binary Search Tree`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 21,
    slug: `search-in-a-binary-search-tree-7-21`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Search in a Binary Search Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-22`,
    title: `Construct Binary Tree from Preorder and Inorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 22,
    slug: `construct-binary-tree-from-preorder-and-inorder-traversal-7-22`,
    explanation: `Recursive DFS visits left-root-right.`,
    pythonAnswer: `from typing import List, Optional

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
    starterCode: `# Construct Binary Tree from Preorder and Inorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-23`,
    title: `Construct Binary Tree from Inorder and Postorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 23,
    slug: `construct-binary-tree-from-inorder-and-postorder-traversal-7-23`,
    explanation: `Recursive DFS visits left-right-root.`,
    pythonAnswer: `from typing import List, Optional

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
    starterCode: `# Construct Binary Tree from Inorder and Postorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-24`,
    title: `Construct Binary Search Tree from Preorder Traversal`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 24,
    slug: `construct-binary-search-tree-from-preorder-traversal-7-24`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Construct Binary Search Tree from Preorder Traversal
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-25`,
    title: `Flatten Binary Tree to Linked List`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 25,
    slug: `flatten-binary-tree-to-linked-list-7-25`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Flatten Binary Tree to Linked List
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-26`,
    title: `Binary Tree Paths`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 26,
    slug: `binary-tree-paths-7-26`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Binary Tree Paths
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-27`,
    title: `Inorder Successor in BST`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 27,
    slug: `inorder-successor-in-bst-7-27`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Inorder Successor in BST
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-28`,
    title: `Populating Next Right Pointers in Each Node`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 28,
    slug: `populating-next-right-pointers-in-each-node-7-28`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Populating Next Right Pointers in Each Node
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Populating Next Right Pointers in Each Node')`,
    starterCode: `# Populating Next Right Pointers in Each Node
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `7-29`,
    title: `Print All Subsequences`,
    week: `Week 7: Trees & BSTs`,
    weekOrder: 7,
    questionOrder: 29,
    slug: `print-all-subsequences-7-29`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Print All Subsequences
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Print All Subsequences')`,
    starterCode: `# Print All Subsequences
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-1`,
    title: `Kth Smallest Element in a BST`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 1,
    slug: `kth-smallest-element-in-a-bst-8-1`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Kth Smallest Element in a BST
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-2`,
    title: `Kth Largest Element in a Stream`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 2,
    slug: `kth-largest-element-in-a-stream-8-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Kth Largest Element in a Stream
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Kth Largest Element in a Stream')`,
    starterCode: `# Kth Largest Element in a Stream
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-3`,
    title: `Binary Search Tree Iterator`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 3,
    slug: `binary-search-tree-iterator-8-3`,
    explanation: `Classic low/high binary search over sorted array.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Binary Search Tree Iterator
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-4`,
    title: `Serialize and Deserialize Binary Tree`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 4,
    slug: `serialize-and-deserialize-binary-tree-8-4`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Serialize and Deserialize Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-5`,
    title: `Subtree of Another Tree`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 5,
    slug: `subtree-of-another-tree-8-5`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Subtree of Another Tree
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Subtree of Another Tree')`,
    starterCode: `# Subtree of Another Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-6`,
    title: `Count Good Nodes in Binary Tree`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 6,
    slug: `count-good-nodes-in-binary-tree-8-6`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Count Good Nodes in Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-7`,
    title: `Range Minimum Query`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 7,
    slug: `range-minimum-query-8-7`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Range Minimum Query
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Range Minimum Query')`,
    starterCode: `# Range Minimum Query
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-8`,
    title: `Segment Tree Build & Query`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 8,
    slug: `segment-tree-build-query-8-8`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Segment Tree Build & Query
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Segment Tree Build & Query')`,
    starterCode: `# Segment Tree Build & Query
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-9`,
    title: `Implement Trie (Prefix Tree)`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 9,
    slug: `implement-trie-prefix-tree-8-9`,
    explanation: `Nested dict nodes store children and end-of-word marker.`,
    pythonAnswer: `class TrieNode:
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
    starterCode: `# Implement Trie (Prefix Tree)
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-10`,
    title: `Design Add and Search Words Data Structure`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 10,
    slug: `design-add-and-search-words-data-structure-8-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Design Add and Search Words Data Structure
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Design Add and Search Words Data Structure')`,
    starterCode: `# Design Add and Search Words Data Structure
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-11`,
    title: `Word Search`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 11,
    slug: `word-search-8-11`,
    explanation: `Backtracking DFS with visited marking finds word path.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Word Search
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-12`,
    title: `Word Search II`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 12,
    slug: `word-search-ii-8-12`,
    explanation: `Build trie + DFS backtracking with pruning.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Word Search II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-13`,
    title: `Binary Tree Maximum Path Sum`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 13,
    slug: `binary-tree-maximum-path-sum-8-13`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Binary Tree Maximum Path Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `8-14`,
    title: `Diameter of Binary Tree`,
    week: `Week 8: Advanced Trees, Trie, Segment Trees`,
    weekOrder: 8,
    questionOrder: 14,
    slug: `diameter-of-binary-tree-8-14`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Diameter of Binary Tree
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-1`,
    title: `Kth Largest Element in an Array`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 1,
    slug: `kth-largest-element-in-an-array-9-1`,
    explanation: `Min-heap of size k keeps current k largest values.`,
    pythonAnswer: `import heapq
from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = nums[:k]
        heapq.heapify(heap)
        for num in nums[k:]:
            if num > heap[0]:
                heapq.heapreplace(heap, num)
        return heap[0]`,
    starterCode: `# Kth Largest Element in an Array
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-2`,
    title: `Kth Largest Element in a Stream`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 2,
    slug: `kth-largest-element-in-a-stream-9-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Kth Largest Element in a Stream
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Kth Largest Element in a Stream')`,
    starterCode: `# Kth Largest Element in a Stream
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-3`,
    title: `Last Stone Weight`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 3,
    slug: `last-stone-weight-9-3`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Last Stone Weight
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Last Stone Weight')`,
    starterCode: `# Last Stone Weight
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-4`,
    title: `K Closest Points to Origin`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 4,
    slug: `k-closest-points-to-origin-9-4`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# K Closest Points to Origin
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement K Closest Points to Origin')`,
    starterCode: `# K Closest Points to Origin
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-5`,
    title: `Top K Frequent Elements`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 5,
    slug: `top-k-frequent-elements-9-5`,
    explanation: `Count then return top-k by frequency.`,
    pythonAnswer: `from collections import Counter
from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        return [num for num, _ in Counter(nums).most_common(k)]`,
    starterCode: `# Top K Frequent Elements
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-6`,
    title: `Top K Frequent Words`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 6,
    slug: `top-k-frequent-words-9-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Top K Frequent Words
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Top K Frequent Words')`,
    starterCode: `# Top K Frequent Words
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-7`,
    title: `Sort Characters By Frequency`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 7,
    slug: `sort-characters-by-frequency-9-7`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Sort Characters By Frequency
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Sort Characters By Frequency')`,
    starterCode: `# Sort Characters By Frequency
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-8`,
    title: `Rearrange String k Distance Apart`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 8,
    slug: `rearrange-string-k-distance-apart-9-8`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Rearrange String k Distance Apart
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Rearrange String k Distance Apart')`,
    starterCode: `# Rearrange String k Distance Apart
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-9`,
    title: `Task Scheduler`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 9,
    slug: `task-scheduler-9-9`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Task Scheduler
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Task Scheduler')`,
    starterCode: `# Task Scheduler
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-10`,
    title: `Design Twitter`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 10,
    slug: `design-twitter-9-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Design Twitter
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Design Twitter')`,
    starterCode: `# Design Twitter
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-11`,
    title: `Reorganize String`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 11,
    slug: `reorganize-string-9-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Reorganize String
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Reorganize String')`,
    starterCode: `# Reorganize String
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-12`,
    title: `Maximum Frequency Stack`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 12,
    slug: `maximum-frequency-stack-9-12`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Maximum Frequency Stack
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Maximum Frequency Stack')`,
    starterCode: `# Maximum Frequency Stack
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-13`,
    title: `Find Median from Data Stream`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 13,
    slug: `find-median-from-data-stream-9-13`,
    explanation: `Two heaps balance lower and upper halves.`,
    pythonAnswer: `import heapq

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
    starterCode: `# Find Median from Data Stream
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-14`,
    title: `Sliding Window Median`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 14,
    slug: `sliding-window-median-9-14`,
    explanation: `Sliding window / prefix-sum reference pattern for contiguous range problems.`,
    pythonAnswer: `from collections import defaultdict
from typing import List

class Solution:
    def solve(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1
        prefix = 0
        ans = 0

        for num in nums:
            prefix += num
            ans += count[prefix - k]
            count[prefix] += 1

        return ans`,
    starterCode: `# Sliding Window Median
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-15`,
    title: `Sliding Window Maximum`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 15,
    slug: `sliding-window-maximum-9-15`,
    explanation: `Deque stores candidate indices in decreasing value order.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Sliding Window Maximum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-16`,
    title: `LFU Cache`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 16,
    slug: `lfu-cache-9-16`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LFU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LFU Cache')`,
    starterCode: `# LFU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-17`,
    title: `LRU Cache`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 17,
    slug: `lru-cache-9-17`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# LRU Cache
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement LRU Cache')`,
    starterCode: `# LRU Cache
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-18`,
    title: `IPO`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 18,
    slug: `ipo-9-18`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# IPO
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement IPO')`,
    starterCode: `# IPO
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-19`,
    title: `Merge k Sorted Lists`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 19,
    slug: `merge-k-sorted-lists-9-19`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Merge k Sorted Lists
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Merge k Sorted Lists')`,
    starterCode: `# Merge k Sorted Lists
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-20`,
    title: `Smallest Range Covering Elements from K Lists`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 20,
    slug: `smallest-range-covering-elements-from-k-lists-9-20`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Smallest Range Covering Elements from K Lists
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Smallest Range Covering Elements from K Lists')`,
    starterCode: `# Smallest Range Covering Elements from K Lists
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-21`,
    title: `Meeting Rooms II`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 21,
    slug: `meeting-rooms-ii-9-21`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Meeting Rooms II
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Meeting Rooms II')`,
    starterCode: `# Meeting Rooms II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `9-22`,
    title: `Minimum Cost to Connect Sticks`,
    week: `Week 9: Heaps / Priority Queue`,
    weekOrder: 9,
    questionOrder: 22,
    slug: `minimum-cost-to-connect-sticks-9-22`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Minimum Cost to Connect Sticks
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Minimum Cost to Connect Sticks')`,
    starterCode: `# Minimum Cost to Connect Sticks
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-1`,
    title: `Depth-First Search`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 1,
    slug: `depth-first-search-10-1`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Depth-First Search
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Depth-First Search')`,
    starterCode: `# Depth-First Search
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-2`,
    title: `Breadth-First Search`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 2,
    slug: `breadth-first-search-10-2`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Breadth-First Search
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Breadth-First Search')`,
    starterCode: `# Breadth-First Search
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-3`,
    title: `Detect Cycle in an Undirected Graph`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 3,
    slug: `detect-cycle-in-an-undirected-graph-10-3`,
    explanation: `Graph traversal reference pattern (BFS/DFS) with visited tracking.`,
    pythonAnswer: `from collections import defaultdict, deque

class Solution:
    def solve(self, n, edges):
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        q = deque([0])
        visited.add(0)

        while q:
            node = q.popleft()
            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        return len(visited)`,
    starterCode: `# Detect Cycle in an Undirected Graph
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-4`,
    title: `Detect Cycle in a Directed Graph`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 4,
    slug: `detect-cycle-in-a-directed-graph-10-4`,
    explanation: `Graph traversal reference pattern (BFS/DFS) with visited tracking.`,
    pythonAnswer: `from collections import defaultdict, deque

class Solution:
    def solve(self, n, edges):
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        q = deque([0])
        visited.add(0)

        while q:
            node = q.popleft()
            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        return len(visited)`,
    starterCode: `# Detect Cycle in a Directed Graph
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-5`,
    title: `Course Schedule`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 5,
    slug: `course-schedule-10-5`,
    explanation: `Kahn BFS topological sort detects whether all nodes can be completed.`,
    pythonAnswer: `from collections import defaultdict, deque
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
    starterCode: `# Course Schedule
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-6`,
    title: `Topological Sorting`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 6,
    slug: `topological-sorting-10-6`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Topological Sorting
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Topological Sorting')`,
    starterCode: `# Topological Sorting
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-7`,
    title: `Course Schedule II`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 7,
    slug: `course-schedule-ii-10-7`,
    explanation: `Topological sort via indegree and BFS queue.`,
    pythonAnswer: `from collections import defaultdict, deque
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
    starterCode: `# Course Schedule II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-8`,
    title: `Number of Islands`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 8,
    slug: `number-of-islands-10-8`,
    explanation: `DFS flood-fill each unvisited land cell and count components.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Number of Islands
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-9`,
    title: `Max Area of Island`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 9,
    slug: `max-area-of-island-10-9`,
    explanation: `Graph traversal reference pattern (BFS/DFS) with visited tracking.`,
    pythonAnswer: `from collections import defaultdict, deque

class Solution:
    def solve(self, n, edges):
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        q = deque([0])
        visited.add(0)

        while q:
            node = q.popleft()
            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        return len(visited)`,
    starterCode: `# Max Area of Island
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-10`,
    title: `Number of Connected Components in an Undirected Graph`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 10,
    slug: `number-of-connected-components-in-an-undirected-graph-10-10`,
    explanation: `Graph traversal reference pattern (BFS/DFS) with visited tracking.`,
    pythonAnswer: `from collections import defaultdict, deque

class Solution:
    def solve(self, n, edges):
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        q = deque([0])
        visited.add(0)

        while q:
            node = q.popleft()
            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        return len(visited)`,
    starterCode: `# Number of Connected Components in an Undirected Graph
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-11`,
    title: `Surrounded Regions`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 11,
    slug: `surrounded-regions-10-11`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Surrounded Regions
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Surrounded Regions')`,
    starterCode: `# Surrounded Regions
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-12`,
    title: `Pacific Atlantic Water Flow`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 12,
    slug: `pacific-atlantic-water-flow-10-12`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Pacific Atlantic Water Flow
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Pacific Atlantic Water Flow')`,
    starterCode: `# Pacific Atlantic Water Flow
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-13`,
    title: `Rotting Oranges`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 13,
    slug: `rotting-oranges-10-13`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Rotting Oranges
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Rotting Oranges')`,
    starterCode: `# Rotting Oranges
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-14`,
    title: `Flood Fill`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 14,
    slug: `flood-fill-10-14`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Flood Fill
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Flood Fill')`,
    starterCode: `# Flood Fill
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-15`,
    title: `Is Graph Bipartite?`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 15,
    slug: `is-graph-bipartite-10-15`,
    explanation: `Graph traversal reference pattern (BFS/DFS) with visited tracking.`,
    pythonAnswer: `from collections import defaultdict, deque

class Solution:
    def solve(self, n, edges):
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()
        q = deque([0])
        visited.add(0)

        while q:
            node = q.popleft()
            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        return len(visited)`,
    starterCode: `# Is Graph Bipartite?
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-16`,
    title: `Word Ladder`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 16,
    slug: `word-ladder-10-16`,
    explanation: `BFS by single-letter transformations gives shortest path length.`,
    pythonAnswer: `from collections import deque
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
    starterCode: `# Word Ladder
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-17`,
    title: `Word Ladder II`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 17,
    slug: `word-ladder-ii-10-17`,
    explanation: `BFS layers for distances + DFS backtracking for all shortest paths.`,
    pythonAnswer: `from collections import defaultdict
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
    starterCode: `# Word Ladder II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-18`,
    title: `Clone Graph`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 18,
    slug: `clone-graph-10-18`,
    explanation: `DFS with hashmap copies each node once and reconnects neighbors.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Clone Graph
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-19`,
    title: `Alien Dictionary`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 19,
    slug: `alien-dictionary-10-19`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Alien Dictionary
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Alien Dictionary')`,
    starterCode: `# Alien Dictionary
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-20`,
    title: `Dijkstra's Algorithm`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 20,
    slug: `dijkstra-s-algorithm-10-20`,
    explanation: `Priority queue always expands the currently shortest known distance.`,
    pythonAnswer: `import heapq
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
    starterCode: `# Dijkstra's Algorithm
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-21`,
    title: `Cheapest Flights Within K Stops`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 21,
    slug: `cheapest-flights-within-k-stops-10-21`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Cheapest Flights Within K Stops
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Cheapest Flights Within K Stops')`,
    starterCode: `# Cheapest Flights Within K Stops
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `10-22`,
    title: `M-Coloring Problem`,
    week: `Week 10-11: Graphs`,
    weekOrder: 10,
    questionOrder: 22,
    slug: `m-coloring-problem-10-22`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# M-Coloring Problem
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement M-Coloring Problem')`,
    starterCode: `# M-Coloring Problem
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-1`,
    title: `Climbing Stairs`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 1,
    slug: `climbing-stairs-11-1`,
    explanation: `Fibonacci-style DP with O(1) space.`,
    pythonAnswer: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b`,
    starterCode: `# Climbing Stairs
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-2`,
    title: `Minimum Cost Climbing Stairs`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 2,
    slug: `minimum-cost-climbing-stairs-11-2`,
    explanation: `Fibonacci-style DP with O(1) space.`,
    pythonAnswer: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b`,
    starterCode: `# Minimum Cost Climbing Stairs
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-3`,
    title: `Jump Game`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 3,
    slug: `jump-game-11-3`,
    explanation: `Greedy keep the farthest reachable index while scanning.`,
    pythonAnswer: `from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        farthest = 0
        for i, jump in enumerate(nums):
            if i > farthest:
                return False
            farthest = max(farthest, i + jump)
        return True`,
    starterCode: `# Jump Game
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-4`,
    title: `Jump Game II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 4,
    slug: `jump-game-ii-11-4`,
    explanation: `Greedy range expansion tracks minimum jumps per layer.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Jump Game II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-5`,
    title: `Coin Change`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 5,
    slug: `coin-change-11-5`,
    explanation: `1D DP where dp[x] is minimum coins to make sum x.`,
    pythonAnswer: `from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        INF = amount + 1
        dp = [0] + [INF] * amount

        for x in range(1, amount + 1):
            for coin in coins:
                if coin <= x:
                    dp[x] = min(dp[x], dp[x - coin] + 1)

        return dp[amount] if dp[amount] != INF else -1`,
    starterCode: `# Coin Change
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-6`,
    title: `Coin Change II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 6,
    slug: `coin-change-ii-11-6`,
    explanation: `1D DP counts combinations with each coin used in forward order.`,
    pythonAnswer: `from typing import List

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] += dp[x - coin]
        return dp[amount]`,
    starterCode: `# Coin Change II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-7`,
    title: `House Robber`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 7,
    slug: `house-robber-11-7`,
    explanation: `At each house choose rob or skip using rolling DP.`,
    pythonAnswer: `from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        rob1 = rob2 = 0
        for n in nums:
            rob1, rob2 = rob2, max(rob2, rob1 + n)
        return rob2`,
    starterCode: `# House Robber
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-8`,
    title: `House Robber II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 8,
    slug: `house-robber-ii-11-8`,
    explanation: `Solve two linear rob passes (exclude first or exclude last).`,
    pythonAnswer: `from typing import List

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
    starterCode: `# House Robber II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-9`,
    title: `Paint House`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 9,
    slug: `paint-house-11-9`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Paint House
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Paint House')`,
    starterCode: `# Paint House
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-10`,
    title: `Triangle`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 10,
    slug: `triangle-11-10`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Triangle
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Triangle')`,
    starterCode: `# Triangle
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-11`,
    title: `Decode Ways`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 11,
    slug: `decode-ways-11-11`,
    explanation: `DP counts decodings from each index with 1- or 2-digit transitions.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Decode Ways
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-12`,
    title: `Word Break`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 12,
    slug: `word-break-11-12`,
    explanation: `DP over string indices checks dictionary word endings.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Word Break
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-13`,
    title: `Word Break II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 13,
    slug: `word-break-ii-11-13`,
    explanation: `Memoized DFS builds all valid sentence decompositions.`,
    pythonAnswer: `from functools import lru_cache
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
    starterCode: `# Word Break II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-14`,
    title: `Longest Increasing Subsequence`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 14,
    slug: `longest-increasing-subsequence-11-14`,
    explanation: `Patience sorting with binary search gives O(n log n).`,
    pythonAnswer: `from bisect import bisect_left
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
    starterCode: `# Longest Increasing Subsequence
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-15`,
    title: `Maximum Product Subarray`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 15,
    slug: `maximum-product-subarray-11-15`,
    explanation: `Track both max and min products because negatives can swap roles.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Maximum Product Subarray
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-16`,
    title: `Palindromic Substrings`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 16,
    slug: `palindromic-substrings-11-16`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Palindromic Substrings
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-17`,
    title: `Longest Palindromic Substring`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 17,
    slug: `longest-palindromic-substring-11-17`,
    explanation: `Tree DFS/BFS reference pattern; adapt traversal/order/constraint to the exact prompt.`,
    pythonAnswer: `from collections import deque

class Solution:
    def solve(self, root):
        if not root:
            return None

        q = deque([root])
        result = []
        while q:
            node = q.popleft()
            result.append(node.val)
            if getattr(node, 'left', None):
                q.append(node.left)
            if getattr(node, 'right', None):
                q.append(node.right)

        return result`,
    starterCode: `# Longest Palindromic Substring
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-18`,
    title: `Unique Paths`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 18,
    slug: `unique-paths-11-18`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Unique Paths
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-19`,
    title: `Unique Paths II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 19,
    slug: `unique-paths-ii-11-19`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Unique Paths II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-20`,
    title: `Minimum Path Sum`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 20,
    slug: `minimum-path-sum-11-20`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Minimum Path Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-21`,
    title: `Target Sum`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 21,
    slug: `target-sum-11-21`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Target Sum
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Target Sum')`,
    starterCode: `# Target Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-22`,
    title: `Partition Equal Subset Sum`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 22,
    slug: `partition-equal-subset-sum-11-22`,
    explanation: `Subset-sum DP tracks reachable sums up to target/2.`,
    pythonAnswer: `from typing import List

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
    starterCode: `# Partition Equal Subset Sum
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-23`,
    title: `Palindrome Partitioning`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 23,
    slug: `palindrome-partitioning-11-23`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Palindrome Partitioning
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-24`,
    title: `Palindrome Partitioning II`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 24,
    slug: `palindrome-partitioning-ii-11-24`,
    explanation: `Dynamic programming reference template with memo/iterative transitions.`,
    pythonAnswer: `from functools import lru_cache

class Solution:
    def solve(self, *args):
        @lru_cache(maxsize=None)
        def dp(i: int) -> int:
            if i == 0:
                return 0
            best = dp(i - 1)
            # Add additional transitions for this problem.
            return best

        return dp(0)`,
    starterCode: `# Palindrome Partitioning II
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-25`,
    title: `Longest Common Subsequence`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 25,
    slug: `longest-common-subsequence-11-25`,
    explanation: `2D DP combines match and skip transitions.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Longest Common Subsequence
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-26`,
    title: `Edit Distance`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 26,
    slug: `edit-distance-11-26`,
    explanation: `Classic dynamic programming for insert/delete/replace transitions.`,
    pythonAnswer: `class Solution:
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
    starterCode: `# Edit Distance
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-27`,
    title: `Ones and Zeroes`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 27,
    slug: `ones-and-zeroes-11-27`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Ones and Zeroes
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Ones and Zeroes')`,
    starterCode: `# Ones and Zeroes
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-28`,
    title: `Rod Cutting Problem`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 28,
    slug: `rod-cutting-problem-11-28`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Rod Cutting Problem
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Rod Cutting Problem')`,
    starterCode: `# Rod Cutting Problem
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-29`,
    title: `Longest Increasing Path in a Matrix`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 29,
    slug: `longest-increasing-path-in-a-matrix-11-29`,
    explanation: `Grid traversal reference pattern with boundary checks and visited marking.`,
    pythonAnswer: `from typing import List

class Solution:
    def solve(self, grid: List[List[int]]):
        rows, cols = len(grid), len(grid[0])

        def dfs(r: int, c: int) -> None:
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            # Add state checks/updates specific to the prompt.

        for r in range(rows):
            for c in range(cols):
                dfs(r, c)

        return grid`,
    starterCode: `# Longest Increasing Path in a Matrix
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-30`,
    title: `Super Egg Drop`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 30,
    slug: `super-egg-drop-11-30`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Super Egg Drop
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Super Egg Drop')`,
    starterCode: `# Super Egg Drop
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-31`,
    title: `Regular Expression Matching`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 31,
    slug: `regular-expression-matching-11-31`,
    explanation: `Memoized recursion over (i, j) handles literal and star branches.`,
    pythonAnswer: `from functools import lru_cache

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
    starterCode: `# Regular Expression Matching
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
  {
    id: `11-32`,
    title: `Burst Balloons`,
    week: `Week 12-13: Dynamic Programming`,
    weekOrder: 11,
    questionOrder: 32,
    slug: `burst-balloons-11-32`,
    explanation: `Reference Python skeleton: plug in the exact LeetCode signature and apply the standard pattern for this problem.`,
    pythonAnswer: `# Burst Balloons
# This is a Python-only starter/reference skeleton for this question.
# Replace method signature to match LeetCode's exact prompt.

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement using the standard approach for this problem.
        raise NotImplementedError('Implement Burst Balloons')`,
    starterCode: `# Burst Balloons
# Write your Python solution below and run with custom input in Playground.

class Solution:
    def solve(self, *args, **kwargs):
        pass`,
  },
];

export const QUESTIONS_BY_WEEK = WEEK_NAMES.map((weekName) => ({
  weekName,
  questions: QUESTIONS.filter((q) => q.week === weekName),
}));
