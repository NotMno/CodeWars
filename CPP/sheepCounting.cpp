#include <string>
#include <iostream>

std::string countSheep(int number) {
    std::string result = "";

    int i = 1;
    while(i <= number)
    {
        result += std::to_string(i);
        result += " sheep...";
        i++;
    }

    return result;
}

int main()
{
    int iterations = 5;

    std::cout << countSheep(iterations) << std::endl;
}