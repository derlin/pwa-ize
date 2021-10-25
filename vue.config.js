module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pwa-ize/" : "/",
  pages: {
    index: {
      // entry for the page
      entry: "src/pages/Home/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "PWA-ize",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    shortcuts: {
      // entry for the page
      entry: "src/pages/Shortcuts/main.js",
      // the source template
      template: "public/shortcuts.html",
      // output as dist/shortcuts.html
      filename: "shortcuts.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Shortcuts",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "shortcuts"]
    }
  }
}
