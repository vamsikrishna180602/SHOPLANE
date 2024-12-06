let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
let cartCountElement=document.getElementById("cart-count")
let cartItemContainer=document.getElementById("cart-item-container")
let totalAmount=document.getElementById("total-amount")
let numberOfItem=document.getElementById("number-of-item")
if(cartItemFromLocalStorage!=null){
cartCountElement.innerText=cartItemFromLocalStorage.length
let price=cartItemFromLocalStorage.reduce((acc,item,i)=>{
return acc+parseFloat(item.productPrice)
},0)
totalAmount.innerText=price
}else{
    totalAmount.innerText=0

}
if(cartItemFromLocalStorage!=null){
numberOfItem.innerHTML=`
${cartItemFromLocalStorage.length}

`}
if(cartItemFromLocalStorage!=null){
cartItemFromLocalStorage.map((item,i)=>{
    
    cartItemContainer.innerHTML+=`
    <div class="item">
    <img src=${item.productImg}>
    <div class="detail">
        <h3>${item.productName}</h3>
        <p>Amount: ${item.productPrice}</p>
        <button 
        onclick="removeFromCart(${i})"
        id="remove-item">Remove from cart</button>
    </div>
</div>
    `
})}

function removeFromCart(ind){
    let cartItemFromLocalStorage=JSON.parse(localStorage.getItem("cartItems"))
    cartItemFromLocalStorage.splice(ind,1)
    localStorage.setItem('cartItems',JSON.stringify(cartItemFromLocalStorage))
    location.reload()
}

function placeOrder(){
    localStorage.removeItem("cartItems")
    alert("Your Order is successfully places!!...")

}

{/* <div class="item">
    <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg">
    <div class="detail">
        <h3>Men Black Action Parkview Lifestyle Shoes</h3>
        <p>x1</p>
        <p>Amount: 6999</p>
    </div>
</div> */}