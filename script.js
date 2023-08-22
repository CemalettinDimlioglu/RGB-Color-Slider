 const rColor = document.getElementById("red");
const gColor = document.getElementById("green");
const bColor = document.getElementById("blue");
const copyBtn = document.getElementById("copy-btn");
const result = document.querySelector(".result input");
const sliders = document.querySelectorAll(".wrapper input[type='range']");
let generateColor = () => {
  let rColorValue = rColor.value;
  let gColorValue = gColor.value;
  let bColorValue = bColor.value;
  let finalColor = `rgb(${rColorValue},${gColorValue},${bColorValue})`;
  result.value = finalColor;
  document.body.style.backgroundColor = finalColor;
};
// Bu kod bir JavaScript fonksiyonu olan generateColor()'ı tanımlamaktadır. Bu fonksiyon üç giriş alanından (rColor, gColor ve bColor) değerleri alır. Bu değerler sırasıyla kırmızı, yeşil ve mavi renk değerlerini temsil etmektedir. Ardından bu değerleri birleştirerek bir RGB renk dizgesi oluşturur ve finalColor değişkenine atar.
// Sonuçta elde edilen renk dizgesi result değeri olarak atanır ve document.body öğesinin arka plan rengi olarak uygulanır, böylece web sayfasının arka plan rengi değiştirilir.
sliders.forEach((a) => {
  a.addEventListener("input", generateColor);
});
// 1-sliders.forEach((inp) => { inp.addEventListener("input", generateColor); });: Bu satır, sliders adında bir dizi (ya da NodeList) üzerinde forEach döngüsü kullanarak her bir öğe için bir olay dinleyicisi ekler. Her bir inp öğesi üzerinde "input" olayı dinlenir ve generateColor fonksiyonu çağrılır. Bu, her bir kaydırma çubuğuna bir değer girdiğinde veya değiştirdiğinde generateColor fonksiyonunun tetikleneceği anlamına gelir.
// 2-window.addEventListener("load", generateColor);: Bu satır, sayfa yüklendiğinde generateColor fonksiyonunu tetikleyen bir olay dinleyicisi ekler. Bu, sayfa tamamen yüklendiğinde generateColor fonksiyonunun otomatik olarak çalıştırılacağı anlamına gelir.
// 3-copyBtn.addEventListener("click", copyColorCode);: Bu satır, copyBtn adında bir düğme öğesine tıklama olayını dinleyen bir olay dinleyicisi ekler. Düğmeye tıklandığında copyColorCode fonksiyonu çağrılır. Bu, düğmeye tıklandığında copyColorCode fonksiyonunun tetikleneceği anlamına gelir.
window.addEventListener("load", generateColor);
let copyColorCode = () => {
  result.select();
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = "Copy Color Code";
  }, 1000);
};
copyBtn.addEventListener("click", copyColorCode);
// 1-result.select();: Bu satır, result adında bir giriş veya metin alanı öğesine atıfta bulunuyor. Bu satır, o öğe içindeki metni seçer.
// 2-document.execCommand("copy");: Bu satır, execCommand işlevini kullanarak seçili metni panoya kopyalar. Böylece, kullanıcı bu metni başka bir yerde yapıştırabilir.
// 3-copyBtn.innerText = "Copied!";: Bu satır, copyBtn adında bir öğenin metin içeriğini "Copied!" olarak değiştirir. Bu, kullanıcıya metnin başarıyla kopyalandığını bildirir.
// 4-setTimeout(() => { copyBtn.innerText = "Copy Color Code"; }, 1000);: Bu satır, 1000 milisaniye (1 saniye) sonra bir zamanlayıcı başlatır. Zamanlayıcı tetiklendiğinde, copyBtn öğesinin metin içeriği "Copy Color Code" olarak geri değiştirilir. Bu, kullanıcıya belirli bir süre sonra tekrar metni kopyalayabileceğini gösterir.