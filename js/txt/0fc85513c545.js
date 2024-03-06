document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Contoh sederhana validasi username dan password
    if (username === 'ceritakita' && password === 'Maulrahj@n07') {
      // Jika berhasil, redirect ke halaman lain atau tampilkan pesan berhasil
        alert('Login berhasil!');
        sessionStorage.setItem('isLoggedIn', true);
      // Redirect ke halaman lain
        window.location.href = '../index.html';
    } else {
      // Jika gagal, tampilkan pesan error
      document.getElementById('error-message').innerText = 'Username atau password salah.';
    }
  });
  