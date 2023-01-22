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
// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
const myHeaders = new Headers();

const init = {
  method: "GET",
  header: myHeaders,
  modee: "cors",
  cache: "default",
};

fetch("data.json", init).then((res) => console.log(res));

const init2 = {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Coco Aster",
    message: "Hello",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyées")
  );
});
