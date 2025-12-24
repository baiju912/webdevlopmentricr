// const URl = "https://fakestoreapi.com/products";

// function shop()
// {
//     const image = document.getElementById("img1");

// }

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productlist = document.getElementById("product");

    data.forEach((element) => {
      const d = document.createElement("div");
        // d.classList.add("border");
      d.innerHTML = `
            <div
        class="d-flex justify-content-between gap-5 border border-1 shadow rounded-4 p-2 w-75 mx-auto mb-3"
      >
        <div class=" mt-4 d-flex align-content-center justify-content-center">
          <img
            class="object-fit-container"
            src=${element.image}
             width="200px"
             
            alt="Image"
          />
        </div>
        <div >
          <h3 class="mt-4">
            ${element.title}
          </h3>
          <h4>Amount:- ${(element.price * 80).toFixed(2)} ₹</h4>
          <p>
            <b> Description:-</b> ${element.description.slice(0,200)}
          </p>
          <p class="fw-bold">Category :- ${element.category}</p>
          <p><b>Rating -</b> ${element.rating.rate}/5 (${
        element.rating.count
      })</p>
          <a href="./itemData.html"
            ><button class="btn btn-primary mb-4 w-25">Buy Now</button></a
          >
        </div>
      </div>
            `;

            productlist.appendChild(d);
    });

    
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
