#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int strStr(string haystack, string needle) {
        if(needle.size() > haystack.size())return -1;

        for(int i=0; i<haystack.size(); i++)
        {
            if(haystack.size()-i < needle.size())return -1;
            if(haystack[i] == needle[0])
            {
                if(haystack.substr(i, needle.size()) == needle)return i;
            }
        }
        return -1;
    }
};

int main()
{
    Solution sol;
    vector<pair<string, string>> inputs = {
        {"haystack", "needle"}, // -1
        {"idek what this is", "at this"}, // 7
        {"ambiguous", "ambi"}, // 0
        {"loitering", "ring"}, // 5
        {"mississippi", "issip"}, // 4
        {"abababcab", "ababc"}
    };

    for(pair<string, string> p : inputs)
    {
        cout << sol.strStr(p.first, p.second) << '\n';
    }
}