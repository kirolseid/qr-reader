function generateQR() {
  const qrDataInput = document.getElementById('qrDataInput');
  const qrCodeContainer = document.getElementById('qrCodeContainer');
  const qrData = qrDataInput.value;

  if (!qrData) {
    alert('Please enter QR code data');
    return;
  }

  // Clear any existing QR code
  qrCodeContainer.innerHTML = '';

  // Create a QR code instance
  const qrCode = new QRCode(qrCodeContainer, {
    text: qrData,
    width: 200,
    height: 200,
  });

  // Display the generated QR code
  qrCode.makeCode(qrData);
}
