import { makeAPICall, appendImages } from "../scripts/main.js";

let res = await makeAPICall("https://fakestoreapi.com/products");

let container = document.getElementById("container");
appendImages(res, container);

let search = document.querySelector(".search");

search.addEventListener("keypress", (e) => {
   let search_value = search.value;

   if (e.key === "Enter") {
      localStorage.setItem("search_term", search_value);
      window.location.href = "./search.html";
   }
});
