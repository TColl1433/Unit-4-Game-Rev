

// Global variables
var randomResult;
var lose = 0;
var win = 0;
var previous = 0;

//setters  below we are giving the crystal property a class
// $(".crystal").attr('class', 'red');
//getters


//created a function telling the browser to reset the game & start the game when page is refreshed
var resetAndStart = function () {


    //
    $(".crystals").empty();

    var images = ["assets/images/crystal1.svg",
        "assets/images/crystal2.svg",
        "assets/images/crystal3.svg",
        "assets/images/crystal4.svg"
    ]

    //this gets the result of the random value; randomly choosing a number from 0-69 but will not go below 30 because of "+30"
    random_result = Math.floor(Math.random() * 69) + 30;


    //displays the random result in the browser
    $("#result").html('Match this Number: ' + random_result);

    for (var i = 0; i < 4; i++) {


        //this line sets the random number for the crystals
        var random = Math.floor(Math.random() * 11) + 1;


        //this is creating a new div for each crystal
        var crystal = $("<div>");

        //.attr accesses the div created above and sets the attribrutes to the div
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        //this is setting the url to the image file from the array.
        crystal.css({
            "background-image": "url('" + images[i] + "')",

        })



        //crystal.html(random)
        //this inserts the new div to the crystals div
        $(".crystals").append(crystal);


    }

    //this adds the the hidden number of the crystal to the previous number after the crystal is clicked
    $("#previous").html("Total Score: " + previous);

}



resetAndStart();



// event delegation
$(document).on('click', ".crystal", function () {

    //turning this into a number
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);




    //setting conditionals: if previous number is greater than the random result Losses will display as 1 and will keep incrementing each time you lose.

    if (previous > random_result) {
        lose++;

        $("#lose").html("Losses: " + lose);

        previous = 0;

        resetAndStart();
    }
    //if the previous number equals the random result the the wins will increment by 1.   
    else if (previous === random_result) {
        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();

    }


});

// Crystals Collector game

// A random number is set each time the page is refreshed. 
// Each crystal will contain a random hidden number of 1 - 12.

// When clicking on a  crystal, its random number is displayed in the browser to the right of total score. 
// The numbers generated by the crystals add up and
// if it is equal, the win counter is incremented by 1
// if it surpasses the total random number the losses counter is incremented by 1



