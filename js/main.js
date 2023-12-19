const video = document.getElementById('qr-video');
const canvasElement = document.getElementById('qr-canvas');
const canvas = canvasElement.getContext('2d');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  startCamera();
});

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then((stream) => {
      video.srcObject = stream;
      video.setAttribute('playsinline', true);
      video.style.display = 'block';
      video.play();
      requestAnimationFrame(tick);
    })
    .catch((err) => {
      console.error('Error accessing the camera:', err);
    });
}

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      console.log('QR Code detected:', code.data);
      redirectToURL(code.data);
    }
  }
  requestAnimationFrame(tick);
}

function redirectToURL(url) {
  if (isValidURL(url)) {
    window.location.href = url;
  } else {
    console.log('Not a valid URL:', url);
  }
}

function isValidURL(str) {
  // Regular expression for URL validation (same as previous code)
}

// Ensure user interaction to start camera
document.addEventListener('DOMContentLoaded', () => {
  startButton.style.display = 'block';
});
