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
        console.log(data[0]);
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
  

  
//Seleccionar items
items.addEventListener("click", (e) => {
    capturaItems(e);
  });
  
  const capturaItems = (e) => {
    //item que contenga la clase 'selectItems' devuelve
    if (e.target.classList.contains("card-img-top")) {
      //captura todos los elementos de la target
      setItem(e.target.parentElement);
    }
  };
  
  const setItem = (e) => {
    Posicion = e.getAttribute("data-id");
    console.log(Posicion);
  };