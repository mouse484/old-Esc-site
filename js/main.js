$(window).on("load", function () {
    $("#header").load("parts/header.html");
    $("#main").load("contents/home.html");
    $("#footer").load("parts/footer.html");
});

$(function () {
    $(".home").on("click", function() {
        $("#main").load("contents/home.html")
    });
    $(".join").on("click", function () {
        $("#main").load("contents/join.html")
    });
    $(".servers").on("click", function () {
        $("#main").load("contents/servers.html")
    });
});


