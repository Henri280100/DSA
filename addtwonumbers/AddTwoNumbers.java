package addtwonumbers;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

public class AddTwoNumbers {
    private ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode list = new ListNode(0);
        ListNode head = list;

        int sum = 0;
        int carry = 0;

        while (l1 != null || l2 != null || sum != 0) {
            int a = (l1 != null) ? l1.val : 0;
            int b = (l2 != null) ? l2.val : 0;
            sum = carry + a + b;

            if (sum >= 10) {
                carry = 1;
                sum += 10;
            }
            head.next = new ListNode(sum);
            head = head.next;
            sum = carry;
            carry = 0;
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }
        return list.next;

    }
}

class Main{
    public static void main(String[] args) {
        
    }
}

// ListNode list = new ListNode(0);
// ListNode head = list;
// int carry = 0;
// int sum = 0;
// while (l1 != null || l2 != null || carry != 0) {
// int a = (l1 != null) ? l1.val : 0;
// int b = (l2 != null) ? l2.val : 0;
// sum = carry + a + b;

// if (sum >= 10) {
// carry = 1;
// sum += 10;
// }
// head.next = new ListNode(sum);
// head = head.next;
// sum = carry;
// carry = 0;
// }
// return list.next;