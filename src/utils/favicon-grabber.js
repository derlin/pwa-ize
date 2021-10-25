/**
 * Use FaviconGrabber API to get favicons for a given hostname.
 * This library will automatically discover the size of the images, in case this attribute is not present in the favicongrabber response.
 *
 * Usage:
 * ```javascript
 * FaviconGrabber
 *      .grab(new URL('https://example.com/lala').hostname)
 *      .then(function(favicons){
 *          // do stuff with the result
 *          console.log(favicons);
 *      });
 * ```
 */
let FaviconGrabber = {}

;(function (module) {
  /**
   * Get all favicons for a given hostname (e.g. test.ch, google.com, use `new URL(url).hostname` to get it easily).
   *
   * @param {string} hostname
   * @return an object array, each object having the following properties:
   *  - url:string
   *  - sizes: a string with the format `${height}x${widht}`
   *  - type: a string with the format `image/${format}` (always in png in Google S2 case)
   */
  module.grab = function (hostname) {
    return new Promise(function (resolve, reject) {
      try {
        const grabberUrl = `http://favicongrabber.com/api/grab/${hostname}`

        const xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              const resp = JSON.parse(this.responseText)
              console.log(resp)
              Promise.all(resp["icons"].map(getImageSize)).then(resolve).catch(reject)
            } else {
              reject(
                new Error(
                  `An error occurred fetching favicons: ${grabberUrl} returned ${this.status}`
                )
              )
            }
          }
        }
        xhttp.open("GET", grabberUrl, true)
        xhttp.send()
      } catch (error) {
        reject(new Error(`An error occurred while fetching favicons: ${error}`))
      }
    })
  }

  /**
   * Get the actual size and URL of an icon, because the `sizes` attribute is not always present.
   * @param {object} obj one item of the `response['icons']` list, should have at least the `src` attribute set
   * @return an object with attributes: src, sizes, type
   */
  function getImageSize(obj) {
    return new Promise(function (resolve, reject) {
      try {
        if (Object.prototype.hasOwnProperty.call(obj, "sizes")) {
          obj.type = `image/${getUrlExtension(obj.src)}`
          resolve(obj)
        } else {
          const img = new Image()
          img.onload = function () {
            obj.sizes = this.width + "x" + this.height
            resolve(obj)
          }
          img.src = obj.src
        }
      } catch (error) {
        reject(`getting image size: ${obj}, ${error}`)
      }
    })
  }

  /**
   * Extract the extension from an URL
   *
   * @param {string} url
   */
  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split(".").pop().trim()
  }
})(FaviconGrabber)
