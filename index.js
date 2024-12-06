let clothingSection=document.getElementById("clothing-section")
let accessoriesSection=document.getElementById("accessories-section")
let cartCountElement=document.getElementById("cart-count")

axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
.then((res)=>{
let products=res.data
products.map((item,i)=>{

  if(item.isAccessory==false){
    clothingSection.innerHTML+=`
    <div class="product-card" onclick="productClicked('${item.id}')">
<img 
class="product-image"
src="${item.preview}">
  <div class="product-details">
<h3 id="product-image-h3">${item.name}</h3>
  <h4 id="product-image-h4">${item.brand}</h4>       
  <h5 id="product-image-h5">Rs ${item.price}/-</h5>
</div>
</div>
    `}

    else{
      accessoriesSection.innerHTML+=`
    <div class="product-card" onclick="productClicked('${item.id}')">
<img 
class="product-image"
src="${item.preview}">
  <div class="product-details">
<h3 id="product-image-h3">${item.name}</h3>
  <h4 id="product-image-h4">${item.brand}</h4>       
  <h5 id="product-image-h5">Rs ${item.price}/-</h5>
</div>
</div>
    `
    }
})
})


function productClicked(id){
  location.assign(`http://127.0.0.1:5500/specification.html?p_id=${id}`)
}

let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
if(cartItemFromLocalStorage!=null){
cartCountElement.innerText=cartItemFromLocalStorage.length
}




<div id="product-card">
<img 
class="product-image"
src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
  <div class="product-details">
<h3 id="product-image-h3">Men Navy Blue Solid Sweatshirt</h3>
  <h4 id="product-image-h4">United Colors of Benetton</h4>       
  <h5 id="product-image-h5">Rs 2599</h5>
</div>
</div>