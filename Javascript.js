const productGrid = document.getElementById("product-grid");

        fetch("Fakestore.json")
          .then(response => response.json())
          .then(products => {
            products.forEach(product => {
              const div = document.createElement("div");
              div.classList.add("col-sm-4");
              div.innerHTML = `
                <div class="card h-100">
                  <img id="product-image" src="${product.image}" class="card-img-top" alt="${product.title}">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text fw-bold">$${product.price}</p>
                    <a href="#" class="btn btn-success" >BUY</a>
                  </div>
                </div>`;
                productGrid.appendChild(div);

                const buyButtons = document.querySelectorAll(".btn-success");
                //console.log(buyButtons)
                buyButtons.forEach((button) => {button.addEventListener("click", (event)=> {event.preventDefault(); //förhindra sidan laddas om när användaren klickar på länken
                
                //hämtar den närmaste parent till knappen som har klassen card
                const card = button.closest(".card");
                //spara all info från det klickade kortet 
                const image = card.querySelector(".card-img-top").src;
                const title = card.querySelector(".card-title").textContent;
                const description = card.querySelector(".card-text").textContent;
                const price = card.querySelector(".card-text.fw-bold").textContent;
                //spara all info i en sträng, änvander encodeURIComponent() för att få fram specialtecken i strängen
                const queryString = `title=${encodeURIComponent(title)}
                        &description=${encodeURIComponent(description)}
                        &price=${encodeURIComponent(price)}
                        &image=${encodeURIComponent(image)}`;
                //skapa en URL med query stringen
                const url = `order.html?${queryString}`;
                //öppna nya sida med window.location.href
                location.href = url;
    
                });
            })

            });
        }).catch(error => {
            console.error("Error fetching products:", error);
        });

        
        
          




        