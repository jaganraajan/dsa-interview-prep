/* eslint-disable max-lines */
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
    details: `Problem
Given the standard LeetCode prompt for "Contains Duplicate", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Two-pointer overwrite keeps unique values in-place.`,
    details: `Problem
Given the standard LeetCode prompt for "Remove Duplicates from Sorted Array", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    explanation: `Floyd cycle detection treats values as next pointers.`,
    details: `Problem
Given the standard LeetCode prompt for "Find the Duplicate Number", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    details: `Problem
Given the standard LeetCode prompt for "Two Sum", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Two Sum II - Input Array Is Sorted", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Find Pivot Index", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Find Pivot Index
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Find Pivot Index
        return None`,
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
    explanation: `Boyer-Moore voting tracks a candidate with constant space.`,
    details: `Problem
Given the standard LeetCode prompt for "Majority Element", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1
        return candidate`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum Subarray", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Largest Subarray with Sum K", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Subarray with Sum K", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Subarray Sum Equals K", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Count Subarrays with Given XOR", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum Product Subarray", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Minimum Size Subarray Sum", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "3Sum", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Container With Most Water", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Find pivot, swap with next larger suffix element, then reverse suffix.`,
    details: `Problem
Given the standard LeetCode prompt for "Next Permutation", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    explanation: `Dutch national flag partitions into 0/1/2 in one pass.`,
    details: `Problem
Given the standard LeetCode prompt for "Sort Colors", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Set Mismatch", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Set Mismatch
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Set Mismatch
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Set Matrix Zeroes", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Spiral Matrix", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Rotate Image", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Rotate Image
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Rotate Image
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Merge Sorted Arrays Without Extra Space", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Merge Sorted Arrays Without Extra Space
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Merge Sorted Arrays Without Extra Space
        return None`,
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
    explanation: `Track the minimum price so far and max profit.`,
    details: `Problem
Given the standard LeetCode prompt for "Best Time to Buy and Sell Stock", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        best = 0
        for price in prices:
            min_price = min(min_price, price)
            best = max(best, price - min_price)
        return best`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Max Consecutive Ones", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Max Consecutive Ones
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Max Consecutive Ones
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Sliding Window Maximum", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    explanation: `Set lookup starts runs only at sequence starts for O(n).`,
    details: `Problem
Given the standard LeetCode prompt for "Longest Consecutive Sequence", implement a correct and efficient Python solution.

Category
Array

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    details: `Problem
Given the standard LeetCode prompt for "Valid Anagram", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Bidirectional mapping ensures one-to-one character correspondence.`,
    details: `Problem
Given the standard LeetCode prompt for "Isomorphic Strings", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `class Solution:
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
    details: `Problem
Given the standard LeetCode prompt for "Group Anagrams", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Valid Palindrome", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Two pointers swap characters in place.`,
    details: `Problem
Given the standard LeetCode prompt for "Reverse String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1`,
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
    explanation: `Split on whitespace, reverse list of words, and join.`,
    details: `Problem
Given the standard LeetCode prompt for "Reverse Words in a String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))`,
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
    details: `Problem
Given the standard LeetCode prompt for "Valid Palindrome II", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Palindromic Substring", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Substring Without Repeating Characters", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Minimum Window Substring", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    explanation: `Fixed-size sliding window compares frequency counts.`,
    details: `Problem
Given the standard LeetCode prompt for "Permutation in String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `from collections import Counter

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
    explanation: `Slide a window of length p and compare character counts.`,
    details: `Problem
Given the standard LeetCode prompt for "Find All Anagrams in a String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `from collections import Counter
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
    explanation: `Window is valid while replacements needed are <= k.`,
    details: `Problem
Given the standard LeetCode prompt for "Longest Repeating Character Replacement", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import defaultdict

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
    details: `Problem
Given the standard LeetCode prompt for "Longest Substring with At Most K Distinct Characters", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Valid Parentheses", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Remove All Adjacent Duplicates In String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `# Remove All Adjacent Duplicates In String
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Remove All Adjacent Duplicates In String
        return None`,
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
    explanation: `Stack keeps previous string and repeat count at each bracket.`,
    details: `Problem
