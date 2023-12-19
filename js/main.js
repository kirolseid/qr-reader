const video = document.getElementById('qr-video');
const canvasElement = document.getElementById('qr-canvas');
const canvas = canvasElement.getContext('2d');
const qrDataContainer = document.getElementById('qrDataContainer');

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then((stream) => {
    video.srcObject = stream;
    video.setAttribute('playsinline', true);
    video.style.display = 'block';
    video.play();
    scanQRCode();
  })
  .catch((err) => {
    console.error('Error accessing the camera:', err);
  });

function scanQRCode() {
  const loop = setInterval(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        console.log('QR Code detected:', code.data);
        clearInterval(loop);
        setQRData(code.data); // Set QR code data into HTML
      }
    }
  }, 100);
}

function setQRData(qrData) {
  qrDataContainer.innerHTML = `<p>QR Code Data: ${qrData}</p>`;
  generateQRCode(qrData); // Generate QR code for the scanned data
}

function generateQRCode(qrData) {
  const qrCodeContainer = document.createElement('div');
  new QRCode(qrCodeContainer, {
    text: qrData,
    width: 200,
    height: 200,
  });
  qrDataContainer.appendChild(qrCodeContainer);
}
