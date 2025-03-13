---
title: 演示页面A
aside: false
---

# 演示页面 A

<MyModal :visible.sync="isModalVisible">
  <h2>这是一个弹窗</h2>
  <p>这里是弹窗的内容。</p>
</MyModal>

<button @click="isModalVisible = true">打开弹窗</button>

<script>
export default {
  data() {
    return {
      isModalVisible: false
    }
  }
}
</script>