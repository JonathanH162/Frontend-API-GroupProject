//Catalog - JS

function catalog() {

  const productGrid = document.getElementById("product-grid");

        fetch("Fakestore.json")
          .then(response => response.json())
          .then(products => {
            products.forEach(product => {
              const div = document.createElement("div");
              div.classList.add("col-sm-4");
              div.innerHTML = `
                <div class="card h-100">
                  <img id="product-image" src="${product.image}" class="card-img-top img-fluid" alt="${product.title}">
                  <div class="card-body">
                    <h5 class="card-title"><strong>${product.title}</strong></h5>
                    <p class="card-text ">${product.description}</p> 
                    <p class="card-text fw-bold">$${product.price}</p>
                    <a href="#" class="btn btn-success " >BUY</a>
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

  // back to top button
var backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 500) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

//Lp, fetch product-list

fetch('Fakestore.json')
  .then(response => response.json())
  .then(data => {
    const products = data.slice(0, 10); // get the first 10 products
    const product1 = document.getElementById('product1');
    const product2 = document.getElementById('product2');
    const product3 = document.getElementById('product3');
    const product4 = document.getElementById('product4');
    const product5 = document.getElementById('product5');
    const product6 = document.getElementById('product6');
    const product7 = document.getElementById('product7');
    const product8 = document.getElementById('product8');
    const product9 = document.getElementById('product9');
    const product10 = document.getElementById('product10');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <div>
          <img id="product-image" src="${product.image}" class="product-thumb" alt="${product.title}">
          <div>
            <h5 class="product-title">${product.title}</h5>
            <p class= "product-price">$${product.price}</p>
            <a href="#" class="card-btn">BUY</a>
          </div>
        </div>`;
      if (product.id === 1) {
        product1.appendChild(productElement);
      } else if (product.id === 2) {
        product2.appendChild(productElement);
      } else if (product.id === 3) {
        product3.appendChild(productElement);
      } else if (product.id === 4) {
        product4.appendChild(productElement);
      } else if (product.id === 5) {
        product5.appendChild(productElement);
      } else if (product.id === 6) {
        product6.appendChild(productElement);
      } else if (product.id === 7) {
        product7.appendChild(productElement);
      } else if (product.id === 8) {
        product8.appendChild(productElement);
      } else if (product.id === 9) {
        product9.appendChild(productElement);
      } else if (product.id === 10) {
        product10.appendChild(productElement);
      } 
    });
  });

  // slider function 

  const productContainers = [...document.querySelectorAll('.product-slider-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
    
  })


}

//Order - JS
function order() {


  const nameInput = document.getElementById("nameInput").value
  const phoneInput = document.getElementById("phoneInput").value
  const emailInput = document.getElementById("emailInput").value
  const addressInput = document.getElementById("addressInput").value
  const zipInput = document.getElementById("zipInput").value
  const regionInput = document.getElementById("regionInput").value
  const validationArray = []
  
  
  const form = document.getElementById("contact-form")
  const product = JSON.parse(sessionStorage.getItem("product"));

  document.getElementById("product-title").innerHTML = product.title;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-price").innerHTML = product.price;
  document.getElementById("product-description").innerHTML = product.description;

  form.addEventListener("submit", function(e){
        e.preventDefault;

        if (nameInput.length < 2 | nameInput.length > 50 | nameInput.length == 0) {
          document.getElementById("name-error").innerHTML = "Namnet får inte vara kortare än 2 eller längre än 50 bokstäver!"
        }
        else {
          validationArray.push(true)
        }
        if (!phoneInput.match(/^[0-9][-()]/) | phoneInput.length > 50 | phoneInput.length == 0) {
          document.getElementById("phone-error").innerHTML = "Telefonnumret får inte vara längre än 50 bokstäver samt får bara innehålla siffror, bindestreck och parenteser!"
        }
        else {
          validationArray.push(true)
        }
        if (emailInput | emailInput.length > 50 | nameInput.length == 0) {
          document.getElementById("name-error").innerHTML = "Namnet får inte vara kortare än 2 eller längre än 50 bokstäver!"
        }
        else {
          validationArray.push(true)
        }


        sessionStorage.setItem("name", nameInput)
        sessionStorage.setItem("phone", phoneInput)
        sessionStorage.setItem("email", emailInput)
        sessionStorage.setItem("address", addressInput)
        sessionStorage.setItem("zip", zipInput)
        sessionStorage.setItem("region", regionInput)
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
  


  


        