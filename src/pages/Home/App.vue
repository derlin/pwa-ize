<template>
  <div id="app" class="container">
    <About />
    <LogoHeader />
    <ul class="collapsible collection">
      <li class="collection-item active">
        <div class="collapsible-header">
          <i class="material-icons accent-text">my_location</i>Target
        </div>
        <div class="collapsible-body">
          <PwaForm action-text="Generate Manifest" @valid="generateManifest($event)" />
        </div>
      </li>
    </ul>

    <ManifestViewer :manifest="manifest" />
  </div>
</template>

<script>
import M from "materialize-css"
import LogoHeader from "@/components/LogoHeader.vue"
import About from "@/components/About.vue"
import PwaForm from "@/components/PwaForm.vue"
import ManifestViewer from "@/components/ManifestViewer.vue"
import { ManifestGenerator } from "@/utils/manifest-generator"
import getUrlParams from "@/utils/url-params"

export default {
  name: "App",
  components: {
    LogoHeader,
    About,
    PwaForm,
    ManifestViewer
  },
  data: function () {
    return {
      manifest: null,
      manifestHolder: null,
      collapsible: null
    }
  },
  methods: {
    generateManifest: function (event) {
      ManifestGenerator.generate(event).then(this.applyManifest, (error) =>
        console.log("error", error)
      )
    },

    applyManifest: function (manifest) {
      this.manifest = manifest
      this.collapsible.close()
      manifest.applyTo(document.getElementById("manifest-placeholder"))
    }
  },
  mounted() {
    M.AutoInit()
    this.collapsible = M.Collapsible.init(document.getElementsByClassName("collapsible")[0])
    const urlParams = getUrlParams()
    if (urlParams?.url) {
      ManifestGenerator.generate(urlParams).then(this.applyManifest)
    }
  }
}
</script>

<style>
.collection .collection-item {
  padding: 0 !important;
}

.collection .collapsible-header {
  color: var(--text-secondary);
}

#open-modal {
  float: right;
}
</style>
