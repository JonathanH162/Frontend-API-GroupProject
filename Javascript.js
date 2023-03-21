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
                </div>
              `;
              productGrid.appendChild(div);
            });
          })
          .catch(error => {
            console.error("Error fetching products:", error);
          });

const buyButtons = document.querySelectorAll(".btn-success");
buyButtons.forEach((button) => {button.addEventListener("click", (event)=> {event.preventDefault();

    const card = button.closest(".card");
    const title = card.querySelector(".card-title".textContent);
    const description = card.querySelector(".card-text").textContent;
    const price = card.querySelector(".card-text. fw-bold").textContent;

    const queryString = `title = ${encodeURIComponent(title)}
                        &description=${encodeURIComponent(description)}
                        &price=${encodeURIComponent(price)}`;
    const url = `purchase.html?${queryString}`;
    window.location.href = url;
    console.log(queryString)
    });
})
        