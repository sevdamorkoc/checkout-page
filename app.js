console.log("app js baglandı")
const kdvUcreti = 0.18;
const kargoUcreti = 15;
const kargoBedavaUcret =300;


window.addEventListener("load", ( ) => {
    localStorage.setItem("kdvUcreti","kdv");
    localStorage.setItem("kargoUcreti","kargo");
    localStorage.setItem("kargoBedavaUcret","bedava");


    sessionStorage.setItem("kdvUcreti","kdv");
    sessionStorage.setItem("kargoUcreti","kargo");
    sessionStorage.setItem("kargoBedavaUcret","bedava");
});

//
const productsDiv = document.querySelector(".products")
 productsDiv.addEventListener("click", (event) =>{
   // console.log(event);
   if(event.target.className == "fa-solid fa-minus") {
    // console.log("eksi butonu çalışıyor");
    event.target.parentElement.querySelector(".quantity").innerText--;{
        if(event.target.parentElement.querySelector(".quantity").innerText>1){
        event.target.parentElement.querySelector(".quantity").innerText--;
        ürünFiyatıHesap(event.target)
        }else {
            alert("artık silme");
        }
    }
    
    
}
else if(event.target.className == "fa-solid fa-plus") {
    // console.log("artı butonu çalışıyor");
    //console.log(event.target.previousElementSibling.innerText)
    event.target.previousElementSibling.innerText++;
    ürünFiyatıHesap(event.target)
}
else if (event.target.classList.contains("remove-product")){
    // console.log("remove btn basıldı");
    event.target.closest(".product").remove()
}
 });
 const ürünFiyatıHesap = (button) => {
    const productInfoDiv = button.parentElement.parentElement
    // console.log()
    const ürünFiyatı =  productInfoDiv.querySelector(".product-price strong").innerText;
    const adet = productInfoDiv.querySelector(".quantity").innerText;
    const toplamÜrünFiyatı = productInfoDiv.querySelector(".product-line-price");
    toplamÜrünFiyatı.innerText = (ürünFiyatı * adet)
  };