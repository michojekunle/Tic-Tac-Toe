var turn = 1;

$('button').click(function() {
    if (turn == 1){
        //
        $('#screen').text('PLAYER 2 TURN FOLLOWS..');

        //
        $(this).addClass('fa fa-check');
        turn = 2;
        $(this).prop('disabled', true);

    } else {
        //
        $('#screen').text('PLAYER 1 TURN FOLLOWS..');

        //
        $(this).addClass('fa fa-times');
        $(this).prop('disabled', true);
        turn = 1;
    }

    if($(this).hasClass('fa fa-times') || $(this).hasClass('fa fa-check')){
        
        $(this).css('background-color', '#fc0fc0');
        $(this).css('color', '#fff');
        
        setTimeout(() => {
            $(this).css('background-color', '#fff');
            $(this).css('color', '#000');
        }, 500); 
    }
    checkWinner();
});

function check(symbol) {
    if ($('.sq1').hasClass(symbol) && 
        $('.sq2').hasClass(symbol) &&
        $('.sq3').hasClass(symbol)) {
            $('.sq1').css('color', 'green')
            $('.sq2').css('color', 'green')
            $('.sq3').css('color', 'green')
        return true;
    } else if ($('.sq4').hasClass(symbol) && 
                $('.sq5').hasClass(symbol) &&
                $('.sq6').hasClass(symbol)) {
                    $('.sq4').css('color', 'green')
                    $('.sq5').css('color', 'green')
                    $('.sq6').css('color', 'green')
                return true;
    }  else if ($('.sq7').hasClass(symbol) && 
                $('.sq8').hasClass(symbol) &&
                $('.sq9').hasClass(symbol)) {
                    $('.sq7').css('color', 'green')
                    $('.sq8').css('color', 'green')
                    $('.sq9').css('color', 'green')
                return true;
    } else if ($('.sq1').hasClass(symbol) && 
                $('.sq4').hasClass(symbol) &&
                $('.sq7').hasClass(symbol)) {
                    $('.sq1').css('color', 'green')
                    $('.sq4').css('color', 'green')
                    $('.sq7').css('color', 'green')
                return true;
    } else if ($('.sq2').hasClass(symbol) && 
                $('.sq5').hasClass(symbol) &&
                $('.sq8').hasClass(symbol)) {
                    $('.sq2').css('color', 'green')
                    $('.sq5').css('color', 'green')
                    $('.sq8').css('color', 'green')
                return true;
    } else if ($('.sq3').hasClass(symbol) && 
                $('.sq6').hasClass(symbol) &&
                $('.sq9').hasClass(symbol)) {
                    $('.sq3').css('color', 'green')
                    $('.sq6').css('color', 'green')
                    $('.sq9').css('color', 'green')
                return true;
    } else if ($('.sq1').hasClass(symbol) && 
                $('.sq5').hasClass(symbol) &&
                $('.sq9').hasClass(symbol)) {
                    $('.sq1').css('color', 'green')
                    $('.sq5').css('color', 'green')
                    $('.sq9').css('color', 'green')
                return true;
    } else if ($('.sq3').hasClass(symbol) && 
                $('.sq5').hasClass(symbol) &&
                $('.sq7').hasClass(symbol)) {
                    $('.sq3').css('color', 'green')
                    $('.sq5').css('color', 'green')
                    $('.sq7').css('color', 'green')
                return true;
    }
}




function checkWinner() {
    if (check('fa fa-times')){
        $('#screen').text('PLAYER 2 WINS...');
        setTimeout(() => {
            reset()
        }, 2000);
    }

    if (check('fa fa-check')) {
        $('#screen').text('PLAYER 1 WINS...');
        setTimeout(() => {
            reset()
        }, 8000);
    }
}

function reset() {
    //resume the turn of the first player
    $('#screen').text('PLAYER 1 TURN FOLLOWS...');
    turn = 1;
    
    //remove all icons displayed
    $('.r').removeClass('fa fa-times');
    $('.r').removeClass('fa fa-check');
    $('.r').prop('disabled', false);



    //Reset all buttons Color
    $('.sqr1').css('color', '#000');
    $('.sqr2').css('color', '#000');
    $('.sqr3').css('color', '#000');
    $('.sqr4').css('color', '#000');
    $('.sqr5').css('color', '#000');
    $('.sqr6').css('color', '#000');
    $('.sqr7').css('color', '#000');
    $('.sqr8').css('color', '#000');
    $('.sqr9').css('color', '#000');
}


