$(document).ready(function () {

    var counter = 0;
    var wins = 0;
    var losses = 0;

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    var resetRandomNumber = function() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $('#number').text(randomNumber);
    }
    $('#number').text(randomNumber);

    var crys1Val = Math.floor(Math.random() * 12) + 1;
    var crys2Val = Math.floor(Math.random() * 12) + 1;
    var crys3Val = Math.floor(Math.random() * 12) + 1;
    var crys4Val = Math.floor(Math.random() * 12) + 1;

    var imageCrystal_1 = $('<img>');
    imageCrystal_1.attr('data-val', crys1Val);
    imageCrystal_1.attr('id', crys1Val);
    imageCrystal_1.attr('src', 'assets/images/1.png');
    imageCrystal_1.attr('width', '100px');
    imageCrystal_1.addClass('crystalImg');
    $('#crystalDiv').append(imageCrystal_1);

    var imageCrystal_2 = $('<img>');
    imageCrystal_2.attr('data-val', crys2Val);
    imageCrystal_2.attr('src', 'assets/images/2.png');
    imageCrystal_2.attr('width', '100px');
    imageCrystal_2.addClass('crystalImg');
    $('#crystalDiv').append(imageCrystal_2);

    var imageCrystal_3 = $('<img>');
    imageCrystal_3.attr('data-val', crys3Val);
    imageCrystal_3.attr('src', 'assets/images/3.png');
    imageCrystal_3.attr('width', '100px');
    imageCrystal_3.addClass('crystalImg');
    $('#crystalDiv').append(imageCrystal_3);

    var imageCrystal_4 = $('<img>');
    imageCrystal_4.attr('data-val', crys4Val);
    imageCrystal_4.attr('src', 'assets/images/4.png');
    imageCrystal_4.attr('width', '100px');
    imageCrystal_4.addClass('crystalImg');
    $('#crystalDiv').append(imageCrystal_4);


    $('.crystalImg').on('click', function () {
        counter = counter + parseInt($(this).data('val'));

        $('#yourNumber').text(counter);

        if (counter == randomNumber) {
            alert('You won!!!!');
            wins++;
            $('#winDiv').html(wins);
            counter = 0;
            $('#yourNumber').text(counter);
            resetRandomNumber();
        } else if (counter > randomNumber) {
            alert('You lost!');
            losses++;
            $('#lossDiv').html(losses);
            counter = 0;
            $('#yourNumber').text(counter);
            resetRandomNumber();
        }
    });

});