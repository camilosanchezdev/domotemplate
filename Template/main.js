
var cardCount = 1;
let arrCards = ["card1", "card2", "card3", "card4"];
let clientCards = ["client1", "client2", "client3", "client4", "client5", "client6", "client7", "client8", "client9", "client10"];
var clientCount = 1;
if(cardCount == 1){
    document.getElementById("btn-down").disabled = true;
}
$(document).ready(() =>{
    $("#btn-up").click(() =>{
        cardCount++;
       showCardsUp(arrCards[cardCount - 1]);
  
    //    $("#card2").fadeIn("slow");
        if(cardCount != 1){
            document.getElementById("btn-down").disabled = false;
        }
        if(cardCount < 5){
            document.getElementById("numberCard").innerHTML = cardCount;
        }
        if(cardCount == 4){
            document.getElementById("btn-up").disabled = true;
        }
    });
    $("#btn-down").click(() =>{
        cardCount--;
       showCardsDown(arrCards[cardCount - 1]);
  
    if(cardCount < 4){
        document.getElementById("btn-up").disabled = false;
    }
    if(cardCount == 1){
        document.getElementById("btn-down").disabled = true;
    }
    if(cardCount > 0){
        document.getElementById("numberCard").innerHTML = cardCount;
    }
    });
// SECTION 4 CARDS
$("#nextcard").click(() =>{
    if(clientCount < 6){
        cardCarousel(clientCount - 1);
        // document.getElementById(clientCards[clientCount - 1]).style.display = "none";

        // document.getElementById(clientCards[4 + clientCount]).style.display = "flex";
        clientCount++;
        document.getElementById("prevcard").disabled = false;
    }
    else{
        document.getElementById("nextcard").disabled = true;
    }


});
$("#prevcard").click(() =>{
    if(clientCount > 1){
        cardCarouselBack(clientCount - 1);
        clientCount--;
        // document.getElementById(clientCards[4 + clientCount]).style.display = "none";

        // document.getElementById(clientCards[clientCount - 1]).style.display = "flex";
        document.getElementById("nextcard").disabled = false;
    }
    else{
        document.getElementById("prevcard").disabled = true;
    }
});
//   end jquery
});



function showCardsUp(card){
    switch(card){
        case "card2":
            $("#card1").fadeOut();
            $("#card2").fadeIn("slow").css("display", "flex");
        break;
        case "card3":
            $("#card2").fadeOut();
            $("#card3").fadeIn("slow").css("display", "flex");
        break;
        case "card4":
            $("#card3").fadeOut();
            $("#card4").fadeIn("slow").css("display", "flex");
        break;
    }
}
function showCardsDown(card){
    switch(card){
        case "card1":
            $("#card2").fadeOut();
            $("#card1").fadeIn("slow").css("display", "flex");
        break;
        case "card2":
            $("#card3").fadeOut();
            $("#card2").fadeIn("slow").css("display", "flex");
        break;
        case "card3":
            $("#card4").fadeOut();
            $("#card3").fadeIn("slow").css("display", "flex");
        break;
    }
}
function cardCarousel(number){
    
    $("#" + clientCards[number]).fadeOut("slow");
    $("#" + clientCards[5 + number]).fadeIn("slow").css("display", "flex");
}
function cardCarouselBack(number){
    
    $("#" + clientCards[5 + number]).fadeOut("slow");
    $("#" + clientCards[number - 1]).fadeIn("slow").css("display", "flex");
}

function closeNav() {

    document.getElementById("mySidebar").style.transform = "translateX(-450px)";
    document.getElementById("login").style.transform = "translateX(-450px)";


  }
  function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("mySidebar").style.transform = "translateX(0px)";
    document.getElementById("login").style.transform = "translateX(0px)";
  }