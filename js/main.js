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



const showAlert = (message) => {
  const alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.style.padding = '10px';
  alertBox.style.backgroundColor = '#f2f2f2';
  alertBox.style.border = '1px solid #ccc';
  alertBox.style.position = 'fixed';
  alertBox.style.top = '10px';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translateX(-50%)';
  document.body.appendChild(alertBox);

  // Hide the alert after 1 second
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 5000);
};

// Call the showAlert function with your message
// Include the html5-qrcode library
// const Html5QrcodeScanner = require("html5-qrcode");


function domReady(fn) { 
  if ( 
      document.readyState === "complete" || 
      document.readyState === "interactive"
  ) { 
      setTimeout(fn, 1000); 
  } else { 
      document.addEventListener("DOMContentLoaded", fn); 
  } 
} 

domReady(function () { 

  // If found you qr code 
  function onScanSuccess(decodeText, decodeResult) { 
    const url = decodeText.match(/(https?:\/\/[^ ]+)/)[1];

    // Redirect to the scanned URL
    window.location.replace(url);
    showAlert('This alert will disappear after 1 second.');

  } 

  let htmlscanner = new Html5QrcodeScanner( 
      "my-qr-reader", 
      { fps: 10, qrbos: 250 } 
  ); 
  htmlscanner.render(onScanSuccess); 
});
