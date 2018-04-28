$(function () {

    var friends = $.get("/api/friends");
    friends.then(function (data) {
        friends = data
        console.log(friends)
    })


    $("#submit").on("click", function (event) {
        event.preventDefault()
        if (friends.length) {
            var newProfile = {
                name: $("#inputEmail").val().trim(),
                email: $("#photoURL").val().trim(),
                answers: [
                    $("#questionOne").val(),
                    $("#questionTwo").val(),
                    $("#questionThree").val(),
                    $("#questionFour").val(),
                    $("#questionFive").val(),
                    $("#questionSix").val(),
                    $("#questionSeven").val(),
                    $("#questionEight").val(),
                    $("#questionNine").val(),
                    $("#questionTen").val()
                ]
            }
        }

        // console.log(newProfile);
        var match = arrayLoop(friends, newProfile)
        console.log(match)
        $.post("/api/friends", newProfile, function (data) {
            alert("Added!!")
        })

        // function (data) {

        //     // Clear the form when submitting
        //     $("#inputEmail").val("");
        //     $("#photoURL").val("");
        //     $("#questionOne").val("");
        //     $("#questionTwo").val("");
        //     $("#questionThree").val("");
        //     $("#questionFour").val("");
        //     $("#questionFive").val("");
        //     $("#questionSix").val("");
        //     $("#questionSeven").val("");
        //     $("#questionEight").val("");
        //     $("#questionNine").val("");
        //     $("#questionTen").val("");
        // }
    });

    var arrayLoop = function (friends, newProfile) {
        var total = 0
        var totalLoop = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        friends.forEach(function (friend) {
            console.log(friend)
            var checkArray = friendMatch(friend.answers, newProfile.answers)
            var total = checkArray.reduce(reducer)
            totalLoop.push(total)
        })
        var lowest = totalLoop[0]
        for (var i = 0; i < totalLoop.length; i++) {
            if (totalLoop[i] < lowest) {
                lowest = totalLoop[i]
            }
        }
        var match = friends.indexOf(totalLoop.indexOf(lowest))
        return(match)
    }



    var friendMatch = function (array1, array2) {

        var array3 = [];
        
        for (var i = 0; i < array1.length; i++)
            array3.push(Math.abs(array1[i] - array2[i]))

        return (array3)
    }
})

// Psudocode for comparing users
// Create a loop to go through friends.json
// For each object in the array compare the answers key with the same key in newProfile
// Find the difference between each location in the array
// Total the difference and store in a variable
// Find the friends object that relates to the smallest difference number - logic for ties?
// Display that data to the user in a modal