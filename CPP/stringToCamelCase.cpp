#include <string>
#include <iostream>

std::string to_camel_case(std::string text)
{
	for(std::string::size_type i = 0; i < text.size(); i++)
	{
		if(text[i] == '_' || text[i] == '-')
		{
			char replace = toupper(text[i+1]);
			std::string str(1, replace);
			text.replace(i, 2, str);
		}
	}
	return text;
}


int main()
{
	std::string input;
	std::cout << "input : ";
	std::cin >> input;
	std::cout << to_camel_case(input) << std::endl;
	return 0;
}
