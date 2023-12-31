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



const main = () => {
	const body = document.querySelector('.body');
  
  const showPage = () => {
    setTimeout(() => {
      body.classList.remove('loading');
    }, 15000000)
  }
  
  showPage();
}

window.addEventListener('load', main);



const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */

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
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// // If you want to prefer front camera
// html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// // If you want to prefer back camera
// html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// // Select front camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);







// // Initialize the scanner
// const scanner = new Html5QrcodeScanner(
//   "camera",
//   {
//     fps: 10, // Frame rate
//     qrbox: 250, // QR code box size
//     quietZone: 1, // Quiet zone around the QR code
//   },
//   /* Optional errorCallback */
//   function (error) {
//     console.log(error);
//   }
// );

// let redirectionOccured = false; // Flag to track redirection
// // const qrCodeSuccessCallback = (decodedText, decodedResult) => {
// //   /* handle success */
// // };
// // Start the scanning process
// const qrCodeSuccessCallback = scanner.render((decodedText, decodedResult) => {
//   console.log(`QR code scanned: ${decodedText}`);

//   // Redirect only if redirection hasn't occurred
//   if (!redirectionOccured) {
//     redirectionOccured = true; // Set flag to true to prevent further redirections

//     // Extract URL from the scan result
//     const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];

//     // Redirect to the scanned URL
//     window.location.href = url;

//     // Stop the scanner after redirection
//     scanner.stop();
//   }
// });

// scanner.start({ facingMode: { exact: "environment"} }, scanner, qrCodeSuccessCallback);
// // Check if device supports camera
// if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//   scanMessage.innerHTML = "Camera access not supported!";
// }