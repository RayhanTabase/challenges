# https://leetcode.com/problems/remove-nth-node-from-end-of-list/
class Solution(object):
    def rem(self, head, prev, n):
        if head == None:
            return 1
        index = self.rem(head.next, head, n)
        if index == n:
            if prev == None:
                head = head.next
                return -1
            else:
                prev.next = head.next
        return index + 1
    
    def removeNthFromEnd(self, head, n):
        if head.next == None:
            head = None
        else:
            index = self.rem(head, None, n)
            if index == -1:
                head = head.next
        return head
        
