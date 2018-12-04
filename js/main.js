$(window).on("load", () => {
    $("#header").load("parts/header.html");
    $("#main").load("page/home/index.html#main")
    $("#footer").load("parts/footer.html");
});

$(function () {
    $(".join").on("click", function () {
        $("#main").load("page/join/index.html#main");
        history.pushState("join", "", "/page/join/");
    });
    $(".servers").on("click", function () {
        $("#main").load("page/servers/index.html#main");
        history.pushState("servers", "", "/page/servers/");
    });
});


