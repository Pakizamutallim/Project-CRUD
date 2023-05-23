
const trend = document.querySelector(".trending")

fetch ('https://6469bba8183682d614455b66.mockapi.io/products')
.then(resp => resp.json())
// .then(res => console.log(res))
.then(res => {
    res.forEach(i => {
        trend.innerHTML += `
        <div class="product card col-3" style="width: 15rem;">
            <img src="${i.image}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="title card-title">${i.name}</h5>
              <p class="price card-text">$ ${i.price}</p>
            </div>
        </div>`
    }); 
}) 

// const basket = document.getElementById("basket")
// basket.addEventListener("click", =>{
    
// })
