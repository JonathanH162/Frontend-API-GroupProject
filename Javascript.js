const productGrid = document.getElementById("product-grid");

        fetch("Fakestore.json")
          .then(response => response.json())
          .then(products => {
            products.forEach(product => {
              const div = document.createElement("div");
              div.classList.add("col-sm-4");
              div.innerHTML = `
                <div class="card h-100">
                  <img src="${product.image}" class="card-img-top" alt="${product.title}">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text fw-bold">$${product.price}</p>
                    <a href="purchase.html" class="btn btn-success" >BUY</a>
                  </div>
                </div>`;
        productGrid.appendChild(div);
        const buyButton = div.querySelector('.buy-button');
        if (buyButton) {
          buyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior of anchor tag

            document.addEventListener("click", function(event) {
                console.log(event.target);
              });

            console.log(event.currentTarget)

            console.log(event.currentTarget.dataset.product)

            const productData = JSON.parse(event.currentTarget.dataset.product);
            console.log(productData)
            localStorage.setItem('productData', JSON.stringify(productData));
            window.open('purchase.html', '_blank');
          });
        }
      
         });}).catch(error => {
            console.error("Error fetching products:", error);
        });
        
          

/*const buyButtons = document.querySelectorAll(".btn-success");
console.log(buyButtons)
buyButtons.forEach((button) => {button.addEventListener("click", (event)=> {event.preventDefault(); //förhindra sidan laddas om när användaren klickar på länken

    const card = button.closest(".card");
    //spara all info från det klickade kortet 
    const title = card.querySelector(".card-title").textContent;
    const description = card.querySelector(".card-text").textContent;
    const price = card.querySelector(".card-text.fw-bold").textContent;
    //spara all info i en sträng, änvander encodeURIComponent() för att få fram specialtecken i strängen
    const queryString = `title = ${encodeURIComponent(title)}
                        &description=${encodeURIComponent(description)}
                        &price=${encodeURIComponent(price)}`;
    //skapa en URL med query stringen
    const url = `purchase.html?${queryString}`;
    //öppna nya sida med window.location.href
    window.location.href = url;
    
    });
})

<script>
        const urlParams = new URLSearchParams(window.location.search);
        const productTitle = urlParams.get('title');
        const productDescription = urlParams.get('description');
        const productPrice = urlParams.get('price');

        document.getElementById("product-title").value = productTitle;
        document.getElementById("product-description").value = productDescription;
        document.getElementById("product-price").value = productPrice;

        
    </script>
*/
        