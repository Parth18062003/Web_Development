const signupbtn = document.getElementById("signupbtn");
const profilebtn = document.getElementById("profilebtn");
const loginbtn = document.getElementById("loginbtn");
const signupform = document.getElementById("signupform");
const loginform = document.getElementById("loginform");
const arrivalpage = document.getElementById("arrivalpage");
const sneakerpage = document.getElementById("sneakerpage");
const indexlink = document.getElementById("indexlink");
const arrivallink = document.getElementById("arrivallink");
const sneakerlink = document.getElementById("sneakerlink");
const searchlg = document.getElementById("searchlg");
const mobilesearchbar = document.getElementById("mobilesearchbar");

// script.js (for index.html)
document.addEventListener("DOMContentLoaded", function() {
  const cardsRow = document.getElementById("cards-row1");

  const products = [
      { id: 1, cardimg: "https://www.superkicks.in/cdn/shop/files/1_b4e2e6ee-ecfb-42fe-929f-5ae3e416f424.jpg?v=1690803901&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/3_7e841c0d-7bdc-4694-820c-966291c5d804.jpg?v=1690803902&width=600", brandname: "Adidas Originals", sneakername: "NMD_S1 'WONDER BEIGE/SHADOW OLIVE'", price: "19,999" },
      { id: 2, cardimg: "https://www.superkicks.in/cdn/shop/products/1-87_9e302508-5465-46c8-b49c-db3561132b8d.jpg?v=1675975856&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-89_fd0c75aa-8abb-439a-9d20-93d321006c79.jpg?v=1675975856&width=600", brandname: "New Balance", sneakername: "990 'GREY/RED'", price: "23,999" },
      { id: 3, cardimg: "https://www.superkicks.in/cdn/shop/products/jordan4.jpg?v=1677044744&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/jordan4.jpg1.jpg?v=1677044744&width=600", brandname: "Jordan", sneakername: "AIR JORDAN 6 RETRO 'GREY/WHITE'", price: "18,395" },
      { id: 4, cardimg: "https://www.superkicks.in/cdn/shop/products/1_5429b5a8-b3bb-4713-bb7b-622e27d9ac28.jpg?v=1677673883&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2_2b4912d3-f124-4c0e-b89b-168087ef6817.jpg?v=1677673882&width=600", brandname: "Jordan", sneakername: "AIR JORDAN 5 'UNIVERSITY BLUE/BLACK-WHITE'", price: "20,295" },
      // Add more product data here
  ];

  let currentRow = document.createElement("div");
  currentRow.classList.add("row");

  products.forEach((product, index) => {
    if (index % 4 === 0 && index !== 0) {
        cardsRow.appendChild(currentRow);
        currentRow = document.createElement("div");
        currentRow.classList.add("row");
    }

    const cardTemplate = generateCardTemplate(product);
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-lg-3", "col-sm-6", "col-6", "mt-2");
    cardCol.innerHTML = cardTemplate;

    currentRow.appendChild(cardCol);
});

     if (currentRow.children.length > 0) {
      cardsRow.appendChild(currentRow);
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const cardsRow = document.getElementById("cards-row2");

  const products = [
    { id: 5, cardimg: "https://www.superkicks.in/cdn/shop/products/CD7069-160-3.jpg?v=1680960903&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/CD7069-160-2.jpg?v=1680960905&width=600", brandname: "Jordan", sneakername: "AIR JORDAN LEGACY 312 LOW 'WHITE/FIRE RED-BLACK-WOLF GREY'", price: "19,999" },
    { id: 6, cardimg: "https://www.superkicks.in/cdn/shop/products/1_04f55dfd-f996-4088-bfb9-96b129318f56.jpg?v=1681983189&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2_d0ed3a2a-2a72-43df-83e8-1b31e594cc2a.jpg?v=1682328371&width=600", brandname: "Adidas Originals", sneakername: "STREETBALL III 'CORE WHITE/CORE BLACK'", price: "13,999" },
    { id: 7, cardimg: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP49.jpg?v=1689169668&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/PHOTOSHOP48.jpg?v=1689169668&width=600", brandname: "Nike", sneakername: "AIR VAPORMAX 2023 FLYKNIT 'SANDDRIFT/BRONZINE-BRONZINE-SANDDRIFT'", price: "19,295" },
    { id: 8, cardimg: "https://www.superkicks.in/cdn/shop/products/1-16_c7a122f8-225d-480b-8076-2fb415c17fc9.jpg?v=1675977700&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-17_43126cf5-6aa5-4565-998a-47d1f813fefd.jpg?v=1675977700&width=600", brandname: "New Balance", sneakername: "WMN'S 550 'LILAC CHALK'", price: "18,999" },
    // Add more product data here
  ];

  let currentRow = document.createElement("div");
  currentRow.classList.add("row");

  products.forEach((product, index) => {
    if (index % 4 === 0 && index !== 0) {
        cardsRow.appendChild(currentRow);
        currentRow = document.createElement("div");
        currentRow.classList.add("row");
    }

    const cardTemplate = generateCardTemplate(product);
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-lg-3", "col-sm-6", "col-6", "mt-2");
    cardCol.innerHTML = cardTemplate;

    currentRow.appendChild(cardCol);
});

     if (currentRow.children.length > 0) {
      cardsRow.appendChild(currentRow);
    }
});      

document.addEventListener("DOMContentLoaded", function() {
  const cardsRow = document.getElementById("cards-row3");

  const products = [
    { id: 9, cardimg: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered11.jpg?v=1688998201&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered5.jpg?v=1688998204&width=600", brandname: "Adidas Originals", sneakername: "SAMBA DECON SHOES 'CORE BLACK/CORE WHITE'", price: "12,995" },
    { id: 10, cardimg: "https://www.superkicks.in/cdn/shop/products/1-76_9dcdc19b-e41e-40f9-871e-51160812e364.jpg?v=1675978258&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-75_5ae7635e-6c93-47ae-93a5-d023d2305d11.jpg?v=1675978258&width=600", brandname: "Nike", sneakername: "AIR FORCE 1 '07 'BLACK/WHITE'", price: "9,695" },
    { id: 11, cardimg: "https://www.superkicks.in/cdn/shop/files/1203a282.401-3.jpg?v=1689450051&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/1203a282.401-2.jpg?v=1689450051&width=600", brandname: "Asics", sneakername: "GEL-LYTE V GODAI 'ARCTIC BLUE/SKY'", price: "11,999" },
    { id: 12, cardimg: "https://www.superkicks.in/cdn/shop/products/1-17_4432d3b0-2e40-42fc-9437-a7a7ffda01f5.jpg?v=1675977668&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-18_c107495b-4690-43b3-ab9d-bfd008fcbbef.jpg?v=1675977668&width=600", brandname: "New Balance", sneakername: "2002R 'LIGHT CREAM PURPLE'", price: "18,999" },
    // Add more product data here
  ];

  let currentRow = document.createElement("div");
  currentRow.classList.add("row");

  products.forEach((product, index) => {
    if (index % 4 === 0 && index !== 0) {
        cardsRow.appendChild(currentRow);
        currentRow = document.createElement("div");
        currentRow.classList.add("row");
    }

    const cardTemplate = generateCardTemplate(product);
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-lg-3", "col-sm-6", "col-6", "mt-2");
    cardCol.innerHTML = cardTemplate;

    currentRow.appendChild(cardCol);
});

     if (currentRow.children.length > 0) {
      cardsRow.appendChild(currentRow);
    }
});    


document.addEventListener("DOMContentLoaded", function() {
  const cardsRow = document.getElementById("cards-row4");

  const products = [
    { id: 13, cardimg: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP9.jpg?v=1683640114&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/PHOTOSHOP5.jpg?v=1683640114&width=600", brandname: "Jordan", sneakername: "WMN'S AIR JORDAN 11 RETRO LOW 'WHITE/TOUR YELLOW-WHITE'", price: "17,495" },
    { id: 14, cardimg: "https://www.superkicks.in/cdn/shop/products/1-148.jpg?v=1675961135&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-136.jpg?v=1675961136&width=600", brandname: "Nike", sneakername: "WMN'S AIR FORCE 1 '07 'WHITE'", price: "8,195" },
    { id: 15, cardimg: "https://www.superkicks.in/cdn/shop/products/1-12_0b0112e5-4f93-40cc-a1f7-932e88cd7c9c.jpg?v=1675969641&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/products/2-12_35083ab1-f9d8-493f-b218-1fec80612a84.jpg?v=1675969641&width=600", brandname: "Adidas Originals", sneakername: "WMN'S ASTIR 'WHITE/GREEN/BLISS ORANGE'", price: "8,999" },
    { id: 16, cardimg: "https://www.superkicks.in/cdn/shop/files/1202a360.111-3.jpg?v=1689449394&width=600",cardimg2:"https://www.superkicks.in/cdn/shop/files/1202a360.111-2.jpg?v=1689449394&width=600", brandname: "Asics", sneakername: "WMN'S JAPAN S PF 'WHITE/APRICOT CRUSH'", price: "6,499" },
    // Add more product data here
  ];

  let currentRow = document.createElement("div");
  currentRow.classList.add("row");

  products.forEach((product, index) => {
    if (index % 4 === 0 && index !== 0) {
        cardsRow.appendChild(currentRow);
        currentRow = document.createElement("div");
        currentRow.classList.add("row");
    }

    const cardTemplate = generateCardTemplate(product);
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-lg-3", "col-sm-6", "col-6", "mt-2");
    cardCol.innerHTML = cardTemplate;

    currentRow.appendChild(cardCol);
});

     if (currentRow.children.length > 0) {
      cardsRow.appendChild(currentRow);
    }
});

function generateCardTemplate(product) {
  return `
      <div class="card">
          <div class="d-flex justify-content-center" id="cardlink">
            <a href="product.html?id=${product.id}" class="link-underline link-underline-opacity-0" id="sneaker1">
              <div class="card" style="width: 19rem;">
                <img src="${product.cardimg}" class="card-img-top d-block w-100" alt="${product.sneakername}" onmouseover="this.src='${product.cardimg2}';" onmouseout="this.src='${product.cardimg}';">
                <div class="card-body">
                    <p class="card-text text-body-secondary">${product.brandname}</p>
                    <h5 class="card-title">${product.sneakername}</h5>
                    <p class="card-text"><i class="fa-solid fa-indian-rupee-sign fa-sm"></i> <strong>${product.price}</strong></p>
                    <a href="#" class="btn btn-basic mt-1">Add to Cart</a>
                </div>
              </div>
            </a>
          </div>
      </div>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
    const productId = getProductIdFromURL();
    if (productId !== null) {
        showProductDetails(productId);
    }
});

function getProductIdFromURL() {
    const urlParams4 = new URLSearchParams(window.location.search);
    return urlParams4.get("id");
}

// script.js
function showProductDetails(cardId) {
    const productData = getProductData(cardId);

    const productDetailsContainer = document.getElementById("product-details");

    const productTemplate = `
        <div class="product-details-content">
        <div class="container mt-3">
        <div class="row" >
            <div class="col-lg-8 col-sm-6">
                <div class="row">
                    <div class="col">
                        <img src="${productData.sneakerimg1}" alt="${productData.sneakername}" class="img-fluid" data-bs-toggle="modal" data-bs-target="#modal1">                     

                        <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="${productData.sneakerimg1}" alt="${productData.sneakername}" width="100%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <img src="${productData.sneakerimg2}" alt="${productData.sneakername}" class="img-fluid" data-bs-toggle="modal" data-bs-target="#modal2">
 
                        <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="${productData.sneakerimg2}" alt="${productData.sneakername}" width="100%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                    <img src="${productData.sneakerimg3}" alt="${productData.sneakername}" class="img-fluid" data-bs-toggle="modal" data-bs-target="#modal3">                         

                        <div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="${productData.sneakerimg3}" alt="${productData.sneakername}" width="100%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    <img src="${productData.sneakerimg4}" alt="${productData.sneakername}" class="img-fluid" data-bs-toggle="modal" data-bs-target="#modal4">                         

                        <div class="modal fade" id="modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="${productData.sneakerimg4}" alt="${productData.sneakername}" width="100%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6" >
                <div class="row flex-column">
                    <div class="col mt-3">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-body-secondary">${productData.brandname}</h5>
                            <button class="btn btn-basic border-0"><i class="fa-regular fa-heart fa-xl"></i></button>
                        </div>
                    </div>
                    <div class="col mt-3">
                        <h2>${productData.sneakername}</h2>
                    </div>
                    <div class="col mt-3">
                        <p class="h5"><i class="fa-solid fa-indian-rupee-sign"></i> <strong>${productData.price}</strong></p>
                    </div>
                    <div class="col mt-4">
                        <div class="d-flex justify-content-between">
                            <p class="h6 mt-2">Shoe size (UK)</p>
                            <button class="btn btn-basic border-0" data-bs-toggle="modal" data-bs-target="#sizeModal"data-bs-toggle="modal" data-bs-target="#sizeModal"><i class="fa-solid fa-ruler fa-lg"></i> Size Chart</button>
                            <div class="modal fade" id="sizeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">Size Chart</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <table class="table table-striped">
                                            <thead>
                                              <tr>
                                                <th scope="col">UK</th>
                                                <th scope="col">US</th>
                                                <th scope="col">cms</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>6</td>
                                                <td>6.5</td>
                                                <td>24.5</td>
                                              </tr>
                                              <tr>
                                                <td>7</td>
                                                <td>7.5</td>
                                                <td>25.5</td>
                                              </tr>
                                              <tr>
                                                <td>8</td>
                                                <td>8.5</td>
                                                <td>26.5</td>
                                              </tr>
                                              <tr>
                                                <td>9</td>
                                                <td>9.5</td>
                                                <td>27.5</td>
                                              </tr>
                                              <tr>
                                                <td>10</td>
                                                <td>10.5</td>
                                                <td>28.5</td>
                                              </tr>
                                              <tr>
                                                <td>11</td>
                                                <td>11.5</td>
                                                <td>29.5</td>
                                              </tr>
                                              <tr>
                                                <td>12</td>
                                                <td>12.5</td>
                                                <td>30.5</td>
                                              </tr>
                                              <tr>
                                                <td>13</td>
                                                <td>13.5</td>
                                                <td>30.5</td>
                                              </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-basic" data-bs-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-2 text-center" id="sizecontainer">
                            <div class="row">
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark">6</button>
                                </div>
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark disabled">7</button>
                                </div>
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark">8</button>
                                </div>
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark disabled">9</button>
                                </div>
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark">10</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark">11</button>
                                </div>
                                <div class="col-2 py-2" >
                                    <button class="btn btn-dark">12</button>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-5 text-center"> 
                            <button class="btn btn-dark py-3" id="cartbtn">Add to Cart</button>
                        </div>
                    </div>
                    <div class="col mt-5">
                        <div class="accordion accordion-flush" id="accordion1">
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  <strong>About Product</strong>
                                </button>
                              </h2>
                              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordion1">
                                <div class="accordion-body">
                                    <p class="text-body-secondary">${productData.aboutproduct}"</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                  <strong>Product Details</strong>
                                </button>
                              </h2>
                              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                                <div class="accordion-body">
                                    <ul class="list-group text-body-secondary" id="productdetails"><p>${productData.productdetails}"</p></ul>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item visually-hidden">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                  Accordion Item #3
                                </button>
                              </h2>
                              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;

    productDetailsContainer.innerHTML = productTemplate;
}

function getProductData(cardId) {
    const products = [
        { id: 1,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/1_b4e2e6ee-ecfb-42fe-929f-5ae3e416f424.jpg?v=1690803901&width=600",sneakerimg2: "https://www.superkicks.in/cdn/shop/files/2_37ca22e1-a786-4410-9415-e6eee62442cb.jpg?v=1690803902&width=600",sneakerimg3: "https://www.superkicks.in/cdn/shop/files/3_7e841c0d-7bdc-4694-820c-966291c5d804.jpg?v=1690803902&width=600",sneakerimg4: "https://www.superkicks.in/cdn/shop/files/4_82339a0b-2db6-4e29-9a82-7152f2872062.jpg?v=1690803903&width=600",brandname:"Adidas Originals",
        sneakername: "NMD_S1 'WONDER BEIGE/SHADOW OLIVE'",
        price: "19,999",
        aboutproduct: "<strong>RESPONSIVE SHOES WITH COSY DETAILS, MADE IN PART WITH PARLEY OCEAN PLASTIC.</strong>Experience more, stress less. These striking adidas NMD_S1 shoes are an excellent choice for a day of adventure in the ever-changing city. Their comfortable sock-like construction keeps them snug on your feet while a full-length BOOST midsole delivers incredible energy return with every step you take. Signature NMD plugs and classic 3-Stripes put a heritage twist on the futuristic design. Gear up and get out there. This shoe's upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Adidas</li><li class="list-group-item"><b>Country of Origin :</b> China</li><li class="list-group-item"><b>Imported By :</b> Adidas India Marketing Private Limited</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> IE2074</li>' },
        { id: 2,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-87_9e302508-5465-46c8-b49c-db3561132b8d.jpg?v=1675975856&width=600",sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-89_fd0c75aa-8abb-439a-9d20-93d321006c79.jpg?v=1675975856&width=600",sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-88_8f175737-b0eb-47ca-8d91-5151a7bdc679.jpg?v=1675975856&width=600",sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4-85_b97cf195-e57d-4fc7-98c8-c7746d6bb4b2.jpg?v=1675975856&width=600",brandname:"New Balance",
        sneakername: "990 'GREY/RED'",
        price: "23,999",
        aboutproduct: "The 990’s original designers were tasked with creating the single best running shoe on the market. The finished product more than lived up to its billing. When it hit shelves for the first time in 1982 the 990 sported an elegantly understated grey colorway, and a then unheard of three-figure price tag. For avid runners and ahead of the curve tastemakers alike, the 990 was a mark of quality and superior taste. There have been updates to the design since ’82, and more color options, but the 990’s aspirational status symbol aura has never changed. Simply put, the 990 is the shoe so good, that we’ve never stopped making it.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Brandman Retail Pvt Ltd.</li><li class="list-group-item"><b>Country of Origin :</b> USA</li><li class="list-group-item"><b>Imported By :</b> Brandman Retail Pvt Ltd.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> M990VS1</li>' },
        { id: 3,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/jordan4.jpg?v=1677044744&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/jordan4.jpg1.jpg?v=1677044744&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/jordan4.jpg2.jpg?v=1677044744&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/jordan4.jpg3.jpg?v=1677044744&width=600",brandname:"Jordan",
        sneakername: "AIR JORDAN 6 RETRO 'GREY/WHITE'",
        price: "18,395",
        aboutproduct: "Air Jordan 6 Retro Men's Shoes Be cool. Stay cool. The AJ6 Cool Grey lets your style take flight with a colorway rooted to Jordan Brand DNA. MJ wore 'em when he claimed his first championship. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any 'fit. After all, they were famously inspired by Jordan's (wait for it) COOL sports car. So lace up, and let your kicks do the rest. Durable materials on the upper are made to last. Nike Air cushioning keeps you going all day. Rubber outsole gives you the traction you need.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Nike India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> CT8529-100</li>' },
        { id: 4,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1_5429b5a8-b3bb-4713-bb7b-622e27d9ac28.jpg?v=1677673883&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2_2b4912d3-f124-4c0e-b89b-168087ef6817.jpg?v=1677673882&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3_73d568bc-6b2a-4cc1-b267-254e22268505.jpg?v=1677673882&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4_903f40d2-2d18-42c7-9d74-928a65d536ea.jpg?v=1677673882&width=600",
        brandname:"Jordan",
        sneakername: "AIR JORDAN 5 'UNIVERSITY BLUE/BLACK-WHITE'",
        price: "20,295",
        aboutproduct: "Year after year, season after season, the AJ5 has been at the heart of your favorite 'fits. Now, the beloved Tinker Hatfield design is back with a collegiate colorway that celebrates MJ's early days. University Blue pays homage to Jordan's alma mater from the upper to the insole, accented by a 'Team Jordan' woven label on the back. An updated liner brings true on-foot bliss and flawless details from the original—like the side vents, spiky midsole, and lace lock—tie it all together with the classic allure you love.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Nike India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b>  DV1310-401</li>' },
        { id: 5,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/CD7069-160-3.jpg?v=1680960903&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/CD7069-160-2.jpg?v=1680960905&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/CD7069-160.jpg?v=1680960905&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/CD7069-160-1.jpg?v=1680960905&width=600",
        brandname:"Jordan",
        sneakername: "AIR JORDAN LEGACY 312 LOW 'WHITE/FIRE RED-BLACK-WOLF GREY'",
        price: "19,999",
        aboutproduct: "<strong>SHOUT-OUT TO THE 312.</strong>The Air Jordan Legacy 312 Low celebrates Michael Jordan's legacy with this shout-out to Chicago's 312 area code. The design creates a modern mash-up of iconic Jordan elements.Design combines iconic elements of the AJ3, AJ1 and Alpha Force.Leather, synthetic and/or textile in the upper with a midfoot strap for a secure fit.Visible Air-Sole unit in the heel enhances cushioning.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Nike India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b>  CD7069-160</li>' },
        { id: 6,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1_04f55dfd-f996-4088-bfb9-96b129318f56.jpg?v=1681983189&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2_d0ed3a2a-2a72-43df-83e8-1b31e594cc2a.jpg?v=1682328371&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3_7146720d-0b65-4bba-9799-f3d55d3b9d87.jpg?v=1682328371&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4_371f2c2c-38f4-49a4-91f6-dd44892046f7.jpg?v=1682328371&width=600",
        brandname:"Adidas Originals",
        sneakername: "STREETBALL III 'CORE WHITE/CORE BLACK'",
        price: "13,999",
        aboutproduct: "There's more to basketball than the game. Away from the bucket, there's the style, the culture and these adidas Streetball III Shoes. They take '90s hoops DNA and reimagine it for right now with a bold stance and expressive mixed-material upper. Ultra-light Lightstrike cushioning lets you traipse through the city in comfort.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Adidas</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Adidas India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b>  H03522</li>' },
        { id: 7,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP49.jpg?v=1689169668&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP48.jpg?v=1689169668&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP47.jpg?v=1689169668&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP46.jpg?v=1689169667&width=600",
        brandname:"Nike",
        sneakername: "AIR VAPORMAX 2023 FLYKNIT 'SANDDRIFT/BRONZINE-BRONZINE-SANDDRIFT'",
        price: "19,295",
        aboutproduct: "Have you ever walked on Air? Step into the Air VaporMax 2023 to see how it's done. The innovative tech is revealed through the perforated sockliner (pull it out to see more). The stretchy Flyknit upper is made with at least 20% recycled content by weight.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Nike India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b>  DV1678-100</li>' },
        { id: 8,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-16_c7a122f8-225d-480b-8076-2fb415c17fc9.jpg?v=1675977700&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-17_43126cf5-6aa5-4565-998a-47d1f813fefd.jpg?v=1675977700&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-15_18c58b71-2f22-4c06-a75a-688dda4c06d6.jpg?v=1675977701&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4-15_a291a2cc-00f7-4b07-90f3-bbb0fc16bbaa.jpg?v=1675977701&width=600",
        brandname:"New Balance",
        sneakername: "WMN'S 550 'LILAC CHALK'",
        price: "18,999",
        aboutproduct: "The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable suede and leather upper construction is a classic look in any era.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Brandman Retail Pvt. Ltd.</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Brandman Retail Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b>  BBW550PB</li>' },
        { id: 9,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered11.jpg?v=1688998201&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered7.jpg?v=1688998204&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered5.jpg?v=1688998204&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP-Recovered6.jpg?v=1688998204&width=600",
        brandname:"Adidas Originals",
        sneakername: "SAMBA DECON SHOES 'CORE BLACK/CORE WHITE'",
        price: "19,999",
        aboutproduct: "<strong>CLASSIC SPORTY TRAINER CONTINUING TO INFLUENCE MODERN FASHION.</strong>The adidas Samba shoes take on a deconstructed aesthetic without missing a beat in style. These shoes reflect a rich legacy with their timeless design. From the feet of football athletes to the high-fashion runways, the adidas Samba shoes embody self-expression and effortless style. The iconic details of the 3-Stripes and T-shaped toe box speak for themselves. Add this versatile option to your rotation to energise your wardrobe",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Adidas</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b> Adidas India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> IF0641</li>' },
        { id: 10,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-76_9dcdc19b-e41e-40f9-871e-51160812e364.jpg?v=1675978258&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-75_5ae7635e-6c93-47ae-93a5-d023d2305d11.jpg?v=1675978258&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-73_647e2c40-aa3f-4b00-a615-43d862700c24.jpg?v=1675978258&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4-72_1c76b232-727b-4e2d-b5b5-fcffea5ba1ba.jpg?v=1675978258&width=600",
        brandname:"Nike",
        sneakername: "AIR FORCE 1 '07 'BLACK/WHITE'",
        price: "9,695",
        aboutproduct: "The radiance lives on with the b-ball original. Crossing hardwood comfort with off-court flair, it puts a fresh spin on what you know best: ‘80s-inspired construction, bold details and nothin’-but-net style.<br><br>From tough stitching to pristine leather, it delivers durable style that’s smoother than backboard glass.Originally designed for performance hoops, Nike Air cushioning delivers lasting comfort.Rubber outsole with pivot circles adds traction and durability.Padded, low-cut collar looks sleek and feels great.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> China</li><li class="list-group-item"><b>Imported By :</b> Nike India Pvt. Ltd</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> DV0788-001</li>' },
        { id: 11,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/1203a282.401-3.jpg?v=1689450051&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/files/1203a282.401-2.jpg?v=1689450051&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/files/1203a282.401-1.jpg?v=1689450051&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/files/1203a282.401.jpg?v=1689450051&width=600",
        brandname:"Asics",
        sneakername: "GEL-LYTE V GODAI 'ARCTIC BLUE/SKY'",
        price: "11,999",
        aboutproduct: "This GEL-LYTE® V sneaker draws inspiration from the Japanese phrase Godai, and how it references the five elements in Japanese philosophy. ​This shoe's upper construction is designed with leather, nubuck, and suede overlays. Each colorway is rendered with different color palettes that reflect the physical properties of the five elements: Fire, Water, Earth, Void, and Wind. The shoes are also accented with a coin dubrae that's embossed with the Japanese symbol for the element that its colorway represents.​The tooling retains its wavy design from when it first hit the running market in 1993. This design's midsole construction also features at least 20% recycled materials to support more sustainable manufacturing.​",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> WING STAR SHOES CO.,LTD.</li><li class="list-group-item"><b>Country of Origin :</b> Cambodia</li><li class="list-group-item"><b>Imported By :</b> ASICS INDIA PVT. LTD</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> 1203A282.401</li>' },
        { id: 12,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-17_4432d3b0-2e40-42fc-9437-a7a7ffda01f5.jpg?v=1675977668&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-18_c107495b-4690-43b3-ab9d-bfd008fcbbef.jpg?v=1675977668&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-16_add05090-c1e6-4b8e-bbbc-6df14737e84a.jpg?v=1675977668&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4-16_bb6714e5-2327-487a-8d2e-8db2f7f3bd82.jpg?v=1675977668&width=600",
        brandname:"New Balance",
        sneakername: "2002R 'LIGHT CREAM PURPLE'",
        price: "18,999",
        aboutproduct: "A modern twist on 2000s running designs, the 2002RX men's sneaker will elevate your everyday style. This throwback silhouette is crafted with premium suede and mesh for a look that sets you apart and GoreTex technology that adds protection from the elements. Underfoot, ABZORB cushioning and Stability Web technology give you the support and comfort you need to power through your day.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b>  Brandman Retail Pvt. Ltd.</li><li class="list-group-item"><b>Country of Origin :</b> Vietnam</li><li class="list-group-item"><b>Imported By :</b>  Brandman Retail Pvt. Ltd.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> M2002RG</li>' },
        { id: 13,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP9.jpg?v=1683640114&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP5.jpg?v=1683640114&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP2.jpg?v=1683640114&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/files/PHOTOSHOP4.jpg?v=1683640109&width=600",
        brandname:"Jordan",
        sneakername: "WMN'S AIR JORDAN 11 RETRO LOW 'WHITE/TOUR YELLOW-WHITE'",
        price: "17,495",
        aboutproduct: "The legendary design of the Air Jordan 11 redefined the look of basketball. A full-length cushioning unit outfits the iconic silhouette with extra-plush comfort.<br><br>Durable materials in the upper give you an iconic look that lasts.Composite shank enhances mid-foot support.Rubber outsole with multidirectional pattern for traction and durability.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> China</li><li class="list-group-item"><b>Imported By :</b>  Nike India Pvt. Ltd.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> AH7860-107</li>' },
        { id: 14,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-148.jpg?v=1675961135&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-136.jpg?v=1675961136&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-129.jpg?v=1675961136&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/4-108.jpg?v=1675961136&width=600",
        brandname:"Nike",
        sneakername: "WMN'S AIR FORCE 1 '07 'WHITE'",
        price: "8,195",
        aboutproduct: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Nike</li><li class="list-group-item"><b>Country of Origin :</b> China</li><li class="list-group-item"><b>Imported By :</b>  Nike India Pvt. Ltd.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> DD8959-100</li>' },
        { id: 15,sneakerimg1: "https://www.superkicks.in/cdn/shop/products/1-12_0b0112e5-4f93-40cc-a1f7-932e88cd7c9c.jpg?v=1675969641&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/products/2-12_35083ab1-f9d8-493f-b218-1fec80612a84.jpg?v=1675969641&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/products/3-12_84c1af19-521b-498f-bb1e-495c1e4ed389.jpg?v=1675969641&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/products/6-7_9805401c-e07c-4064-930a-363cd6a78c25.jpg?v=1675969641&width=600",
        brandname:"Adidas Originals",
        sneakername: "WMN'S ASTIR 'WHITE/GREEN/BLISS ORANGE'",
        price: "8,999",
        aboutproduct: "Being yourself is the most important thing. ADIDAS Astir is a pair that is suitable for expressing originality that no one imitates. Bold looks and bright colors make you shine from your feet. Soft cushioning inspired by 2000s running shoes provides a comfortable fit.<br><br>In order to prevent the adverse effects on the environment caused by the production of virgin materials, we use some recycled materials generated from production waste such as cutting scrap and consumer goods waste from households.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> Adidas India Marketing Private Limited</li><li class="list-group-item"><b>Country of Origin :</b> Cambodia</li><li class="list-group-item"><b>Imported By :</b>  Adidas India Pvt. Ltd.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> GW9752</li>' },
        { id: 16,sneakerimg1: "https://www.superkicks.in/cdn/shop/files/1202a360.111-3.jpg?v=1689449394&width=600",
        sneakerimg2: "https://www.superkicks.in/cdn/shop/files/1202a360.111-2.jpg?v=1689449394&width=600",
        sneakerimg3: "https://www.superkicks.in/cdn/shop/files/1202a360.111-1.jpg?v=1689449394&width=600",
        sneakerimg4: "https://www.superkicks.in/cdn/shop/files/1202a360.111.jpg?v=1689449394&width=600",
        brandname:"Asics",
        sneakername: "WMN'S JAPAN S PF 'WHITE/APRICOT CRUSH'",
        price: "6,499",
        aboutproduct: "The JAPAN S™ PF shoes give your feet and your mind a lift for every move. They're based on one of our throwback offerings from 1981 but rework the iconic court details with lifestyle materials. Updating the sole with a platform tooling, this shoe is complemented with good comfort and improved cushioning. Mirroring the aesthetic of a heritage basketball sneaker, this heritage style is also paired with nostalgic ASICS branding, like the 'ASICS' lettering at the heel.",
        productdetails: '<li class="list-group-item"><b>Manufacturer :</b> WING STAR SHOES CO.,LTD.</li><li class="list-group-item"><b>Country of Origin :</b> Cambodia</li><li class="list-group-item"><b>Imported By :</b> ASICS INDIA PVT. LTD.</li><li class="list-group-item"><b>Weight :</b> 0.95kg</li><li class="list-group-item"><b>Article Code :</b> 1202A360.111</li>' }
        // Add more product data here
    ];

    return products.find(product => product.id.toString() === cardId);
}


function adjustContentVisibility() {
    if (window.innerWidth < 768) { // Adjust the breakpoint as needed
      mobilesearchbar.classList.add('active-content');
      searchlg.classList.remove('active-content');
    } else {
      mobilesearchbar.classList.remove('active-content');
      searchlg.classList.add('active-content');
    }
}

// Initial adjustment
adjustContentVisibility();

// Listen for window resize
window.addEventListener('resize', adjustContentVisibility);

profilebtn.addEventListener('click', function() {
    window.location.href = 'profile.html';
});

const urlParams1 = new URLSearchParams(window.location.search);
const fromLink = urlParams1.get('from');

if (fromLink === 'sneaker') {
  sneakerpage.classList.add('active-content');
  arrivalpage.classList.remove('active-content');
  sneakerlink.classList.add('active');
  indexlink.classList.remove('active');
} else if (fromLink === 'arrival') {
  arrivalpage.classList.add('active-content');
  sneakerpage.classList.remove('active-content');
  arrivallink.classList.add('active');
  indexlink.classList.remove('active');
}
  

loginform.classList.add('active-content');

const urlParams = new URLSearchParams(window.location.search);
const fromIndex = urlParams.get('from') === 'index';

if (fromIndex) {
    signupform.classList.remove('active-content');
}

signupbtn.addEventListener('click', function() {
    hideallcontent();
    signupform.style.display = 'block';
});

loginbtn.addEventListener('click', function() {
    hideallcontent();
    loginform.style.display = 'block';
});

function hideallcontent() {
    loginform.style.display = 'none';
    signupform.style.display = 'none';
}



