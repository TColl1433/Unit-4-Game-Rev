

// Global variables
var randomResult;
var lose = 0;
var win = 0;
var previous = 0;

//setters  below we are giving the crystal property a class
// $(".crystal").attr('class', 'red');
//getters



var resetAndStart = function () {

    $(".crystals").empty();

    var images = ["assets/images/crystal1.svg",
        "assets/images/crystal2.svg",
        "assets/images/crystal3.svg",
        "assets/images/crystal4.svg"
    ]

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Match this Number: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",

        })

        //crystal.html(random)

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}



resetAndStart();



// event delegation
$(document).on('click', ".crystal", function () {

    //turning this into a number
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);



    if (previous > random_result) {
        lose++;

        $("#lose").html("Losses: " + lose);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {
        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();

    }

    //console.log(previous)

});

// Crystals Collector game

// a game with 4 crystals and random results
// every crystal needs to have a random number from 1 to 12

// when clicking any crystal, it should add to the previous result until it equals the random result
// if it is greater than the random result then we decrement the loss counter
// if it is equal, then we increment a win counter
// A new number should be generated everytime we start over



