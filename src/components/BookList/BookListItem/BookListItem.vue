<template>
  <li>
    <p>{{ title }}</p>
    <p>{{ subtitle }}</p>
    <router-link :to="{ name: 'BookDetail', params: { isbn: isbn } }">
      {{ isbn }}
    </router-link>
    <button :disabled="read" @click="$emit('read')">
      <p v-if="read">Done</p>
      <p v-else>Read</p>
    </button>
  </li>
</template>

<script>
export default {
  name: "BookListItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    isbn: {
      type: String,
      required: true,
    },
    numPages: {
      type: Number,
      validator: (val) => {
        return val < 1000;
      },
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["read"],
};
</script>

<style scoped>
ul > li {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  text-align: left;
}
ul > li:nth-child(1n + 1) {
  color: snow;
  background-color: #35495e;
}
ul > li:nth-child(1n + 1) > a {
  color: snow;
  margin: auto 0;
}
ul > li:nth-child(2n + 2) {
  color: black;
  background-color: #42b883;
}
ul > li:nth-child(2n + 2) > a {
  color: black;
}
li > p {
  width: 33%;
  padding: 0 0 0 1rem;
}
</style>
