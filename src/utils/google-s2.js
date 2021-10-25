/**
 * Use Google S2 API to get favicons for a given hostname.
 * This library will try to fetch favicons of different sizes, then discover the actual size of the images returned by S2.
 * The result of `GoogleS2.grab` is the actual icons (with proper sizes) available.
 *
 * Usage:
 * ```javascript
 * GoogleS2
 *      .grab(new URL('https://example.com/lala').hostname)
 *      .then(function(favicons){
 *          // do stuff with the result
 *          console.log(favicons);
 *      });
 * ```
 */

/**
 * Get all favicons for a given hostname (e.g. test.ch, google.com, use `new URL(url).hostname` to get it easily).
 *
 * @param {string} hostname
 * @return an object array, each object having the following properties:
 *  - url:string
 *  - sizes: a string with the format `${height}x${widht}`
 *  - type: a string with the format `image/${format}` (always in png in Google S2 case)
 */
function grab(hostname) {
  return new Promise(function (resolve, reject) {
    Promise.all(
      [64, 128, 192, 256, 512].map(function (size) {
        return getImage(hostname, size)
      })
    )
      .then(function (values) {
        console.log(values)
        resolve(getUnique(values, "src"))
      })
      .catch(reject)
  })
}

/**
 * Remove duplicates from an object array based on a given property.
 *
 * @param {Array} arr an array of objects
 * @param {string} comp the property to use for comparison
 */
function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])
    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}

/**
 * Get the actual size and URL of a favicon from Google S2, because the `sz` parameter is only an hint.
 * @param {string} hostname domain to fetch from
 * @param {number} size size hint (sz parameter)
 * @return an object with attributes: src, sizes, type
 */
function getImage(hostname, size) {
  return new Promise(function (resolve, reject) {
    try {
      const img = new Image()
      img.onload = function () {
        console.log(`Google S2: ${this.src} => ${this.height}x${this.width}`)
        resolve({
          src: `https://www.google.com/s2/favicons?sz=${this.width}&domain=${hostname}`,
          sizes: this.width + "x" + this.height,
          type: "image/png"
        })
      }
      img.src = `https://www.google.com/s2/favicons?sz=${size}&domain=${hostname}`
    } catch (error) {
      reject(error)
    }
  })
}

export default {
  grab: grab
}
