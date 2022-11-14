
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
            $("#takePhoto").after("<img src='" + myNewImage + "'>") //concatenation html || everything inside the double quotes is what's added
        }, onError);

    }
    function onError(message) {
        alert("Photo not taken because " + message)
    }

}

