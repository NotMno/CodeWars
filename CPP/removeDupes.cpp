#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) { // works somehow
        for(int i = 1; i < nums.size(); i++)
        {
            if(nums[i] == nums[i-1])
            {
                nums.erase(std::remove(nums.begin()+i, nums.end(), nums[i]), nums.end());
                cout << "iteration " << i << " : ";
                for(int n : nums)
                {
                    cout << n << " ";
                }
                cout << '\n';
            }
        }

        return nums.size();
    }
};

int main()
{
    Solution sol;
    vector<vector<int>> inputs = {
        {1,1,1,2,2,2,3,4,5,6,7,8,8,8}, // return 8 and length 8
        {1,2,3,3,3,4,5,5,6,7,8,8,8,8,8,8,8,8,9,10,11}, // 11
        {1,1}
    };

    for(vector<int> v : inputs)
    {
        cout << sol.removeDuplicates(v) << '\n';
    }
}