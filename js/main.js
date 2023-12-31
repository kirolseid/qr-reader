
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


function scan(){
  html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

}



// If you want to prefer front camera