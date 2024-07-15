#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if(!list1)return list2;
        if(!list2)return list1;
        ListNode* result = list2;
        if(list2->val > list1->val)result = list1;
        
        bool cont = true;

        ListNode * s = list2;
        ListNode * b = list1;
        if(list1->val < list2->val)
        {
            s = list1;
            b = list2;
        }

        while(cont)
        {
            if(s->next == nullptr)
            {
                s->next = b;
                cont = false;
                break;
            }

            if((s->next)->val <= b->val)
            {
                s = s->next;
                continue;
            }
            ListNode * next = s->next;
            s->next = b;
            s = b;
            b = next;

        }
        return result;
    }
};

int main()
{
    ListNode a1(4);
    ListNode b1(2, &a1);
    ListNode c1(1, &b1);

    ListNode a2(4);
    ListNode b2(3, &a2);
    ListNode c2(1, &b2);

    Solution sol;
    vector<pair<ListNode*, ListNode*>> inputs = {
        {&c1, &c2}
    };

    for(pair<ListNode*, ListNode*> l : inputs)
    {
        ListNode* result = sol.mergeTwoLists(l.first, l.second);
        ListNode * check = result;
        while(check->next != nullptr)
        {
            cout << check->val << " next : ";
            check = check->next;
        }
        cout << check->val << '\n';
    }
}