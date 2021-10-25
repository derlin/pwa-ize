<template>
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <input type="url" id="url" ref="urlInput" v-model="url" class="validate" />
        <label for="url">URL</label>
      </div>
      <div class="input-field col s12">
        <input type="text" id="title" v-model="title" />
        <label for="title">Title</label>
      </div>
    </div>
    <button
      v-on:click.stop.prevent="validate()"
      type="submit"
      class="waves-effect waves-light btn accent">
      {{ actionText }}
    </button>
    <slot></slot>
  </form>
</template>

<script>
import M from "materialize-css"
import getUrlParams from "../utils/url-params"
const urlParams = getUrlParams()

export default {
  name: "PwaForm",
  props: {
    actionText: String,
    resetOnEmit: Boolean
  },
  data: function () {
    return {
      url: urlParams.url,
      title: urlParams.title
    }
  },
  methods: {
    validate: function () {
      // ensure the URL is valid
      let finalUrl
      try {
        finalUrl = new URL(this.url)
      } catch {
        this.$refs["urlInput"].focus()
        M.toast({ html: "the provided URL is invalid" })
        return
      }
      console.log("emitting", finalUrl)
      this.$emit("valid", { url: finalUrl, title: this.title })
      if (this.resetOnEmit) {
        this.url = ""
        this.title = ""
      }
    }
  }
}
</script>
<style>
</style>
