//Catalog - JS

function catalog(){
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
                    <h5 id="title" class="card-title">${product.title}</h5>
                    <p id="description" class="card-text">${product.description}</p>
                    <p id="price" class="card-text fw-bold">$${product.price}</p>
                    <a href="#" class="btn btn-success" >BUY</a>
                  </div>
                </div>`;
                productGrid.appendChild(div);

                productGrid.addEventListener("click", (event) => {
                  if (event.target.classList.contains("btn-success")) {
                    event.preventDefault();
                    const card = event.target.closest(".card");
                    const product = {
                      image: card.querySelector(".card-img-top").src,
                      title: card.querySelector(".card-title").textContent,
                      description: card.querySelector(".card-text").textContent,
                      price: card.querySelector(".card-text.fw-bold").textContent
                  };
      
                sessionStorage.setItem("product", JSON.stringify(product));
                location.href = "order.html";  
                  }
              });

            });
          
           
          })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
}



// Index - JS

function index() {
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
  });

  //js for vid slider nav
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");
  const contents = document.querySelectorAll(".content");

  var sliderNav = function (manual) {
      btns.forEach((btn) => {
          btn.classList.remove("active");
      });

      slides.forEach((slide) => {
          slide.classList.remove("active");
      });

      contents.forEach((content) => {
          content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
  }

  btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
          sliderNav(i);
      });
  });
}

//Order - JS
function order() {
  const form = document.getElementById("contact-form")
  const product = JSON.parse(sessionStorage.getItem("product"));

  document.getElementById("product-title").innerHTML = product.title;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-price").innerHTML = product.price;
  document.getElementById("product-description").innerHTML = product.description;

  form.addEventListener("submit", function(e){
        e.preventDefault;
          sessionStorage.setItem("name", document.getElementById("nameInput").value)
          sessionStorage.setItem("phone", document.getElementById("phoneInput").value)
          sessionStorage.setItem("email", document.getElementById("emailInput").value)
          sessionStorage.setItem("address", document.getElementById("addressInput").value)
          sessionStorage.setItem("zip", document.getElementById("zipInput").value)
          sessionStorage.setItem("region", document.getElementById("regionInput").value)
          sessionStorage.setItem("title", document.getElementById("product-title").textContent)
          sessionStorage.setItem("image", document.getElementById("product-image").src)
    
      })
}
  


//Confirmation - JS  

function confirmation() {
  document.getElementById("info1").textContent = "Namn: " + sessionStorage.getItem("name")
  document.getElementById("info2").textContent = "Telefon: " + sessionStorage.getItem("phone")
  document.getElementById("info3").textContent = "Email: " + sessionStorage.getItem("email")
  document.getElementById("info4").textContent = "Leveransadress: " + sessionStorage.getItem("address") +
  " / " + sessionStorage.getItem("zip") + " / " + sessionStorage.getItem("region")
  document.getElementById("info5").textContent = "Vara: " + sessionStorage.getItem("title")
  document.getElementById("image").src = sessionStorage.getItem('image')
  document.getElementById("tack").textContent = "Tack för att du handlat hos oss, en kopia av bekräftelsen har skickats till " + sessionStorage.getItem("email") + "!"
}
  
  


        