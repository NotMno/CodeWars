#include <string>
#include <iostream>

std::size_t duplicateCount(const std::string& in)
{
    std::string check = "abcdefghijklmnopqrstuvwxyz0123456789";
    int dupes = 0;
    for(char c : check)
    {
        int count = 0;
        for(char i : in)
        {
            if(!std::isdigit(i))
            {
                if(std::tolower(i) == c)count++;
            }else
            {
                if(i == c)count++;
            }
        }
        if(count >= 2)dupes++;
    }
    return dupes;
}

int main()
{
    std::string inputs[] ={"alma mater", "aa", "aeiouy", "1231"}; // 2, 1, 0, 1

    for(std::string str : inputs)
    {
        std::cout << duplicateCount(str) << std::endl;
    }
}