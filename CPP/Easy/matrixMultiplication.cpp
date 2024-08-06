#include <iostream>
#include <vector>

std::vector<std::vector<int>> matrix_multiplication(std::vector<std::vector<int>> &a, std::vector<std::vector<int>> &b, size_t n){
    if(!n)return {{}};

    std::vector<std::vector<int>> res;

    for(int i=0; i < n; i++) // go through rows in a
    {
        std::vector<int> row;

        for(int j=0; j < n; j++) // go through cols in b
        {
            int sum = 0;

            for(int k=0; k < n; k++) // go through ints in b col
            {
                sum += a[i][k] * b[k][j];
            }
            row.push_back(sum);
        }
        res.push_back(row);
    }

    return res;
}

void read2dArr(std::vector<std::vector<int>> input)
{
    for(std::vector<int> row : input)
    {
        for(int n : row)
        {
            std::cout << n << " | ";
        }
        std::cout << '\n';
    }
    std::cout << '\n';
}

int main()
{
    std::vector< std::pair< std::pair< std::vector<std::vector<int>>, std::vector<std::vector<int>> >, int > > inputs = {
        {
            {
                {
                    {1,2},
                    {3,4}
                },
                {
                    {1,2},
                    {3,4}
                }
            },
            2
        },
        {
            {
                {
                    {2,4,6,8},
                    {4,6,8,2},
                    {6,8,2,4},
                    {8,2,4,6}
                },
                {
                    {1,3,5,7},
                    {3,5,7,1},
                    {5,7,1,3},
                    {7,1,3,5}
                }
            },
            4
        }
    };

    for(std::pair< std::pair< std::vector<std::vector<int>>, std::vector<std::vector<int>> >, int > a : inputs)
    {
        read2dArr(a.first.first);
        read2dArr(a.first.second);
        read2dArr( matrix_multiplication(a.first.first, a.first.second, a.second) );
        std::cout << "------------------------" << '\n';
    }
}