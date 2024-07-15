#include <iostream>
#include <unordered_map>

int romanToInt(std::string s) {
    std::unordered_map<char, int> hash = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };
    int sum = 0;

    for(int i = 0; i<s.size(); i++)
    {
        if(i == s.size()-1)
        {
            return sum += hash.at(s[i]);
        }
        if(hash.at(s[i]) >= hash.at(s[i+1]))
        {
            sum += hash.at(s[i]);
            continue;
        }
        sum -= hash.at(s[i]);
    }
    return sum;
}

int main()
{
    std::string inputs[] = {
        "VIII", // 8
        "MC", // 900
        "CD", // 400
        "MDCCCXXIX", // 1829
        "DCXXI"
    };

    for(std::string s : inputs)
    {
        std::cout << romanToInt(s) << '\n';
    }
}