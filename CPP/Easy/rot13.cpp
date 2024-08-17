#include <iostream>
#include <vector>

std::string rot13(const std::string& str)
{
    std::string cipher = "nopqrstuvwxyzabcdefghijklm";
    std::string res;
    for(char c : str)
    {
        if(isalpha(c))
        {
            if(isupper(c))
            {
                res.push_back(std::toupper(cipher[(int)c - 65]));
                continue;
            }else
            {
                res.push_back(cipher[(int)c-97]);
                continue;
            }
        }
        res.push_back(c);
    }
    return res;
}


int main()
{
    std::vector<std::string> inputs = {
        "abcdefghijklmnopqrstuvwxyz!.?,()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };

    for(std::string str : inputs)
    {
        std::cout << rot13(str) << '\n';
    }
}