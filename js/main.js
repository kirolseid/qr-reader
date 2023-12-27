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
    // window.location.replace(url);
    setTimeout(window.location.replace(url), 1000);

  } 

  let htmlscanner = new Html5QrcodeScanner( 
      "my-qr-reader", 
      { fps: 10, qrbos: 250 } 
  ); 
  htmlscanner.render(onScanSuccess); 
});
