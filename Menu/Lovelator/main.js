const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      calculate();
    } else if (button.textContent === 'C') {
      clearDisplay();
    } else {
      appendToDisplay(button.textContent);
    }
  });
});

// Fungsi untuk menampilkan atau menyembunyikan tombol Yes dan No
function toggleYesNoButtons(show) {
  yesBtn.classList.toggle('hidden', !show);
  noBtn.classList.toggle('hidden', !show);
}

// Fungsi untuk menghitung dan menampilkan pesan
function calculate() {
  try {
    let expression = display.value.replace(/×/g, '*').replace(/:/g, '/');
    if ('1+7'.includes(expression)) {
      display.value = 'I love you 💞';
    } else if ('7+1'.includes(expression)) {
      display.value = 'manis banget si kamu';
    } else if ('1*7'.includes(expression)) {
      display.value = 'kiw kiw Rubby';
    } else if ('7*1'.includes(expression)) {
      display.value = 'cantikknyaa akuu?';
    } else if ('1-7'.includes(expression)) {
      display.value = 'u are so cutee';
    } else if ('7-1'.includes(expression)) {
      display.value = 'miawww 💞';
    } else if ('1/7'.includes(expression)) {
      display.value = 'manaa centilnyaa 😡';
    } else if ('7/1'.includes(expression)) {
      display.value = 'can u be mine? 😘😘';
      toggleYesNoButtons(true); // Tampilkan tombol Yes dan No
    } else {
      display.value = eval(expression);
      toggleYesNoButtons(false); // Sembunyikan tombol Yes dan No
    }
  } catch (error) {
    display.value = 'Error';
    toggleYesNoButtons(false); // Sembunyikan tombol Yes dan No jika terjadi error
  }
}

// Fungsi untuk menambahkan nilai ke display
function appendToDisplay(value) {
  display.value += value;
}

// Fungsi untuk menghapus display
function clearDisplay() {
  display.value = '';
  toggleYesNoButtons(false); // Sembunyikan tombol Yes dan No saat display dihapus
}

// Event listener untuk tombol Yes
yesBtn.addEventListener('click', () => {
  window.location.href = 'halaman1.html'; // Pindah ke halaman1.html
});

// Event listener untuk tombol No
noBtn.addEventListener('click', () => {
  display.value = 'please say yes 😢';
  toggleYesNoButtons(false); // Sembunyikan tombol Yes dan No setelah No diklik
});
