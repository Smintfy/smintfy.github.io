function myFunction() {
    var copyText = document.getElementById("mail");
    navigator.clipboard.writeText(copyText.textContent);

    var buttonText = document.getElementById("copy-button");
    console.log(buttonText.innerHTML);
    buttonText.innerHTML = "<p>Copied</p>";
}
