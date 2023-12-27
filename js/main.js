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






// Include the html5-qrcode library
// const Html5QrcodeScanner = require("html5-qrcode");




// Initialize the scanner
const scanner = new Html5QrcodeScanner(
  "camera",
  {
    fps: 10, // Frame rate
    qrbox: 250, // QR code box size
    quietZone: 1, // Quiet zone around the QR code
  }
);

// Display scan message before scan
const scanMessage = document.getElementById("scan-message");

// Listen for scan success event



function startScan() {
  // Your scanning logic here
  // For instance, using Html5QrcodeScanner
  // Simulating a scanning action
  scanner.render(async (decodedText, decodedResult) => {
    // scanMessage.innerHTML = `QR code scanned: ${decodedText}`  ;
    // Extract URL from the scan result
    const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];
    // Redirect to the scanned URL
    window.location.replace(url); 
  });

  // Pause execution for 1 second (1000 milliseconds)
  setTimeout(function() {
    // Resume execution after 1 second
    console.log("Scan completed after 1 second.");
    // Continue with the rest of your scanning logic here
  }, 1000);
}

// Call the function to start the scanning process
startScan()



// Check if device supports camera
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  scanMessage.innerHTML = "Camera access not supported!";
}
