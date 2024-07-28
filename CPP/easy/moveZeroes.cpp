#include <vector>
#include <iostream>

std::vector<int> move_zeroes(const std::vector<int>& input) {
    std::vector<int> result;
    int count = 0;
    for(int n : input)
    {
        if(n == 0)
        {
            count++;
            continue;
        }
        result.push_back(n);
    }
    for(int i = 0; i < count; i++)
    {
        result.push_back(0);
    }

    return result;
}

int main()
{
    std::vector<std::vector<int>> inputs = {
        {0,1,2,3,4,5},
        {1,0,2,0,3,0,4,0,5,0},
        {0,0,0,1,2,0,0,0}
    };

    for(std::vector<int> v : inputs)
    {
        std::vector<int> it = move_zeroes(v);
        for(int num : it)
        {
            std::cout << num << " ";
        }
        std::cout << '\n';
    }
}