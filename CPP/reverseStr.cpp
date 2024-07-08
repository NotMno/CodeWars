#include <string>
#include <iostream>


std::string reverse_words(std::string str)
{
    std::string::size_type firstI = str.find_first_not_of(' ');

    while(firstI <= str.size())
    {
        std::string::size_type endI = str.find_first_of(' ', firstI);
        std::string word = str.substr(firstI, (endI - firstI));
        std::string rWord = "";
        for(std::string::reverse_iterator it = word.rbegin(); it != word.rend(); it++)
        {
            rWord += *it;
        }
        str.replace(firstI, (endI - firstI), rWord);
        if(endI > str.size())
        {
            break;
        }else
        {
            firstI = endI + 1;
        }
    }
    return str;
}

int main()
{

    std::string arr[] = {"  hi", "string with no leading or trailing spaces", " ", "    h", "i     ", "    hi    how    are    you   ", "h"};

    for(std::string s : arr)
    {
        std::cout << reverse_words(s) << std::endl;
    }

    return 0;
} 