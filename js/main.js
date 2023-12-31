// script.js file

// function domReady(fn) {
// 	if (
// 		document.readyState === "complete" ||
// 		document.readyState === "interactive"
// 	) {
// 		setTimeout(fn, 1000);
// 	} else {
// 		document.addEventListener("DOMContentLoaded", fn);
// 	}
// }

// domReady(function () {

// 	// If found you qr code
// 	function onScanSuccess(decodeText, decodeResult) {
// 		alert("You Qr is : " + decodeText, decodeResult);
// 	}

// 	let htmlscanner = new Html5QrcodeScanner(
// 		"my-qr-reader",
// 		{ fps: 10, qrbos: 250 }
// 	);
//   htmlscanner.start({ facingMode: "environment" });

// 	htmlscanner.render(onScanSuccess);
// });



// function onScanSuccess(decodedText, decodedResult) {
//   // handle the scanned code as you like, for example:
// 		alert("You Qr is : " + decodedText, decodedResult);

//   // console.log(`Code matched = ${decodedText}`, decodedResult);
// }

// let config = {
//   fps: 10,
//   qrbox: {width: 100, height: 100},
//   rememberLastUsedCamera: true,
//   // Only support camera scan type.
//   supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
// };

// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "my-qr-reader", config, /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess);


// html5QrCode.start({ facingMode: "environment" });
let redirectionOccured = false; // Flag to track redirection

const html5QrCode = new Html5Qrcode(
  "my-qr-reader", { formatsToSupport: [ Html5QrcodeSupportedFormats.QR_CODE ] });
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
		// alert("You Qr is : " + decodedText, decodedResult);

    if (!redirectionOccured) {
      redirectionOccured = true; // Set flag to true to prevent further redirections
      const url = decodedText.match(/(https?:\/\/[^ ]+)/)[1];
      window.location.href = url;
      html5QrCode.stop();
    }





};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);