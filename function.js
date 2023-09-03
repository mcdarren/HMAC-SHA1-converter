window.function = function (input, key) {
  const message = input.value;
  const secretKey = key.value;
  const hmac = CryptoJS.HmacSHA1(message, secretKey);
  const hashHex = hmac.toString(CryptoJS.enc.Hex);
  return hashHex;
}
