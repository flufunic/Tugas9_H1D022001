1. Proses Login 
![LOGIN](login.png)
Pada halaman login, pengguna menekan tombol "Sign In with Google", yang memicu fungsi autentikasi Google melalui Firebase dan Capacitor. Aplikasi menampilkan layar pilihan akun Google, di mana pengguna dapat memilih akun yang akan digunakan. Setelah akun dipilih, aplikasi menerima token autentikasi dari Google. Token ini diverifikasi oleh Firebase, dan informasi pengguna (seperti nama, email, dan URL foto profil) disimpan di state management menggunakan Pinia. Jika login berhasil, pengguna secara otomatis diarahkan ke halaman Home.

2. Proses di Halaman Home
![HOME](home.png)
Setelah login, pengguna tiba di halaman Home, yang berfungsi sebagai layar utama aplikasi. Halaman ini menampilkan nama pengguna, email, dan foto profil mereka. Foto profil ditampilkan menggunakan URL dari akun Google pengguna, dan jika gambar gagal dimuat, aplikasi menggantinya dengan gambar default. Selain itu, terdapat tombol Logout di bagian atas halaman, yang memungkinkan pengguna keluar dari aplikasi. 

3. Proses di Halaman Profile 
![PROFILE](profile.png) 
Pada halaman Profile, informasi pengguna ditampilkan secara lebih detail dan terstruktur. Halaman ini mencakup komponen untuk menampilkan nama, email, dan foto profil pengguna. Jika foto profil tidak tersedia atau gagal dimuat, aplikasi menggantinya dengan gambar default. Halaman ini juga memiliki tombol Logout, memberikan opsi bagi pengguna untuk keluar dari aplikasi. Komponen navigasi (tabs menu) mempermudah pengguna untuk berpindah antara halaman Home dan Profile.

4. Proses Logout  
Logout dimulai ketika pengguna menekan tombol Logout di halaman Home atau Profile. Tombol ini memicu fungsi logout, yang pertama-tama memutuskan sesi autentikasi pengguna di Firebase dengan memanggil fungsi `signOut`. Kemudian, sesi login Google di perangkat juga diakhiri melalui `GoogleAuth.signOut`. Setelah logout berhasil, data pengguna di state management Pinia dihapus, memastikan aplikasi tidak menyimpan informasi pengguna. Pengguna kemudian diarahkan kembali ke halaman login untuk memulai sesi baru jika diperlukan. Proses ini memastikan keamanan data pengguna dan mencegah akses tidak sah. 