Given the standard LeetCode prompt for "Decode String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `class Solution:
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
    explanation: `Use Python find for concise O(n*m) worst-case behavior.`,
    details: `Problem
Given the standard LeetCode prompt for "Implement strStr()", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0
        return haystack.find(needle)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Multiply Strings", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `# Multiply Strings
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Multiply Strings
        return None`,
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
    explanation: `Monotonic stack removes larger preceding digits first.`,
    details: `Problem
Given the standard LeetCode prompt for "Remove K Digits", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Count and Say", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Count and Say
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Count and Say
        return None`,
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
    explanation: `Single pass with stack handles +, -, *, / precedence.`,
    details: `Problem
Given the standard LeetCode prompt for "Basic Calculator II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Trie with DFS wildcard search supports dot matches.`,
    details: `Problem
Given the standard LeetCode prompt for "Design Add and Search Words Data Structure", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class TrieNode:
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Search", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    explanation: `Binary search moves toward the rising slope.`,
    details: `Problem
Given the standard LeetCode prompt for "Find Peak Element", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    explanation: `Lower-bound binary search finds insertion index.`,
    details: `Problem
Given the standard LeetCode prompt for "Search Insert Position", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    details: `Problem
Given the standard LeetCode prompt for "Search in Rotated Sorted Array", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    explanation: `Binary search on pivot compares mid with right boundary.`,
    details: `Problem
Given the standard LeetCode prompt for "Find Minimum in Rotated Sorted Array", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Single Element in a Sorted Array", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Single Element in a Sorted Array
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Single Element in a Sorted Array
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Search a 2D Matrix", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Matrix Median", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Store sorted timestamp-value pairs and binary search by timestamp.`,
    details: `Problem
Given the standard LeetCode prompt for "Time Based Key-Value Store", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import defaultdict

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Koko Eating Bananas", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Koko Eating Bananas
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Koko Eating Bananas
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Capacity To Ship Packages Within D Days", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Capacity To Ship Packages Within D Days
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Capacity To Ship Packages Within D Days
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Minimum Number of Days to Make m Bouquets", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Minimum Number of Days to Make m Bouquets
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Minimum Number of Days to Make m Bouquets
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Median of Two Sorted Arrays", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Median of Two Sorted Arrays
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Median of Two Sorted Arrays
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "K-th Element of Two Sorted Arrays", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# K-th Element of Two Sorted Arrays
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement K-th Element of Two Sorted Arrays
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Nth Root of an Integer", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Nth Root of an Integer
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Nth Root of an Integer
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Insert Interval", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Insert Interval
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Insert Interval
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Merge Intervals", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Merge Intervals
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Merge Intervals
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Allocate Minimum Number of Pages", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Allocate Minimum Number of Pages
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Allocate Minimum Number of Pages
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Book Allocation Problem", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Book Allocation Problem
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Book Allocation Problem
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Aggressive Cows", implement a correct and efficient Python solution.

Category
Binary Search

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Aggressive Cows
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Aggressive Cows
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Reverse Linked List", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Middle of the Linked List", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Iterative merge with a dummy head pointer.`,
    details: `Problem
Given the standard LeetCode prompt for "Merge Two Sorted Lists", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Fast/slow pointers keep n-node gap to remove target node.`,
    details: `Problem
Given the standard LeetCode prompt for "Remove Nth Node From End of List", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    details: `Problem
Given the standard LeetCode prompt for "Delete Node in a Linked List", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Intersection of Two Linked Lists", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Linked List Cycle", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Linked List Cycle II", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Palindrome Linked List", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Digit-by-digit addition with carry on linked lists.`,
    details: `Problem
Given the standard LeetCode prompt for "Add Two Numbers", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Find middle, reverse second half, then merge alternately.`,
    details: `Problem
Given the standard LeetCode prompt for "Reorder List", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Rotate List", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Rotate List
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Rotate List
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Reverse Linked List II", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Reverse Nodes in k-Group", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Reverse Nodes in k-Group
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Reverse Nodes in k-Group
        return None`,
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
    explanation: `Hash map clone pass + pointer wiring pass.`,
    details: `Problem
Given the standard LeetCode prompt for "Copy List with Random Pointer", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `OrderedDict gives O(1) get/put with recency updates.`,
    details: `Problem
Given the standard LeetCode prompt for "LRU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import OrderedDict

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "LFU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# LFU Cache
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement LFU Cache
        return None`,
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
    explanation: `Min-heap always extracts the current smallest node.`,
    details: `Problem
Given the standard LeetCode prompt for "Merge k Sorted Lists", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq

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
    explanation: `Floyd cycle detection treats values as next pointers.`,
    details: `Problem
