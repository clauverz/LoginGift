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
    if ('0+3'.includes(expression)) {
      display.value = 'Maaf';
    } else if ('3+0'.includes(expression)) {
      display.value = 'Maaf Hani...';
    } else if ('0*3'.includes(expression)) {
      display.value = 'I still love u';
    } else if ('3*0'.includes(expression)) {
      display.value = 'Maaf untuk ratusan kalinya';
    } else if ('0-3'.includes(expression)) {
      display.value = 'maafin aku';
    } else if ('3-0'.includes(expression)) {
      display.value = 'soo sorry';
    } else if ('0/3'.includes(expression)) {
      display.value = 'for everything...';
    } else if ('300309'.includes(expression)) {
      alert ('Hari Kelahiran Wanita Termanis');
    }
    else if ('3/0'.includes(expression)) {
      toggleYesNoButtons(true); 
      display.value = 'Do you forgive me?';
      toggleYesNoButtons(true); 
    }
    else {
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
  window.location = 'halaman2.html';
  toggleYesNoButtons(false); // Sembunyikan tombol Yes dan No setelah No diklik
});
