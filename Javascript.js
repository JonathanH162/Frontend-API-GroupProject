//Catalog - JS

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
  const urlParams = new URLSearchParams(location.search)

  document.getElementById("product-title").innerHTML = urlParams.get('title')
  document.getElementById("product-image").src = urlParams.get('image')
  document.getElementById("product-price").innerHTML = urlParams.get('price')
  document.getElementById("product-description").innerHTML = urlParams.get('description')

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
  
  


        