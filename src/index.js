(async () => {
  console.log("Trying to optimize parcel asset loading");
  await require("../node_modules/@fortawesome/fontawesome-free/css/all.css");
  console.log(new Date().getSeconds());
  await require("../node_modules/@fortawesome/fontawesome-free/js/all.js");
  console.log(new Date().getSeconds());
  await require("./styles.scss");
  console.log(new Date().getSeconds());
})();
