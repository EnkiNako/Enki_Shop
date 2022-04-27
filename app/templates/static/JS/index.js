window.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".btn").forEach(function(el){
        el.addEventListener("click", function(){
            var products = document.querySelector(".products");
            if(products.getAttribute("data-hidden")){
                products.removeAttribute("data-hidden")
            }else{
                products.setAttribute("data-hidden", true);
            }
        })
    });
});