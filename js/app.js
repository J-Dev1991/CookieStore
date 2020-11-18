(function() {
  const cartInfo = document.querySelector("#cart-info");
  const cart = document.querySelector("#cart");
  // show cart
  cartInfo.addEventListener("click", function() {
    cart.classList.toggle("show-cart");
  });
})();

(function() {
  let imageList = [];
    let imm = [];
    let cartItems = [];
  let counter = 0;
  const images = document.querySelectorAll(".store-img");
  const container = document.querySelector(".lightbox-container");
  const item = document.querySelector(".lightbox-item");
  const closeIcon = document.querySelector(".lightbox-close");
  const btnLeft = document.querySelector(".btnLeft");
  const btnRight = document.querySelector(".btnRight");
  const order = document.querySelector(".order")
  const formDisplay = document.querySelector(".form-container");
  const close = document.querySelector(".btnbtn");
  const btnconfirm = document.querySelector(".btnbtnconfirm");
  const message = document.querySelector(".message-container");
  const cake = document.querySelector(".cake");
    const cup = document.querySelector(".cupcakes");
    const sweet = document.querySelector(".sweets");
    const doughnuts = document.querySelector(".doughnut");
    const allBtn = document.querySelector(".all");

  const storeitems = document.querySelectorAll(".c");
  const s = document.querySelectorAll(".img-container");
const cc = document.querySelectorAll(".cc");
   const childstore = document.querySelectorAll(".store-item");
    const storeItems = document.querySelector("#store-items");
    const cookieBtn = document.querySelectorAll("#filter-btn");


    

  // add all images to the modal
//   console.log(cb);
    
    
    
  images.forEach(function(img) {
    imageList.push(img.src);
  });
    
//    
//    console.log(cupcakes);
    
    cc.forEach(function(im){
        imm.push(im.src);
        //console.log(imm);
    })
    
   
    //lets filter hour images to suit our expected result
                            
    function handleCake(){
          cake.addEventListener("click", function(){
              childstore.forEach(function(item){
                  item.classList.remove("hide");
                  if(item.classList.contains("cakes")){
                      item.classList.add("show");
                  }  else{
                      item.classList.add("hide");
                  }

              })
        })   
}
 handleCake();

    
        function handleCupcakes(){
          cup.addEventListener("click", function(){      
              childstore.forEach(function(item){
                   item.classList.remove("hide");
                  if(item.classList.contains("cupcakes")){
                      item.classList.add("show");
                  }  else{
                      item.classList.add("hide");
                  }
                 
              })
        })   
}
        handleCupcakes();
    
    
        function handleSweet(){
          sweet.addEventListener("click", function(){
              childstore.forEach(function(item){
                  item.classList.remove("hide");
                  if(item.classList.contains("sweets")){
                      item.classList.add("show");
                  }  else{
                      item.classList.add("hide");
                  }

              })
        })   
}

    handleSweet();
    
 function handleDoughnut(){
          doughnuts.addEventListener("click", function(){      
              childstore.forEach(function(item){
                   item.classList.remove("hide");
                  if(item.classList.contains("doughnuts")){
                      item.classList.add("show");
                  }  else{
                      item.classList.add("hide");
                  }
                 
              })
        })   
}
        handleDoughnut();
    
function handleAll(){
    allBtn.addEventListener("click", function(){
    childstore.forEach(function(item){
       item.classList.remove("hide");
        item.classList.add("show");
    })
    }) 
}

  //add event listener to open modal and show image
  images.forEach(function(img) {
    img.addEventListener("click", function(event) {
      // show modal
      container.classList.add("show");
      // get source
      let src = event.target.src;
      // change counter
      counter = imageList.indexOf(src);

      // show modal with image
      item.style.backgroundImage = `url(${src})`;
    });
  });
    
  // hide modal
  closeIcon.addEventListener("click", function() {
    container.classList.remove("show");
  });
  // loop back
  btnLeft.addEventListener("click", function() {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
  btnRight.addEventListener("click", function() {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
    
  order.addEventListener("click", function(){
       formDisplay.classList.add("show");
  })
    
    close.addEventListener("click", function() {
    formDisplay.classList.remove("show");
  })
    
    btnconfirm.addEventListener("click", function(){
        formDisplay.classList.remove("show");
          message.classList.add("show");
            
        function hey(){
             message.classList.remove("show");
        }
         setInterval(hey, 9000);
                
    })
    
    
  
})();