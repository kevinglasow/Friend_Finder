$("#submit").on("click", function (event) {

    var newProfile = {
        name: $("#inputEmail").val().trim(),
        email: $("#photoURL").val().trim(),
        [
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

    $.post("/api/friends", newProfile,
        function (data) {

            // Clear the form when submitting
            $("#inputEmail").val("");
            $("#photoURL").val("");
            $("#questionOne").val("");
            $("#questionTwo").val("");
            $("#questionThree").val("");
            $("#questionFour").val("");
            $("#questionFive").val("");
            $("#questionSix").val("");
            $("#questionSeven").val("");
            $("#questionEight").val("");
            $("#questionNine").val("");
            $("#questionTen").val("");
        });

});