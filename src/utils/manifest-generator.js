import GoogleS2 from "./google-s2"

class Manifest {
  constructor(url, title, json) {
    this.url = url
    this.title = title
    this.pwaLink = window.location.href.split("?")[0] + `?url=${url}&title=${title}`
    this.json = json
  }

  applyTo(htmlElement) {
    const blob = new Blob([this.json], { type: "application/json" })
    htmlElement.setAttribute("href", URL.createObjectURL(blob))
  }
}

const ManifestGenerator = {
  generate: async function ({ url, title }) {
    const icons = await GoogleS2.grab(url.hostname)
    // if no title is set, add default to hostname
    title = title?.trim() || url.hostname
    const json = JSON.stringify(
      {
        background_color: "white",
        description: `${title} as standalone app (PWA)`,
        display: "fullscreen",
        name: `${title}`,
        short_name: `${title}`,
        // try as many sizes as possible
        icons: icons,
        start_url: new URL(`redirect.html?url=${url.href}`, window.location.href)
      },
      null,
      2
    )
    return new Manifest(url, title, json)
  }
}

export { Manifest, ManifestGenerator }
