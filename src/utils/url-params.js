function getUrlParams() {
  try {
    const params = new URLSearchParams(window.location.href.split("?")[1])
    if (params.get("url")) {
      return {
        url: new URL(params.get("url")),
        title: params.get("title")
      }
    }
  } catch (e) {
    console.log("no params or invalid url")
  }
  return {}
}

export default getUrlParams
