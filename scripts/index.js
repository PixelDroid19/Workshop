const items = document.getElementById("items"),
  templateCard = document.getElementById("template-card").content,
  fragment = document.createDocumentFragment();

const costo = document.getElementById('costo'),
      Name = document.getElementById('name'),
      img1 = document.getElementById('img1'),
      img2 = document.getElementById('img2'),
      img3 = document.getElementById('img3'),
      img4 = document.getElementById('img4'),
      imgSmall1 = document.getElementById('imgSmall1'),
      imgSmall2 = document.getElementById('imgSmall2'),
      imgSmall3 = document.getElementById('imgSmall3'),
      imgSmall4 = document.getElementById('imgSmall4');

let Posicion = 0;
  //Cartas de los productos
  document.addEventListener("DOMContentLoaded", () => {
    GetData();
  });
  
  const GetData = async () => {
    try {
      const res = await fetch("./Data/items.json");
      const data = await res.json();
        console.log(data[0]);
      //Recorre el Json mostrando sus elementos
      data.map((Datos) => {
        const { id, name, image, costo} = Datos;
        templateCard.querySelector("img").setAttribute("src", image);
        templateCard.querySelector("h5").textContent = name;
        templateCard.querySelector("span").textContent = costo;
        templateCard.querySelector(".card").dataset.id = id - 1;
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
    Switchimg(Posicion);
  };

  //Cambio de imagenes

    
  const Switchimg = async (pos) => {
    try {
      const res = await fetch("./Data/Frame.json");
      const data = await res.json();

        
        const {name, Cost, Frame1, Frame2, Frame3, Frame4,FrameSmall1,FrameSmall2,FrameSmall3,FrameSmall4} = data[pos];
        Name.textContent = name;
        costo.textContent = Cost;
        img1.setAttribute("src", Frame1);
        img2.setAttribute("src", Frame2);
        img3.setAttribute("src", Frame3);
        img4.setAttribute("src", Frame4);

        imgSmall1.setAttribute("src", FrameSmall1);
        imgSmall2.setAttribute("src", FrameSmall2);
        imgSmall3.setAttribute("src", FrameSmall3);
        imgSmall4.setAttribute("src", FrameSmall4);
    } catch (error) {
      console.log(error);
    }
  };