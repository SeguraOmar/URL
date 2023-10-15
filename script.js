function envoyerInfo() {
    const info1 = document.getElementById("infoInput1").value;
    const info2 = document.getElementById("infoInput2").value;
    const infoEncode1 = encodeURIComponent(info1);
    const infoEncode2 = encodeURIComponent(info2);
    window.location.href = `page2.html?info1=${infoEncode1}&info2=${infoEncode2}`;
}


const urlParams = new URLSearchParams(window.location.search);
const info1 = urlParams.get("info1");
const info2 = urlParams.get("info2");
if (info1) {
    const infoDisplay1 = document.getElementById("infoDisplay1");
    infoDisplay1.textContent = "Nombre :" + decodeURIComponent(info1);
}
if (info2) {
    const infoDisplay2 = document.getElementById("infoDisplay2");
    infoDisplay2.textContent = "Texte :" + decodeURIComponent(info2);
}
