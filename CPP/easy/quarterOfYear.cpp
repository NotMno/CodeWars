#include <iostream>
#include <cmath>

int quarter_of(int month){
    return ceil((double)month / 3);
}

int main()
{
    int month = 6;

    std::cout << quarter_of(month) << std::endl;
}