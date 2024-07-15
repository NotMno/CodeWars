#include <iostream>
#include <cmath>

class Solution {
public:
    bool isPalindrome(int x) {
        std::string s = std::to_string(x);
        size_t size = s.size();
        for(size_t i = 0; i < size/2; i++)
        {
            if(s[i] != s[(size - 1) - i])return false;
        }
        return true;
    }
};

int main()
{
    Solution s;
    int inputs[] = {121, -121, 293, 1010101, 100001, 1198}; // 1 0 0 1 1 0
    for(int n : inputs)
    {
        std::cout << s.isPalindrome(n) << '\n';
    }
}
