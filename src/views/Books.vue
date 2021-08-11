<template>
  <div class="booklist">
    <BookList />
  </div>
</template>

<script>
import BookList from "@/components/BookList/BookList.vue";
export default {
  name: "Books",
  components: {
    BookList,
  },
};
</script>
