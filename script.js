var div1=document.querySelectorAll(".div1 p")
var div2=document.querySelector(".div2")
var div3=document.querySelector(".div3")
var total=0 
div1.forEach(function(item){
    item.onclick=function(){
        total+= +(item.getAttribute("price"))
        div2.innerHTML+= item.textContent+"&&"
        div3.innerHTML="Total Price= " + total + " L.E"
    }
})
