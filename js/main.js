function home() {
    $("#main").load("contents/home.html");
};
function join() {
    $("#main").load("contents/join.html");
};
function servers() {
    $("#main").load("contents/servers.html");
};

$(window).on("load", function () {
    $("#header").load("parts/header.html");
    home();
    $("#footer").load("parts/footer.html");
});

$(window).on("popstate", function(e) {
    let state = e.originalEvent.state;
    console.log(state);
    if (state === "home") {
        home();
    } else if (state === "join") {
        join();
    } else if (state === "servers") {
        servers();
    } else {
        home();
    }
});

$(function () {
    $(".home").on("click", function () {
        home();
        history.pushState("home", "", "?home");
    });
    $(".join").on("click", function () {
        join();
        history.pushState("join", "", "?join");
    });
    $(".servers").on("click", function () {
        servers();
        history.pushState("servers", "", "?servers");
    });
});


