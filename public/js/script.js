
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");

button.onclick = () => {
    input.click();
}

input.addEventListener("change", async function (event) {
    dropArea.classList.add("active");
    uploadFile(this.files[0]);
});

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadFile(event.dataTransfer.files[0]);
});

function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            modal.style.display = "block";
            urlText.textContent = data.url;
        });
}

// modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var urlText = document.getElementById('url-text');
var copiedText = document.getElementById('copied');

document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(urlText.innerText).then(() => {
        copiedText.style.display = 'block';
    });
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}