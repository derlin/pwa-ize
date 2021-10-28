<template>
  <div>
    <a id="open-modal" class="modal-trigger" href="#modal-about"
      ><i class="material-icons accent-text">info</i></a
    >
    <!-- Modal About -->
    <div id="modal-about" class="modal">
      <div class="modal-content">
        <p>
          PWA-ize let you transform any website into a
          <span class="accent-text">P</span>rogressive <span class="accent-text">W</span>eb
          <span class="accent-text">A</span>pplication. A PWA can be added to your homescreen and
          will open on a separate (and dedicated) browser window, thus feeling more like a regular
          app.
        </p>
        <p>
          You can either install a particular website as PWA using this page, or use the
          <a href="shortcuts.html">Shortcuts Page</a>, add links, and use it as a launcher.
        </p>
        <p>
          For more information, have a look at the
          <a href="https://github.com/derlin/pwa-ize" target="_blank">code</a>, and feel free to
          give it a <i class="material-icons tiny">star</i> !
        </p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>