Given the standard LeetCode prompt for "Find the Duplicate Number", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree to DLL", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Min Stack", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Implement Stack using Queues", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Implement Stack using Queues
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Implement Stack using Queues
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Valid Parentheses", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Implement Queue using Stacks", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Implement Queue using Stacks
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Implement Queue using Stacks
        return None`,
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
    explanation: `Stack evaluates each token using last two operands.`,
    details: `Problem
Given the standard LeetCode prompt for "Evaluate Reverse Polish Notation", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

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
    details: `Problem
Given the standard LeetCode prompt for "Daily Temperatures", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Monotonic decreasing stack builds next-greater map.`,
    details: `Problem
Given the standard LeetCode prompt for "Next Greater Element I", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        nxt = {}
        for num in nums2:
            while stack and stack[-1] < num:
                nxt[stack.pop()] = num
            stack.append(num)
        return [nxt.get(num, -1) for num in nums1]`,
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
    explanation: `Monotonic decreasing stack builds next-greater map.`,
    details: `Problem
Given the standard LeetCode prompt for "Next Greater Element II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        nxt = {}
        for num in nums2:
            while stack and stack[-1] < num:
                nxt[stack.pop()] = num
            stack.append(num)
        return [nxt.get(num, -1) for num in nums1]`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Next Smaller Element", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Next Smaller Element
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Next Smaller Element
        return None`,
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
    explanation: `Monotonic stack stores (price, span) pairs for O(1) amortized next.`,
    details: `Problem
Given the standard LeetCode prompt for "Stock Span Problem", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class StockSpanner:
    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span`,
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
    details: `Problem
Given the standard LeetCode prompt for "Sliding Window Maximum", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "First Negative Integer in Every Window", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum of All Subarrays", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Largest Rectangle in Histogram", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Trapping Rain Water", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Track balance and required insertions for unmatched closes.`,
    details: `Problem
Given the standard LeetCode prompt for "Minimum Add to Make Parentheses Valid", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Monotonic stack removes larger preceding digits first.`,
    details: `Problem
Given the standard LeetCode prompt for "Remove K Digits", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class Solution:
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
    explanation: `Stack keeps previous string and repeat count at each bracket.`,
    details: `Problem
Given the standard LeetCode prompt for "Decode String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `class Solution:
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
    details: `Problem
Given the standard LeetCode prompt for "Simplify Path", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    explanation: `OrderedDict gives O(1) get/put with recency updates.`,
    details: `Problem
Given the standard LeetCode prompt for "LRU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import OrderedDict

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "LFU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# LFU Cache
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement LFU Cache
        return None`,
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
    explanation: `Array + hash index map supports O(1) insert/delete/random.`,
    details: `Problem
Given the standard LeetCode prompt for "Insert Delete GetRandom O(1)", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import random

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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Inorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Preorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Postorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Level Order Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Zigzag Level Order Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Right Side View", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Left View of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Top View of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Bottom View of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Boundary Traversal of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum Width of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum Depth of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Diameter of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Validate Binary Search Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Balanced Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `DFS compares structure and value equality recursively.`,
    details: `Problem
Given the standard LeetCode prompt for "Same Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
    pythonAnswer: `class Solution:
    def isSameTree(self, p, q) -> bool:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)`,
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
    explanation: `Mirror recursion compares left subtree vs right subtree.`,
    details: `Problem
Given the standard LeetCode prompt for "Symmetric Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
    pythonAnswer: `class Solution:
    def isSymmetric(self, root) -> bool:
        def mirror(a, b):
            if not a and not b:
                return True
            if not a or not b or a.val != b.val:
                return False
            return mirror(a.left, b.right) and mirror(a.right, b.left)

        return mirror(root.left, root.right) if root else True`,
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
    details: `Problem
Given the standard LeetCode prompt for "Invert Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Lowest Common Ancestor of a Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Lowest Common Ancestor of a Binary Search Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Search in a Binary Search Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Construct Binary Tree from Preorder and Inorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Construct Binary Tree from Inorder and Postorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Construct Binary Search Tree from Preorder Traversal", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Flatten Binary Tree to Linked List", implement a correct and efficient Python solution.

Category
Linked List

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Paths", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Inorder Successor in BST", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Level-order traversal connects nodes from left to right per level.`,
    details: `Problem
Given the standard LeetCode prompt for "Populating Next Right Pointers in Each Node", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import deque

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Print All Subsequences", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
    pythonAnswer: `# Print All Subsequences
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Print All Subsequences
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Kth Smallest Element in a BST", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    explanation: `Maintain a min-heap of size k; top is current kth largest.`,
    details: `Problem
Given the standard LeetCode prompt for "Kth Largest Element in a Stream", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Search Tree Iterator", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Serialize and Deserialize Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `Check each node as potential match using same-tree helper.`,
    details: `Problem
