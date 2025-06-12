// Salin no rekening
function copyRekening() {
  const rekening = "1234567890";
  navigator.clipboard.writeText(rekening)
    .then(() => alert("Nomor rekening disalin!"))
    .catch(err => alert("Gagal menyalin."));
}

// Countdown timer 5 menit
let timeLeft = 5 * 60; // 5 menit dalam detik
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownElement.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    countdownElement.textContent = "00:00";
    alert("Waktu pembayaran habis.");
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();