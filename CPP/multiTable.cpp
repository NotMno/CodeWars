#include <vector>
#include <iostream>


std::vector<std::vector<int>> multiplication_table(int n)
{
    std::vector<std::vector<int>> result;

    for(int m = 1; m <= n; m++)
    {
        std::vector<int> v;
        for(int i = 1; i <= n; i++)
        {
            v.push_back(i * m);
        }
        result.push_back(v);
    }

    return result;
}

int main()
{
    int nums = 10;

    std::vector<std::vector<int>> idk = multiplication_table(nums);

    for(std::vector<int> v : idk)
    {
        for(int i : v)
        {
            std::cout << i <<  " ";
        }
        std::cout << std::endl;
    }
}