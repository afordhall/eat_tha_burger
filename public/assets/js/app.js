$("#addburger").on("click", function () {

    var newBurger = {
        burger_name: $("#burger").val()
    }

    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: newBurger
    }).then(function (data) {
        location.reload()
    })
})


$(".update").on("click", function () {
     var id = $(this).attr("data-id")
     
    $.ajax({
        url: "/api/burger/"+id,
        method: "PUT"
    }).then(function (data) {
        location.reload()
    })
})