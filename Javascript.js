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


let nameValidation = false
let phoneValidation = false
let emailValidation = false
let addressValidation = false
let zipValidation = false
let regionValidation = false

function validateName() {
  const nameInput = document.getElementById("nameInput").value
  if (nameInput.length < 2 || nameInput.length > 50 || nameInput.length == 0) {
    document.getElementById("name-error").innerHTML = "Namnet får inte vara kortare än 2 eller längre än 50 bokstäver!"
    nameValidation = false
  }
  else {
    document.getElementById("name-error").innerHTML = ""
    nameValidation = true
  }
}
function validatePhone() {
  const phoneInput = document.getElementById("phoneInput").value
  if (!phoneInput.match(/^[0-9-()]/) || phoneInput.length > 50 || phoneInput.length == 0) {
    document.getElementById("phone-error").innerHTML = "Telefonnumret får inte vara längre än 50 bokstäver samt får bara innehålla siffror, bindestreck och parenteser!"
    phoneValidation = false
  }
  else {
    document.getElementById("phone-error").innerHTML = ""
    phoneValidation = true
  }
}
function validateEmail() {
  const emailInput = document.getElementById("emailInput").value
  if (!emailInput.includes("@") || emailInput.length > 50 || emailInput.length == 0) {
    document.getElementById("email-error").innerHTML = "Email-adressen måste innehålla ett @ och får inte vara längre än 50 bokstäver!"
    emailValidation = false
  }
  else {
    document.getElementById("email-error").innerHTML = ""
    emailValidation = true
  }
}
function validateAddress() {
  const addressInput = document.getElementById("addressInput").value
  if (addressInput.length < 2 || addressInput.length > 50 || addressInput.length == 0) {
    document.getElementById("address-error").innerHTML = "Adressen får inte vara kortare än 2 eller längre än 50 bokstäver!"
    addressValidation = false
  }
  else {
    document.getElementById("address-error").innerHTML = ""
    addressValidation = true
  }
}
function validateZip() {
  const zipInput = document.getElementById("zipInput").value
  if (!zipInput.match(/^[0-9]*\s{1}[0-9]{2}/) || zipInput.length == 0) {
    document.getElementById("zip-error").innerHTML = "Postnumret får bara bestå av siffror och måste innehålla ett mellanslag samt vara 6 tecken långt"
    zipValidation = false
  }
  else {
    document.getElementById("zip-error").innerHTML = ""
    zipValidation = true
  }
}
function validateRegion() {
  const regionInput = document.getElementById("regionInput").value
  if (regionInput.length < 2 || regionInput.length > 50 || regionInput.length == 0) {
    document.getElementById("region-error").innerHTML = "Orten får inte vara kortare än 2 eller längre än 50 bokstäver!"
    regionValidation = false
  } 
  else {
    document.getElementById("region-error").innerHTML = ""
    regionValidation = true
  }
}

function validateAll() {

  if(nameValidation == true && phoneValidation == true && emailValidation == true && addressValidation == true && zipValidation == true && regionValidation == true) {
    document.getElementById("submitButton").type = "submit"
  }
  else {
    document.getElementById("submit-error").innerHTML = "Åtgärda fel i dokumentet ovan!"
  }
}

function order() {

  const form = document.getElementById("contact-form")
  const product = JSON.parse(sessionStorage.getItem("product"));

  document.getElementById("product-title").innerHTML = product.title;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-price").innerHTML = product.price;
  document.getElementById("product-description").innerHTML = product.description;

  form.addEventListener("submit", function(e){
    e.preventDefault;

    sessionStorage.clear
    sessionStorage.setItem("name", document.getElementById("nameInput").value)
    sessionStorage.setItem("phone", document.getElementById("phoneInput").value)
    sessionStorage.setItem("email", document.getElementById("emailInput").value)
    sessionStorage.setItem("address", document.getElementById("addressInput").value)
    sessionStorage.setItem("zip", document.getElementById("zipInput").value)
    sessionStorage.setItem("region", document.getElementById("regionInput").value)
    sessionStorage.setItem("title", document.getElementById("product-title").textContent)
    sessionStorage.setItem("image", document.getElementById("product-image").src)
    }
  )
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

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let valid = true;

  // Validate name
  if (name.length < 1 || name.length > 50) {
    nameError.innerText = "Name must be between 1 and 50 characters";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  // Validate email
  if (!email.includes("@") || !email.endsWith(".com") || email.indexOf('@') > email.indexOf('.com') - 1) {
      emailError.innerText = "Invalid email address";
      valid = false;
    } else {
      emailError.innerText = "";
    }
    

  // Validate message
  if (message.length < 1) {
    messageError.innerText = "Message cannot be empty";
    valid = false;
  } else {
    messageError.innerText = "";
  }

  return valid;
}
  


  


        