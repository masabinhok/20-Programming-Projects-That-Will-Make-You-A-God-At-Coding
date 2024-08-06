const urlInput = document.querySelector(".url");
const generateButton = document.querySelector(".generate");
const displayScreen = document.querySelector(".display");
const saveButton = document.querySelector(".save");
const saveHistory = document.querySelector(".saveHistory");

generateButton.addEventListener("click", () => {
  if (urlInput) {
    let url = urlInput.value;
    console.log(url);
    //converting url to qr code using qrcode.js library.
    if (displayScreen.innerHTML === "") {
      generateQR(url);
    } else {
      displayScreen.innerHTML = "";
      generateQR(url);
    }
  }
});

function generateQR(url) {
  return new QRCode(displayScreen, {
    text: url,
    widht: 256,
    height: 256,
    colorDark: "#ff0000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

let totalHTML;

window.addEventListener("DOMContentLoaded", () => {
  const history = localStorage.getItem("saveHistory");

  if (history) {
    totalHTML = history;
    saveHistory.innerHTML = totalHTML;
  } else {
    totalHTML = `
    <h1 class="heading">Save History</h1>
    `;
  }
});

saveButton.addEventListener("click", () => {
  const qrcode = displayScreen.innerHTML;
  const url = urlInput.value;

  const html = `
    <p class="url-p">${url}</p>
  ${qrcode}
`;
  totalHTML += html;
  saveHistory.innerHTML = totalHTML;
  localStorage.setItem("saveHistory", totalHTML);
});
