$("#submit").on("click", function (event) {
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
    };

    console.log(newProfile);

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

// Psudocode for comparing users
// Create a loop to go through friends.json
// For each object in the array compare the answers key with the same key in newProfile
// Find the difference between each location in the array
// Total the difference and store in a variable
// Find the friends object that relates to the smallest difference number - logic for ties?
// Display that data to the user in a modal