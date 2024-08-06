#include <string>
#include <iostream>

std::string toRNA(std::string str)
{
    std::size_t index = str.find_first_of('T');
    while(index <= str.size())
    {
        str.replace(index, 1, "U");
        index = str.find_first_of('T');
    }

    return str;
}

int main()
{
    std::string dna[5] = {"GCATGCTAGCTAGCTTCGA", "", "  ", "T", "TTTTTTTTTTTTTTTT"};
    for(std::string s : dna)
    {
        std::cout << toRNA(s) << std::endl;
    }
}