// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      $w("#videoForScanner").srcObject = stream; // Replace 'videoElement' with the actual ID of your video element
    })
    .catch(err => {
      console.error('Error accessing the camera:', err);
    });
});
