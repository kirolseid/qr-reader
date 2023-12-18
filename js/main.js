
$(function () {
  var video = document.createElement("video");
  var canvasElement = document.getElementById("canvas");
  var canvas = canvasElement.getContext("2d");
  var loadingMessage = document.getElementById("loadingMessage");
  var outputContainer = document.getElementById("output");
  var outputMessage = document.getElementById("outputMessage");
  var outputData = document.getElementById("outputData");
  var readDone = false;
  
  function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 8;
      canvas.strokeStyle = color;
      canvas.stroke();
    }
  
  function iniciarCaptura(){
      readDone = false;
      // Use facingMode: environment to attemt to get the front camera on phones
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        requestAnimationFrame(tick);
      });    
    }
    
  function tick() {
    loadingMessage.innerText = "⌛ Loading video..."
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      loadingMessage.hidden = true;
      //canvasElement.hidden = false;
      $("#canvas").slideDown();
      outputContainer.hidden = false;

      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      if (code) {
        drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
        drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
        drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
        drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
        outputMessage.hidden = true;
        outputData.parentElement.hidden = false;
        outputData.innerText = code.data;        
        
        $("#inputCod").val(code.data);
        readDone = true;
        outputData.parentElement.hidden = true;    
        // canvasElement.hidden = true;
        setTimeout(function(){ 
          $("#canvas").slideUp();
        }, 1000);
        
        stopVideo(video);        
          
      } else {
        outputMessage.hidden = false;
        outputData.parentElement.hidden = true;          
      }        
    }
    if (!readDone){
      requestAnimationFrame(tick);        
    }
    
  }
  
  
  function stopVideo(videoElem){    
    var stream = videoElem.srcObject;
    var tracks = stream.getTracks();

    tracks.forEach(function(track) {
      track.stop();
    });

    videoElem.srcObject = null;
  };
  
  
  $("#botaoCaptura").click(function(){
    iniciarCaptura();
  }); 
  
  $("#inputCod").change(function() {
    alert( "Handler for .change() called." );
  });
  
  var toast=function(msg){
      $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'>      <p>"+msg+"</p></div>")
      .css({ display: "block", 
        opacity: 0.90, 
        position: "fixed",
        padding: "7px",
        "text-align": "center",
        width: "270px",
        left: ($(window).width() - 284)/2,
        top: $(window).height()/2 })
      .appendTo( $.mobile.pageContainer ).delay( 1500 )
      .fadeOut( 400, function(){
        $(this).remove();
      });
    }
  
  $("#botaoTeste").click(function(){
    toast('teste');
  });

});
