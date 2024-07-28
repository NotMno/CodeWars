#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int f = 0;
        int l = nums.size()-1;
        int m = l/2;

        while(true)
        {
            if(nums[m] == target)
            {
                return m;
            }
            if(f == m)
            {
                if(nums[f] > target && f != 0)return f-1;
                if(nums[f] > target)return f;
                if(nums[l] < target)return l+1;
                return f+1;
            }
            nums[m] > target ? l = m : f = m;
            m = (l-f)/2 + f;
        }
        return -1;
    }
};

int main()
{
    Solution sol;
    vector<pair<vector<int>, int>> inputs = {
        {
            {0,1,2,3,4,5,6,7,8,9}, 5 // 5
        },
        {
            {2,4,6,8,10,12,14,16,18,20}, 11 // 5
        },
        {
            {1,2,3,4,5}, 5 // 4
        },
        {
            {1,2,3,4,5}, 7 // 5
        },
        {
            {2,4,6,8,10}, 9 // 4
        },
        {
            {2,4,6,8,10}, 3 // 1
        },
        {
            {1,3,5,6}, 0 // 0
        }
    };

    for(pair<vector<int>, int> p : inputs)
    {
        cout << sol.searchInsert(p.first, p.second) << '\n';
    }
}