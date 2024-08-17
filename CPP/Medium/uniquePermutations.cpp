#include <iostream>
#include <vector>

std::vector<std::string> loops(std::vector<char> options, std::string base, std::string input)
{
    /*
    
    inputs ->   1. an opts array with all possible unique chars to use.
                2. a 'base' string.
                3. the input string containing all chars not yet used.

    code ->     1. get the base string.
                2. create an array of strings, call this 'ret'.
                3. loop through all possible opts.
                    a. in the loop, for each option, check if any chars of that option actually exist within the input string.
                    b. if not, remove that char from opts for all future inputs/loops.
                    c. if yes,
                        1. create a copy of the input string for manipulation, call this 'copy'.
                        2. concat the option onto a copy of the base string, call this 'newB'.
                        3. remove one instance of the option from 'copy'.
                        4. create a new loop with the inputs: opts, 'newB', 'copy'. call this loop 'itr'.
                        5. once itr returns a string or strings, add the strings onto 'ret'. 
                4. if no opts remain or the input string is now empty, return the base string.
                5. otherwise, return 'ret'.

    */
    std::vector<std::string> ret;

    for(char c : options)
    {
        if((signed)input.find(c) >= 0)
        {
            std::string copy = input;
            std::string newB{base + c};
            copy.erase(copy.find(c), 1);

            std::vector<std::string> itr = loops(options, newB, copy);

            ret.insert(ret.end(), itr.begin(), itr.end());
        }
    }

    if(input.size() == 0)return {base};

    return ret;
    
}

std::vector<std::string> permutations(std::string s)
{
    if(s.size() < 2)return {s};
    std::vector<char> opts = {s[0]};
    int index = 0;

    while((signed)s.find_first_not_of(opts.at(opts.size()-1), index+1) > 0) // n
    {
        index = s.find_first_not_of(opts.at(opts.size()-1), index+1);
        opts.push_back(s[index]);
    }

    return loops(opts, "", s);
}


int main()
{
    std::vector<std::string> inputs = {
        "a", // [ "a" ]
        "ab", // [ "ab", "ba" ]
        "abc", // [ "abc", "acb", "bac", "bca", "cab", "cba" ]
        "ffhlbp" // [ "aabb", "abab", "abba", "baab", "baba", "bbaa" ]
    };

    for(std::string str : inputs)
    {
        std::vector<std::string> res = permutations(str);

        for(std::string s : res)
        {
            std::cout << s << " - ";
        }
        std::cout << '\n';
        std::cout << res.size() << '\n';
    }
}