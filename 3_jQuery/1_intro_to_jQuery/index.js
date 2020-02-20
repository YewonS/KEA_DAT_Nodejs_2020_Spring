// console.log($); // $ -> jQuery

$("#teleport-btn").click(() => {

    let inputRight = $(".input-right");
    let inputLeft = $(".input-left");

    if (inputLeft.val() != "") {
        inputRight.val(inputLeft.val());
        inputLeft.val("")
    } else if (inputRight.val() != ""){
        inputLeft.val(inputRight.val());
        inputRight.val("")
    } else {
        alert("Please write something to teleport.")
    }
    
    // Radu's solution
    // const temp = $('.input-right').val();
    // $('.input-right').val($('.input-left').val());
    // $('.input-left').val(temp);

})