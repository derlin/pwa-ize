<template>
  <div class="card" v-on:click="go(link)">
    <img v-bind:src="favLink(link)" class="circle" />
    <div class="content">
      <div class="title">{{ link.title }}</div>
      <div>{{ link.url }}</div>
    </div>
    <div class="icons">
      <!-- <i v-on:click.stop.prevent="installLink(link)" class="material-icons small green-text"
        >file_download</i
      > -->
      <i class="material-icons small handle accent-text">drag_handle</i>
      <i v-on:click.stop.prevent="removeLink(link)" class="material-icons small red-text">clear</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLink",
  props: {
    link: Object
  },
  methods: {
    go: function (link) {
      window.location.href = link.url
    },
    removeLink: function (link) {
      this.$emit("remove", link)
    },

    installLink: function (link) {
      window.location.href = `/?url=${link.url}&title=${link.title}`
    },

    favLink: function (link) {
      return `https://www.google.com/s2/favicons?sz=64&domain=${link.domain}`
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0.5rem 0 0.6rem 0;
  border-radius: 10px;
  padding: 0.1rem 0.1rem 0.1rem 0.7rem;
}

img {
  width: 50px;
  height: 50px;
  border: 1px solid var(--border);
}

.content {
  flex-grow: 1;
  padding: 0 0.8rem;
  overflow: hidden;
}

.content > * {
  overflow: scroll;
  white-space: nowrap;
  padding-top: 2px;
}

.title {
  color: var(--text);
  font-weight: bold;
  font-size: 1.2em !important;
}

.icons {
  width: 30px;
  margin-right: 3px;
}
</style>
