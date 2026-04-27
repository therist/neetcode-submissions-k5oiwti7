/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

//[1,2,4],[1,3,5],[3,6]
// [1,1,2,3,3,4,5,6]

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        let result = lists[0];
        for (let i = 1; i < lists.length; i++) {
            result = this.mergeTwoLists(result, lists[i]);
        }
        return result;
    }

    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        tail.next = list1 || list2;

        return dummy.next;
    }
}
