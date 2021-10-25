<template>
  <div id="app" class="container">
    <LogoHeader />
    <!-- Modal Add -->
    <div id="modal-add" class="modal bottom-sheet">
      <div class="modal-content">
        <PwaForm action-text="Add" reset-on-emit @valid="add($event)">
          <button
            v-on:click.stop.prevent="this.modalAdd.close()"
            class="waves-effect waves-light btn-flat">
            close
          </button>
        </PwaForm>
      </div>
    </div>
    <!-- List of links -->
    <draggable tag="div" :list="links" handle=".handle" item-key="url">
      <template #item="{ element }">
        <CardLink :link="element" @remove="remove(element)" />
      </template>
    </draggable>
    <ul class="collection"></ul>
    <p v-if="!links.length">Use the + button to add links to the homepage.</p>
  </div>
  <!-- fab -->
  <div id="fab" class="fixed-action-btn direction-top">
    <a
      class="btn-floating btn-large waves-effect waves-light accent"
      v-on:click="this.modalAdd.open()">
      <i class="material-icons">add</i>
    </a>
  </div>
</template>

<script>
import M from "materialize-css"
import draggable from "vuedraggable"

import LogoHeader from "@/components/LogoHeader.vue"
import PwaForm from "@/components/PwaForm.vue"
import CardLink from "@/components/CardLink.vue"
import Storage from "@/utils/storage"

export default {
  name: "App",
  components: {
    LogoHeader,
    PwaForm,
    CardLink,
    draggable
  },
  data: function () {
    return {
      links: Storage.fetch(),
      modalAdd: undefined,
      undoItem: undefined,
      error: ""
    }
  },
  methods: {
    add: function (event) {
      console.log("add", event)
      const { url, title } = event || {}
      // ensure the URL is unique
      if (this.links.some((l) => l.url == url.href)) {
        console.log("dup", this.links)
        M.toast({ html: "the provided URL is already present" })
        return
      }
      // save the new entry
      this.links.push({
        url: url.href,
        title: (title ?? "").trim() || url.hostname,
        domain: url.hostname
      })
      // clear errors and close modal
      this.error = null
      this.modalAdd.close()
    },
    remove: function (link) {
      const index = this.links.indexOf(link)
      // store info for undo button
      this.undoItem = { link: link, index: this.links.indexOf(link) }
      this.links.splice(index, 1)
      M.toast({
        html: '<span>Removed </span><button class="btn-flat toast-action" onclick="window.undo()">Undo</button>'
      })
    },
    undo: function () {
      if (this.undoItem) {
        this.links.splice(this.undoItem.index, -1, this.undoItem.link)
        this.undoItem = undefined
      }
    }
  },
  mounted() {
    M.AutoInit()
    this.modalAdd = M.Modal.init(document.getElementById("modal-add"))
    window.undo = this.undo.bind(this) // make the undo function available from the undo toast
  },
  watch: {
    links: {
      handler() {
        Storage.save(this.links)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.collection {
  border: none;
}

.modal-content button {
  margin-right: 1em;
}

#app {
  margin-bottom: 100px; /* leave some space for the fab */
}

.btn-floating i {
  /* fab icon color */
  color: black;
}
</style>
