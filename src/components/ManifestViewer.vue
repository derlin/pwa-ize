<template>
  <div v-if="manifest">
    <div class="card">
      <div class="card-content">
        <h3>You're done !</h3>
        <p>
          You can now install <b>{{ manifest.title }}</b> (
          <a v-bind:href="manifest.url.href">{{ manifest.url.href }} </a>).
        </p>
        <p>
          <span id="instruction">Instructions:</span> (1) open the settings using
          <i class="material-icons tiny accent-text">open_in_browser</i> on iphones or
          <i class="material-icons tiny accent-text">more_vert</i> on android, and (2) click on
          <i>Add to Home Screen</i>.
        </p>
        <p>That's it !</p>

        <p>
          The link to this install page is
          <a v-bind:href="manifest.pwaLink">{{ manifest.pwaLink }} </a>.
        </p>

        <p>For information, here is the generated manifest:</p>
        <pre><code>{{manifest.json}}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { Manifest } from "../utils/manifest-generator"

export default {
  name: "ManifestViewer",
  props: {
    manifest: Manifest
  }
}
</script>

<style scoped>
p {
  margin-bottom: 10px !important;
}

pre {
  font-size: 0.8em;
}

#instruction {
  color: var(--text-secondary);
}
</style>