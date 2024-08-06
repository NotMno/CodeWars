#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int maxH = matrix.size();
        int minH = 1;
        int maxW = matrix[0].size();
        int minW = 0;
        vector<int> result = matrix[0];

        int pos[2] = {0,(int)matrix[0].size()-1};
        int dir = 2; // up 0  right 1  down 2  left 3

        while(result.size() != matrix.size()*matrix[0].size())
        {
            switch (dir)
            {
                case 0:
                    for(int i=maxH; i>minH; i--)
                    {
                        pos[0]--;
                        result.push_back(matrix[pos[0]][pos[1]]);
                    }
                    minW++;
                    dir++;
                    break;
                case 1:
                    for(int i=minW; i<maxW; i++)
                    {
                        pos[1]++;
                        result.push_back(matrix[pos[0]][pos[1]]);
                    }
                    minH++;
                    dir++;
                    break;
                case 2:
                    for(int i=minH; i<maxH; i++)
                    {
                        pos[0]++;
                        result.push_back(matrix[pos[0]][pos[1]]);
                    }
                    maxW--;
                    dir++;
                    break;
                case 3:
                    for(int i=maxW; i>minW; i--)
                    {
                        pos[1]--;
                        result.push_back(matrix[pos[0]][pos[1]]);
                    }
                    maxH--;
                    dir = 0;
                    break;
                default:
                    break;
            }
        }
        return result;
    }
};



int main()
{
    Solution sol;
    vector<vector<vector<int>>> inputs = {
        {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        }, // 1 2 3 6 9 8 7 4 5
        {
            {1,2,3,4,5,6,7,8,9,10}
        }, // 1 2 3 4 5 6 7 8 9 10
        {
            {1,2,3,4,5},
            {6,7,8,9,10}
        }, // 1 2 3 4 5 10 9 8 7 6
        {
            {1},
            {2},
            {3},
            {4},
            {5}
        }, // 1 2 3 4 5
        {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9},
            {10,11,12},
            {13,14,15}
        }, // 1 2 3 6 9 12 15 14 13 10 7 4 5 8 11
        {
            {1, 2, 3, 4, 5, 6, 7, 8},
            {9, 10,11,12,13,14,15,16},
            {19,20,21,22,23,24,25,26},
            {27,28,29,30,31,32,33,34},
            {35,36,37,38,39,40,41,42}
        }, // 1 2 3 4 5 6 7 8 16 26 34 42 41 40 39 38 37 36 35 27 19 9 10 11 12 13 14 15 25 33 32 31 30 29 28 20 21 22 23 24
        {
            {1}
        }
    };

    for(vector<vector<int>> matrix : inputs)
    {
        vector<int> result = sol.spiralOrder(matrix);
        for(int i : result)
        {
            cout << i << " ";
        }
        cout << '\n';
    }
}