Given the standard LeetCode prompt for "Subtree of Another Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
    pythonAnswer: `class Solution:
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
    details: `Problem
Given the standard LeetCode prompt for "Count Good Nodes in Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Range Minimum Query", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Range Minimum Query
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Range Minimum Query
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Segment Tree Build & Query", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
    pythonAnswer: `# Segment Tree Build & Query
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Segment Tree Build & Query
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Implement Trie (Prefix Tree)", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `Trie with DFS wildcard search supports dot matches.`,
    details: `Problem
Given the standard LeetCode prompt for "Design Add and Search Words Data Structure", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `class TrieNode:
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
    details: `Problem
Given the standard LeetCode prompt for "Word Search", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Word Search II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Binary Tree Maximum Path Sum", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Diameter of Binary Tree", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Kth Largest Element in an Array", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
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
    explanation: `Maintain a min-heap of size k; top is current kth largest.`,
    details: `Problem
Given the standard LeetCode prompt for "Kth Largest Element in a Stream", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(log n) to O(n log n) depending on the approach
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    explanation: `Max-heap (via negatives) repeatedly smashes two largest stones.`,
    details: `Problem
Given the standard LeetCode prompt for "Last Stone Weight", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    explanation: `Keep k points with smallest squared distance using heap.`,
    details: `Problem
Given the standard LeetCode prompt for "K Closest Points to Origin", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        return heapq.nsmallest(k, points, key=lambda p: p[0] * p[0] + p[1] * p[1])`,
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
    details: `Problem
Given the standard LeetCode prompt for "Top K Frequent Elements", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Count words and sort by frequency desc then lexicographic asc.`,
    details: `Problem
Given the standard LeetCode prompt for "Top K Frequent Words", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import Counter
from typing import List

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        counts = Counter(words)
        return sorted(counts, key=lambda w: (-counts[w], w))[:k]`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Sort Characters By Frequency", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Sort Characters By Frequency
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Sort Characters By Frequency
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Rearrange String k Distance Apart", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `# Rearrange String k Distance Apart
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Rearrange String k Distance Apart
        return None`,
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
    explanation: `Greedy idle-slot formula based on most frequent task count.`,
    details: `Problem
Given the standard LeetCode prompt for "Task Scheduler", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import Counter
from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = Counter(tasks).values()
        max_freq = max(freq)
        max_count = sum(1 for x in freq if x == max_freq)
        return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`,
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
    explanation: `Store tweets per user and merge feeds from followees via heap.`,
    details: `Problem
Given the standard LeetCode prompt for "Design Twitter", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    explanation: `Max-heap greedily places most frequent characters without adjacency clash.`,
    details: `Problem
Given the standard LeetCode prompt for "Reorganize String", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
    pythonAnswer: `import heapq
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Maximum Frequency Stack", implement a correct and efficient Python solution.

Category
Stack / Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Maximum Frequency Stack
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Maximum Frequency Stack
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Find Median from Data Stream", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Sliding Window Median", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Sliding Window Maximum", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "LFU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# LFU Cache
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement LFU Cache
        return None`,
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
    explanation: `OrderedDict gives O(1) get/put with recency updates.`,
    details: `Problem
Given the standard LeetCode prompt for "LRU Cache", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `from collections import OrderedDict

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "IPO", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# IPO
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement IPO
        return None`,
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
    explanation: `Min-heap always extracts the current smallest node.`,
    details: `Problem
Given the standard LeetCode prompt for "Merge k Sorted Lists", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq

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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Smallest Range Covering Elements from K Lists", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Smallest Range Covering Elements from K Lists
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Smallest Range Covering Elements from K Lists
        return None`,
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
    explanation: `Sort intervals and track ongoing meetings with min-heap of end times.`,
    details: `Problem
Given the standard LeetCode prompt for "Meeting Rooms II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    explanation: `Always combine two smallest sticks first (Huffman-style greedy).`,
    details: `Problem
