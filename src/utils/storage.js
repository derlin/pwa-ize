// localStorage persistence
const STORAGE_KEY = "PWA_links";

const Storage = {
  fetch: function () {
    const links = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    //this.uid = links.length;
    console.log("fetched", links);
    return links;
  },
  save: function (links) {
    console.log("saved", links);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }
};

export default Storage;
