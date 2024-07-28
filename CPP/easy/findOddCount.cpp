#include <vector>
#include <algorithm>
#include <iostream>

int findOdd(const std::vector<int>& numbers){
    if(numbers.size() < 2)return numbers.at(0);

    std::vector<int> copy = numbers;
    std::sort(copy.begin(), copy.end());

    int same = 1;

    for(size_t n = 0; n < copy.size(); n++)
    {
        if(copy[n] != copy[n+1])
        {
            if(same % 2)return copy[n];
            same = 0;
        }
        same++;
    }
    return 404;
}

int main()
{
    std::vector<std::vector<int>> inputs = {
        {1,2,2,2,3,4,5,2,3,4,5}, // 1
        {1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,7,8,9,0}, // 6
        {1,1,2,2,4}, // 2
        {2,3,5,5,5,3,2}, // 5
        {20,1,1,2,2,3,3,5,5,4,20,4,5}, // 5
        {1,1,1,2,2,3,3,4,4} // 1
    };

    for(std::vector<int> v : inputs)
    {
        std::cout << findOdd(v) << '\n';
    }
}