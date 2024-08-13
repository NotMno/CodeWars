#include <iostream>
#include <vector>
#include <algorithm>

int sum_intervals(std::vector<std::pair<int, int>> intervals) {
	std::sort(intervals.begin(), intervals.end());
	
	int start{intervals[0].first}, end{intervals[0].second}, sum{0};

	for(int i = 1; i < intervals.size(); i++)
	{
		if(intervals[i].first <= end && intervals[i].first >= start)
		{
			if(intervals[i].second > end)end = intervals[i].second;
		}else if(intervals[i].second >= start && intervals[i].second <= end)
		{
			if(intervals[i].first < start)start = intervals[i].first;
		}else
		{
			sum += end - start;
			start = intervals[i].first;
			end = intervals[i].second;
		}
	}

 	return sum + (end - start);
}

int main()
{
	std::vector<std::vector<std::pair<int, int>>> inputs = {
		{
			{1, 5},
			{3, 7},
			{9, 15},
			{1, 2}
		},
		{
			{1,10},
			{5,20},
			{15,30},
			{30,51}
		}
	};

	for(std::vector<std::pair<int, int>> i : inputs)
	{
		std::cout << sum_intervals(i) << '\n';
	}
}
