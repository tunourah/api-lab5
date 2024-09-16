document.addEventListener("DOMContentLoaded", () => {
    const url = "https://fakestoreapi.com/products";
    let row = document.getElementById("row");
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((product) => {
           
          let card = document.createElement("div");
          card.classList.add(
            "card",
            "col-12",
            "col-sm-6",
            "col-md-4",
            "col-lg-3",
            "m-2",
            "p-0",
            "shadow",
            "rounded",
            "border-2",
            "border-light",
            "p-2",
            "bg-light"
          );
  
     
          let img = document.createElement("img");
          img.src = product.image;  
          img.alt = product.title;  
          img.classList.add("card-img-top", );
  
    
          let cardBody = document.createElement("div");
          cardBody.classList.add("card-body", "text-dark");
  
         
          let title = document.createElement("h5");
          title.classList.add("card-title");
          title.innerText = product.title;
  
  
          let price = document.createElement("p");
          price.classList.add("card-text" , "text-danger");
          price.innerText = `$${product.price}`;
  
          
          cardBody.appendChild(title);
          cardBody.appendChild(price);
          card.appendChild(img);
          card.appendChild(cardBody);
  
          
          row.appendChild(card);
        });
      })
      
  });
  