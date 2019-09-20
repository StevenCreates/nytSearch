$(document).ready(function () {

    var search;
    var howMany;
    var start_date;
    var end_date;
    var apiKey = "X4A9S1tSBoL0XwXPodNOey1PUK4qmCcA";
    var queryURL;

    //captured values
    $(".searchbut").click(function (e) {
        e.preventDefault();
        search = $("#Search").val();
        howMany = $(".howMany").val();
        end = $(".end").val();
        start = $(".start").val();
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +"&"+ start_date +"&"+ end_date +"&api-key=" + apiKey;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    });



})