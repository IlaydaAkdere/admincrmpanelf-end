// function hexToRgb(hex) {
//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16)
//     } : null;
// }

// $("#tema").on("input", function () {
//     var secilen = $("#tema").val();
//     const { r, g, b } = hexToRgb(secilen);
//     $(".inv-option-item").css("background-color", "rgb(" + r + ", " + g + "," + b + ")");
// });
// $("#tema").on("change", function () {
//     var secilen = $("#tema").val();
//     $(".inv-option-item").css("background-color", secilen);
// });

// customer login page

function validateForm() {

    var sifre = document.getElementById("sifre").value;
    if (sifre.length < 6) {
        alert("Şifre en az 6 karakter olmalıdır.");
        return false;
    }



    return true;
}