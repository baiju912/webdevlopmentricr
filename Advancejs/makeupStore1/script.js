async function productlist() {
  try {
    const item = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );

    const dataa = await item.json();

    const prod = document.getElementById("productRow");

    dataa.forEach((ele) => {
      const di = document.createElement("div");
      di.classList.add("col-4", "p-2");

      di.innerHTML = `
      <div class="card border rounded-3 shadow p-3 h-100">
              <div class="h-50 mb-1 text-center">
                <img
                  class="object-fit-contain"
                  src=${ele.image_link}
                  height = 180px;
                  alt="${ele.name}"
                />
              </div>
              <div class="h-50">
                <div class="fw-bold fs-5">${ele.name.slice(0, 30)}</div>
                
                <div><b>Brand:-</b>${ele.brand}</div>
                <div class="fw-semibold fs-5">Rs:- ${(ele.price * 80).toFixed(
                  2
                )} ₹ </div>
                <div class="mb-2">
                  <b>Description:-</b> ${ele.description.slice(0, 50)}
                </div>

                <div class="mb-1">
                  <b>Categoery:-</b> ${ele.category}
                </div>

                <div class="d-flex justify-content-center gap-3 mb-5">
                  <button class="btn btn-outline-warning">Add Cart</button>
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
           </div>
      `;
      prod.appendChild(di);
    });
  } catch (error) {
    console.log(error.message);
  }
}

productlist();

async function productlist1() {
  try {
    const item = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );

    const dataa = await item.json();

    const prod = document.getElementById("productRow1");

    dataa.forEach((ele) => {
      const di = document.createElement("div");
      di.classList.add("mt-3");

      di.innerHTML = `
      
            
             <div class=" d-flex gap-3  border rounded-3 shadow p-3 h-100">
              <div class="col-3 mb-1 text-center">
                <img
                  class="object-fit-contain"
                  src=${ele.image_link}
                  height = 180px;
                  width = 180px;
                  alt="${ele.name}"
                />
              </div>
              <div class="col-9">
           
                <div class="fw-bold fs-5">${ele.name.slice(0, 30)}</div>
                
                <div><b>Brand:-</b>${ele.brand}</div>
                <div class="fw-semibold fs-5">Rs:-${(ele.price * 80).toFixed(
                  2
                )} ₹ </div>
                <div class="mb-2">
                  <b>Description:-</b> ${ele.description.slice(0, 100)}
                </div>

                <div class="mb-1">
                  <b>Categoery:-</b> ${ele.category}
                </div>

                <div class="d-flex justify-content-center gap-3 mb-5">
                  <button class="btn btn-outline-warning">Add Cart</button>
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
          </div>
           
          
        
      `;
      prod.appendChild(di);
    });
  } catch (error) {
    console.log(error.message);
  }
}

productlist1();
