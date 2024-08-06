#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        sort(strs.begin(), strs.end(), compare);
        string lP = strs[0];
        for(size_t i=1; i < strs.size(); i++)
        {
            string check = strs[i].substr(0, lP.size());
            for(int ii=0; ii < check.size(); ii++)
            {
                if(check[ii] != lP[ii])
                {
                    lP = lP.substr(0, ii);
                }
            }
        }
        return lP;
    }

    static bool compare(string& s1, string& s2)
    {
        return s1.size() < s2.size();
    }
};

int main()
{
    Solution sol;
    vector<vector<string>> inputs = {
        {"flow", "flower", "flap"},
        {"snap", "snapper", "snapped", "snack"},
        {"mat", "man", "map", "mad", "max", "mark", "manage"},
        {"fall", "falling", "pot"}
    };

    for(vector<string> v : inputs)
    {
        cout << sol.longestCommonPrefix(v) << '\n';
    }
}