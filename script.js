
var count = 0;

var annualy = {
    basic: "199.99",
    professional: "249.99",
    master: "399.99",
}

var monthly = {
    basic: "19.99",
    professional: "24.99",
    master: "39.99",
}
$(".basic").text(annualy.basic);
$(".professional").text(annualy.professional);
$(".master").text(annualy.master);

$(function () {
    $(".slider").click(function(){
        if(count===1){
            $(".basic").text(annualy.basic);
            $(".professional").text(annualy.professional);
            $(".master").text(annualy.master);
            count=0;
        }else{
            $(".basic").text(monthly.basic);
            $(".professional").text(monthly.professional);
            $(".master").text(monthly.master);
            count =1;
        }

    });
});