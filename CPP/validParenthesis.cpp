#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
    bool isValid(string s) {
        if(s.size() % 2)return false;
        vector<char> stack;
        
        for(char c : s)
        {
            if(c == '{' || c == '(' || c == '[')
            {
                stack.push_back(c);
            }else
            {
                if(!s.size())return false;
                if(c != check(stack.at(stack.size()-1)))return false;
                stack.pop_back();
            }
        }
        return !stack.size();
    }

    char check(char c)
    {
        switch (c)
        {
            case '{':
                return '}';
            case '[':
                return ']';
            case '(':
                return ')';
        }
        return 'e';
    }
};

int main()
{
    Solution sol;
    vector<string> inputs = {
        "{({([[[[]]]])})}", // true
        "{[[()]]}[{[()]}" // false
    };

    for(string s : inputs)
    {
        cout << sol.isValid(s) << '\n';
    }
}