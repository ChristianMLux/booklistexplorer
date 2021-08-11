<template>
  <h2>{{ book.title }}</h2>
  <div class="info-wrapper">
    <img :src="book.cover" />
    <ol>
      <li v-for="(value, key) in book" :key="key">
        <p class="keyP">{{ key }}:</p>
        <p class="valueP">{{ value }}</p>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "BookDetail",
  data() {
    return {
      book: {},
      isbn: null,
    };
  },
  methods: {
    async getBook() {
      const response = await fetch(`http://localhost:4730/books/${this.isbn}`);
      this.book = await response.json();
    },
    init(isbn) {
      this.isbn = isbn;
      this.getBook();
    },
  },
  created() {
    this.init(this.$route.params.isbn);
  },
  beforeRouteUpdate(to) {
    this.init(to.params.isbn);
  },
};
</script>

<style scoped>
h2 {
  padding: 1rem 0 0 0;
  margin: 0;
}
.info-wrapper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
}
img {
  padding: 0;
  margin: 0;
}
ol {
  margin: 2.5rem 0 0 0;
  padding: 0;
  list-style: none;
  text-align: left;
}
ol > li {
  display: flex;
  justify-content: space-between;
}
li > p:first-child {
  width: 15%;
  font-weight: bold;
}
li > p:last-child {
  width: 85%;
  text-align: justify;
}
p {
  margin: 0;
  padding: 0.5rem;
}
</style>
