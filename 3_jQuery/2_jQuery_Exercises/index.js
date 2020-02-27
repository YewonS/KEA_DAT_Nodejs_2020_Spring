//1
//$('body').css('text-align', 'center')

// 2
$('#title h2').html(`New title`)

// 3
$('.subtitle-box').css('background-color', 'coral')

//4
$('.temp').css('display', 'none')

// 5
// $('.reason').css('border-style', 'dashed')

// 6
$('ol li').css('font-weight', 'bold')

// 7
$('#first-list li:last').css('text-decoration', 'underline')

// 8  eq(1) -> 0-based indexing. element que / nth-child(2) -> access only the nth child. counts from 1
$('#first-list li:nth-child(2)').css('text-decoration', 'line-through')

// 9
$('.second-list').children().css('font-style', 'italic')

// 10
$('span').css('font-size', '0.7em')

// 11
$('.unused-box').children().first().remove()

// 12
$('.unused-box').html(`<p class="second-sentence">Second Sentence</p>`)

// 13
$('.second-sentence').prepend(`<p>First Sentence</p>`)

// 14
$('.unused-box').attr('class', 'used-box')

// 15
$(document).ready(() => { // it's nice to have event handlers inside this
    
    $('.used-box').click(function() {
        $(this).toggleClass('used-boxed-clicked')
    })

    // Radu's solution
    // $('.used-box').click(event => {
    //     $(event.currentTarget).toggleClass('used-boxed-clicked')
    // })

    // 16
    $('button').mouseenter(() => {
        $('button').text(`You're ready to click now.`)
    })
    $('button').mouseout(() => {
        $('button').text(`Click`)
    })

    // 17 -18
    let count = 4
    $('button').on('click', () => {
        $('ol li:last').append(`<li>Reason ${count}</li>`)
        count += 1
        console.log($(this).parent())
    })



    // 21
    $('.reason').mouseenter(function () {
        $(this).css({border: '0 solid #f37736'}).animate({
            borderWidth: 4
        }, 500);
    }).mouseleave(function () {
         $(this).animate({
            borderWidth: 0
        }, 500);
    });
}) 


// 22
$('h2').css({
    "display": "flex",
    "justify-content": "center"
})

$('.first-list').css({
    "display": "inline-block",
    "justify-content": "flex-start"
})

$('.second-list').css({
    "justify-content": "flex-end"
})

$('button').css({
    "justify-content": "end"
})
