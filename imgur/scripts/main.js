let makeAPICall = async (url) => {
   try {
      let data = await fetch(url);

      let res = await data.json();
      console.log("res:", res);
      return res;
   } catch (error) {
      console.log("error:", error);
   }
};

let appendImages = (res, main) => {
   res.forEach((el) => {
      //   console.log("el:", el)
      let image = document.createElement("img");
      image.src = el.image;

      let name = document.createElement("p");
      name.innerText = el.title;

      let likes = document.createElement('p');
      likes.innerText = "👍🏻 " + getRandomArbitrary(0, 1000);


      const comments = document.createElement("p");
      comments.textContent = "💬 "+ getRandomArbitrary(0, 100);

      const views = document.createElement("p");
      views.innerText = "👁️ " + getRandomArbitrary(101, 150) + "k";

      let descDiv = document.createElement("div");
      descDiv.id = "descDiv";

      descDiv.append(likes, comments, views);

      let div = document.createElement("div");
      div.id = "card";

      div.append(image, name, descDiv);

      main.append(div);
   });
};

function getRandomArbitrary(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

export { makeAPICall, appendImages };
