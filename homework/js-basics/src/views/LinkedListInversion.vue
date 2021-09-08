<template>
  <div class="linked-list-inversion">linked-list-inversion</div>
</template>

<script>
export default {
  methods: {
    reverseList(head) {
      if (!head || !head.next) return head;
      let prev = null;
      let curr = head; // 假设是第一节点
      while (curr) {
        // 把第一个节点的next -> null curr.next = null
        // 把第一个节点的prev -> 第二节点 curr.next
        // 保存curr.next节点
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      head = prev;
      return head;
    },
  },
};
</script>

<style></style>
