#include <string>
#include <iostream>
#include <algorithm>

bool scramble(const std::string& s1, const std::string& s2)
{
    constexpr int ascii = 97;
    int amnt[26] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

    for(int c : s1)
    {
        amnt[c-ascii]++;
    }

    for(int c : s2)
    {
        amnt[c-ascii]--;
        if(amnt[c-ascii] < 0)return false;
    }

    return true;
}

std::string createString(size_t length)
{
    std::string result = "";
    for(size_t i = 0; i<length; i++)
    {
        result+= (char)((rand() % 26) + 97);
    }
    return result;
}

int main()
{
    std::string big_text = createString(50000000);
    std::string rBig_text = big_text;
    std::reverse(rBig_text.begin(), rBig_text.end());
    std::string inputs[4][2] = {
        {"elloh", "hello"},
        {"lmnop", "mno"},
        {"idek", "ideka"},
        {big_text, rBig_text}
    };

    for(std::string* arr : inputs)
    {
        // std::cout << *arr << std::endl;
        std::cout << scramble(*arr, *(arr+1)) << std::endl;
    }
}