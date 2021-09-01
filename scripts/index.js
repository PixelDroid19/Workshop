const items = document.getElementById("items"),
  templateCard = document.getElementById("template-card").content,
  fragment = document.createDocumentFragment();

  document.addEventListener("DOMContentLoaded", () => {
    GetData();
  });
  
  const GetData = async () => {
    try {
      const res = await fetch("./Data/items.json");
      const data = await res.json();
  
      //Recorre el json con map
      data.map((Datos) => {
        const { id, name, image, costo} = Datos;
        templateCard.querySelector("img").setAttribute("src", image);
        templateCard.querySelector("h5").textContent = name;
        templateCard.querySelector("span").textContent = costo;
        templateCard.querySelector(".card").dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
      });
      // appendChild agrega un nodo al final de la lista
      items.appendChild(fragment);
  
    } catch (error) {
      console.log(error);
    }
  };
  