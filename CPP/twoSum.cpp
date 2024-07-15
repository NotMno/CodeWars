#include <vector>
#include <iostream>
#include <unordered_map>

std::pair<std::size_t, std::size_t> two_sum(const std::vector<int>& numbers, int target) {
    for(size_t n = 0; n < numbers.size(); n++)
    {
        int check = target - numbers[n];
        for(size_t i = 0; i < numbers.size(); i++)
        {
            if(i == n)continue;
            if(numbers.at(i) == check)
            {
                return {n, i};
            }
        }
    }

    return {0, 0};
}

std::vector<int> betterTwoSum(std::vector<int>& nums, int target) {
    std::unordered_map<int, int> hash;

    for(int n=0; n < nums.size(); n++)
    {
        if(hash.count(target - nums[n]))
        {
            return {hash.at(target - nums[n]), n};
        }else
        {
            hash[nums[n]] = n;
        }
    }
    return {404};
}

int main()
{
    std::vector<std::pair<std::vector<int>, int>> inputs = {
        {
            {1,2,3,4,5,6,7,8,9,10}, 11
        },
        {
            {2,4,7,1}, 11
        },
        {
            {9,2,7,8,4,3,1}, 7
        }
    };

    for(std::pair<std::vector<int> , int> pair : inputs)
    {
        std::pair<std::size_t, std::size_t> results = two_sum(pair.first, pair.second);

        std::cout << results.first << " " << results.second << '\n';
    }
}