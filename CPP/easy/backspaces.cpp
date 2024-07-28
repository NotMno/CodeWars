#include <string>
#include <iostream>
#include <algorithm>

std::string cleanString(const std::string &s) {
    std::string result = "";

    int erase = 0;

    for(int i = (int)s.size() - 1; i >= 0; i--)
    {
        if(s.at(i) == '#')
        {
            erase++;
            continue;
        }
        if(erase > 0)
        {
            erase--;
            continue;
        }
        result += s.at(i);
    }
    std::reverse(result.begin(), result.end());
    return result;
}

int main()
{
    std::string arr[] = {"fi#r#irst##st", "second######", "tnohnor#no####r####hird", "", "####", " ", "  #"};

    for(std::string str : arr)
    {
        std::cout << cleanString(str) << std::endl;
    }
}