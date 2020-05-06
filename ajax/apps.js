
$(document).ready(function () {
    showFoodMenu();
});

function showFoodMenu() {

    $.ajax({
        type: "GET",
        url: "menu.xml",
        dataType: "xml",
        success: function (response) {

            $("ul").children().remove();

            $(response).find("food").each(function () {
                var _name = 'Název: ' + $(this).find('name').text();
                console.log(_name);
                
                var _price = 'Cena: ' + $(this).find('price').text();
                var _calories = 'Kalorie: ' + $(this).find('calories').text();
                var _description = 'Popis: ' + $(this).find('description').text();

                // add content to the HTML          
                $("ul").append('<li>' + _name + '</li>');
                $("ul").append('<li>' + _price + '</li>');
                $("ul").append('<li>' + _calories + '</li>');
                $("ul").append('<li>' + _description + '</li>');
            });
        }
    });
}