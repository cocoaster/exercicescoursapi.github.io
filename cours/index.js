// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// fetch("https://api.blablagues.net/?rub=blagues")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));
fetch("data.txt").then((res) => console.log(res));
