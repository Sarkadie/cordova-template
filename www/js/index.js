
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // use plugins here

    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI

    }

    $("#takePhoto").on("click", takePic);
    
    function takePic() {
        navigator.camera.getPicture(onSuccess, onError, options);
    }

    function onSuccess(imageData) { //imageData is the photo taken
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $("header").after("<img src='" + myNewImage + "'>") //concatenation html || everything inside the double quotes is what's added
        }, onError);

    }
    function onError(message) {
        alert("Photo not taken because " + message)
    }

}









// //https://www.w3schools.com/howto/howto_js_image_grid.asp
// var elements = document.getElementsByClassName("column");

// // Declare a loop variable
// var i;

// // Full-width images
// function one() {
//     for (i = 0; i < elements.length; i++) {
//     elements[i].style.msFlex = "100%";  // IE10
//     elements[i].style.flex = "100%";
//   }
// }

// // Two images side by side
// function two() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.msFlex = "50%";  // IE10
//     elements[i].style.flex = "50%";
//   }
// }

// // Four images side by side
// function four() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.msFlex = "25%";  // IE10
//     elements[i].style.flex = "25%";
//   }
// }

// // Add active class to the current button (highlight it)
// var header = document.getElementById("myHeader");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
