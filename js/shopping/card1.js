function get() {
    var arr = $("#money label");
    arr = Array.from(arr);
    var card1 = {
        title:undefined,
        body:[]
    };
    card1.title = $("#card-title").text();

    arr.forEach(element => {
        if ($(element).is(".active")) {
            var child = $(element).children("span");
            var text = child.attr("value1");
            var num = child.attr("value2");
            var temp = {
                text:text,
                money:num
            };
            card1.body.push(temp);
        }
    });

    $("#modal-body").html("<p>您购买的商品如下：</p><p class='text-danger'>"+card1.title+"</P>");
    if(card1.body.length != 0){
        var sum = 0;
        card1.body.forEach(element => {
            $("#modal-body").append("<p>"+element.text+"  ：  "+element.money+"元</P>")
            sum += parseInt(element.money);
        });
        $("#modal-body").append("<p class='text-danger font-weight-bolder'>共计"+card1.body.length+"件物品，花费"+sum+"元</P>")
    }
    $("#Buy-Succes").modal();
}

function  goCar() {
    window.location.href = "./shopping-car.html" 
}