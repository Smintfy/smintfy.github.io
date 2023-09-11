function copyOnClick() {
    var copyText = document.getElementById("mail");
    navigator.clipboard.writeText(copyText.textContent);

    var buttonText = document.getElementById("copy-button");
    buttonText.innerText = "Copied";

    setTimeout(() => {
        buttonText.innerText = "Copy";
    }, 3000);
}
