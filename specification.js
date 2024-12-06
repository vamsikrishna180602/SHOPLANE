let p_id=location.search.split("=")[1]

let cartCountElement=document.getElementById("cart-count")

axios.get( `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${p_id}`)
.then((res)=>{
    let productData=res.data
    let specificationContainer=document.getElementById("specification-container")
    specificationContainer.innerHTML=`
        <div id="specification-image-container">
        <img id="productImg" src=${productData.preview}>
    </div>
    <div id="specification-details-container">
        <div class="product-description">
            <h1 id="name">${productData.name}</h1>
            <h4 id="brand">${productData.brand}</h4>
            <h3>Price: Rs <span id="price">${productData.price}</span></h3>
            <div class="description">
              <h3>Description</h3>
              <p id="description">${productData.description}</p>
            </div>
            <h3>Product Preview</h3>
            <div id="product-preview">
             
            </div>
             
          </div>
          <button 
          onclick="addToCart('${productData.name}', '${productData.price}' , '${productData.preview}')"
          id="add-to-cart">Add to Cart</button>
    </div>
    `


    let productPreview=document.getElementById("product-preview")
    productData.photos.map((item,i)=>{
        productPreview.innerHTML+=`
        <div class="previewImg">
     <img 
    
     class="img-card ${i==0 ? active : " "}" 
     id="img${i}"
     onclick="productPreviewClicked('img${i}')"
     src=${item}>

     </div>
        `
    })
})

function productPreviewClicked(id){
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById(id).classList.add("active")
    let productImage=document.getElementById("productImg")
    productImage.src=document.getElementById(id).src
}


function addToCart(name, price,img){
    let obj={
        productName:name,
        productPrice:price,
        productImg:img
    }
    let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
     if(cartItemFromLocalStorage==null){
        let cartItems=[]
        cartItems.push(obj)
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        cartCountElement.innerText=cartItems.length

     }else{
        let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
        cartItemFromLocalStorage.push(obj)
        localStorage.setItem("cartItems", JSON.stringify(cartItemFromLocalStorage))
        cartCountElement.innerText=cartItemFromLocalStorage.length


     }
}
let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
if(cartItemFromLocalStorage!=null){
cartCountElement.innerText=cartItemFromLocalStorage.length
}












{/* <div id="specification-image-container">
        <img id="productImg" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg" alt="">
    </div>
    <div id="specification-details-container">
        <div class="product-description">
            <h1 id="name">Women Blue Solid Shirt Dress</h1>
            <h4 id="brand">SASSAFRAS</h4>
            <h3>Price: Rs <span id="price">5200</span></h3>
            <div class="description">
              <h3>Description</h3>
              <p id="description">Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem</p>
            </div>
            <h3>Product Preview</h3>
            <div class="product-preview">
              
              
            
                
              
              
            </div>
          </div>
    </div>
     */}