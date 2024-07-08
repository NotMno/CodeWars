#include <string>
#include <algorithm>
#include <iostream>


int main()
{
    std::string str = "hi man";
    std::reverse(str.begin(), str.end());

    std::cout << str;
}