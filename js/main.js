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



// const main = () => {
// 	const body = document.querySelector('.body');
  
//   const showPage = () => {
//     setTimeout(() => {
//       body.classList.remove('loading');
//     }, 15000000)
//   }
  
//   showPage();
// }

// window.addEventListener('load', main);



// const html5QrCode = new Html5Qrcode("reader");
// const qrCodeSuccessCallback = (decodedText, decodedResult) => {
//     /* handle success */

//     console.log(`QR code scanned: ${decodedText}`);

//   // Redirect only if redirection hasn't occurred
//   if (!redirectionOccured) {
//     redirectionOccured = true; // Set flag to true to prevent further redirections

//     // Extract URL from the scan result
//     const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];

//     // Redirect to the scanned URL
//     window.location.href = url;

//     // Stop the scanner after redirection
//     html5QrCode.stop();
//   }
// };
// const config = { fps: 10, qrbox: { width: 250, height: 250 } };


// function startScan(){
//   html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
// }







// // Initialize the scanner
// const scanner = new Html5QrcodeScanner(
  
//   "camera",
//   {
//     exact: "environment",
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

// // Start the scanning process
// scanner.render((decodedText, decodedResult) => {
//   console.log(`QR code scanned: ${decodedText}`);

//   // Redirect only if redirection hasn't occurred
//   if (!redirectionOccured) {
//     redirectionOccured = true; // Set flag to true to prevent further redirections
//     const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];
//     window.location.href = url;
//     scanner.stop();
//   }
// });
// // Check if device supports camera
// if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//   scanMessage.innerHTML = "Camera access not supported!";
// }




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






const html5QrCode = new Html5Qrcode("reader");
// const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
    const qrCodeSuccessCallback = html5QrCode.render((decodedText, decodedResult) => {
      console.log(`QR code scanned: ${decodedText}`);
    
      // Redirect only if redirection hasn't occurred
      if (!redirectionOccured) {
        redirectionOccured = true; // Set flag to true to prevent further redirections
        const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];
        window.location.href = url;
        scanner.stop();
      }
    });
// };
const config = { fps: 10, qrbox: { width: 250, height: 250 } ,quietZone: 1,};

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
