function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) 
    
    /*Error Message*/
    {
      if(res instanceof Error) {
        alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
      } 
      
      else {
        node.parentNode.previousElementSibling.value = res;
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

/*Camera Prompt*/
function showQRIntro() {
  return confirm("Use your camera to take a picture of a QR code.");
}

// /*Go Button*/
// $("#btn").click( function() {
//     var url = "http://www.autoatlas.us/dealer/" + $("#text").val();
//     window.open(url);
// });