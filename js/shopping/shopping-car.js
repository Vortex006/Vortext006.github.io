$(document).ready(() => {

});

function car_clear() {
    alert("购物车已清空");
    $("#car").addClass("d-none");
    $("#nullcard").removeClass("d-none");
   
}
function  goto_index() {
    window.location.href = "./shopping-index.html";    
}

