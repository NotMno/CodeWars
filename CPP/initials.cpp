#include <string>
#include <iostream>

std::string abbrevName(std::string name)
{
    char arr[4] = {(char)toupper(name[0]), '.', (char)toupper(name[name.find_first_of(' ') + 1]), '\0'};
    std::string initials(arr);

    return initials;
}

int main()
{
    std::string name = "Tommy Lowyer";

    std::cout << abbrevName(name) << std::endl;
}