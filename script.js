function btn() {
    let otp = Math.floor(10000 + Math.random() * 99999)
    document.getElementById("result").innerHTML = otp;
}