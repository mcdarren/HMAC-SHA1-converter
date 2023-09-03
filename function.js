window.function = function (input, key) {
  const message = input.value;
  const secretKey = key.value;
  try {
    const hmac = CryptoJS.HmacSHA1(message, secretKey);
    const hashHex = hmac.toString(CryptoJS.enc.Hex);
  }
  catch (err) {
    return "error";
  }
  return hashHex;
}
