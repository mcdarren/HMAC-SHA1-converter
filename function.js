window.function = function (input, key) {
  const message = input.value;
  const secretKey = key.value;
  import('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js')
    .then((CryptoJS) => {
    const hmacSha1 = CryptoJS.HmacSHA1(message, key);
    const hexEncodedHash = hmacSha1.toString(CryptoJS.enc.Hex);
    return hexEncodedHash;
  })
  .catch((error) => {
    return "Error loading CryptoJS:";
  });
}

