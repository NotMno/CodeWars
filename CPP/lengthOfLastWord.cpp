#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        int count = 0;
        bool st = false;
        for(int i = s.size()-1; i >= 0; i--)
        {
            if(st)
            {
                if(s[i] != ' ')
                {
                    count++;
                    continue;
                }
                return count;
            }
            if(s[i] != ' ')
            {
                st = true;
                count++;
            }
        }
        return st ? count : -1;
    }
};

int main()
{
    Solution sol;
    vector<string> inputs = {
        "hola soy dora",
        "test",
        " test ",
        "   test   ",
        " a b  c  ",
        " test",
        "test "
    };

    for(string s : inputs)
    {
        cout << sol.lengthOfLastWord(s) << '\n';
    }
}