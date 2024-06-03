function onScanSuccess(qrCodeMessage) {
    alert(`QR Code detected: ${qrCodeMessage}`);
}

function onScanError(errorMessage) {
    console.error(errorMessage);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('request-permission').addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                console.log('Camera permission granted');
                document.getElementById('request-permission').style.display = 'none';
                var html5QrCodeScanner = new Html5QrcodeScanner(
                    "reader", { fps: 10, qrbox: 250 });
                html5QrCodeScanner.render(onScanSuccess, onScanError);
            })
            .catch(error => {
                console.error('Error requesting camera permission:', error);
            });
    });
});
