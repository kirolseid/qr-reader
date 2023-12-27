// function showoverview(){
//   $("#overview").css("display","block");
//   $(".cover").css("display","block");
// }




// function hide(){
//   $("#overview").css("display","none");
//   $("#qrscanner").css("display","none");

//   $(".cover").css("display","none");
// }


// function showqrscanner(){
//   $("#overview").css("display","none");
//   $("#qrscanner").css("display","block");
// }




// Initialize the scanner
const scanner = new Html5QrcodeScanner(
  "camera",
  {
    fps: 10, // Frame rate
    qrbox: 250, // QR code box size
    quietZone: 1, // Quiet zone around the QR code
  },
  /* Optional errorCallback */
  function (error) {
    console.log(error);
  }
);

let redirectionOccured = false; // Flag to track redirection

// Start the scanning process
scanner.render((decodedText, decodedResult) => {
  console.log(`QR code scanned: ${decodedText}`);

  // Redirect only if redirection hasn't occurred
  if (!redirectionOccured) {
    redirectionOccured = true; // Set flag to true to prevent further redirections

    // Extract URL from the scan result
    const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];

    // Redirect to the scanned URL
    window.location.href = url;

    // Stop the scanner after redirection
    scanner.stop();
  }
});
// Check if device supports camera
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  scanMessage.innerHTML = "Camera access not supported!";
}