Given the standard LeetCode prompt for "Minimum Cost to Connect Sticks", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `import heapq
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Depth-First Search", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Depth-First Search
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Depth-First Search
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Breadth-First Search", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Breadth-First Search
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Breadth-First Search
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Detect Cycle in an Undirected Graph", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Detect Cycle in a Directed Graph", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Course Schedule", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Topological Sorting", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Topological Sorting
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Topological Sorting
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Course Schedule II", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Number of Islands", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Max Area of Island", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Number of Connected Components in an Undirected Graph", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Surrounded Regions", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Surrounded Regions
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Surrounded Regions
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Pacific Atlantic Water Flow", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Pacific Atlantic Water Flow
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Pacific Atlantic Water Flow
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Rotting Oranges", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Rotting Oranges
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Rotting Oranges
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Flood Fill", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Flood Fill
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Flood Fill
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Is Graph Bipartite?", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Word Ladder", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Word Ladder II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Clone Graph", implement a correct and efficient Python solution.

Category
Graph

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(V + E) or O(n) traversal time
- Space: O(h) recursion stack or O(n) queue/set`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Alien Dictionary", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Alien Dictionary
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Alien Dictionary
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Dijkstra's Algorithm", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Cheapest Flights Within K Stops", implement a correct and efficient Python solution.

Category
Heap / Priority Queue

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Cheapest Flights Within K Stops
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Cheapest Flights Within K Stops
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "M-Coloring Problem", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# M-Coloring Problem
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement M-Coloring Problem
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Climbing Stairs", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Minimum Cost Climbing Stairs", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Jump Game", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Jump Game II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Coin Change", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Coin Change II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "House Robber", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "House Robber II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Paint House", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Paint House
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Paint House
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Triangle", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Triangle
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Triangle
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Decode Ways", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Word Break", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Word Break II", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Increasing Subsequence", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Maximum Product Subarray", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Palindromic Substrings", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Palindromic Substring", implement a correct and efficient Python solution.

Category
Tree / Trie

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: O(n) sliding-window style
- Space: O(1) to O(k) hash map/set`,
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
    details: `Problem
Given the standard LeetCode prompt for "Unique Paths", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Unique Paths II", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Minimum Path Sum", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Target Sum", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Target Sum
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Target Sum
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Partition Equal Subset Sum", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Palindrome Partitioning", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Palindrome Partitioning II", implement a correct and efficient Python solution.

Category
String

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Common Subsequence", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    details: `Problem
Given the standard LeetCode prompt for "Edit Distance", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Ones and Zeroes", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Ones and Zeroes
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Ones and Zeroes
        return None`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Rod Cutting Problem", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Rod Cutting Problem
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Rod Cutting Problem
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Longest Increasing Path in a Matrix", implement a correct and efficient Python solution.

Category
Dynamic Programming

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Usually O(n) to O(n^2)
- Space: O(n) to O(n^2)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Super Egg Drop", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Super Egg Drop
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Super Egg Drop
        return None`,
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
    details: `Problem
Given the standard LeetCode prompt for "Regular Expression Matching", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
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
    explanation: `Python starter with an implementation checklist. Replace \`solve\` with the exact LeetCode function signature and complete the marked steps.`,
    details: `Problem
Given the standard LeetCode prompt for "Burst Balloons", implement a correct and efficient Python solution.

Category
General

What You Need To Do
1. Parse the input based on the official LeetCode function signature.
2. Return exactly what the prompt asks for (value, index list, traversal, class behavior, etc.).
3. Handle edge cases: empty input, one-element input, duplicates, and boundary indexes.

Typical Constraints (Interview Scale)
- Input size is often up to 10^5 for linear problems.
- Expect strict time limits, so avoid brute force where possible.
- Optimize for readability plus asymptotic efficiency.

Complexity Target
- Time: Typically O(n) or O(n log n)
- Space: O(1) to O(n)`,
    pythonAnswer: `# Burst Balloons
# Replace the method signature with the exact LeetCode signature.
# 1) Identify the right pattern (two pointers / heap / DP / graph / stack)
# 2) Handle edge cases first
# 3) Keep time and space within interview constraints

class Solution:
    def solve(self, *args, **kwargs):
        # TODO: Implement Burst Balloons
        return None`,
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
