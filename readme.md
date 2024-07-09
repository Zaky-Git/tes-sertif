# Proyek Sertif

## Daftar Isi

- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (Angular 8)](#frontend-angular-8)

## Prasyarat

- Node.js 14.21.3 (pakai nvm saja untuk management versi node.js)
- NPM (npm otomatis terbawa oleh node)
- Angular 8
- PHP 7.4.20
- Composer
- Python 2.7.18

## Instalasi

### Backend (Laravel) (tidak perlu migrate karena belum pakai database)

1. Clone repository:
   ```bash
   git clone https://github.com/Zaky-Git/tes-sertif.git
   cd backend
   ```
2. Instal dependensi:
   ```bash
   composer install
   ```
3. Jalankan server:
   ```bash
   php artisan serve
   ```

### Frontend (Angular 8)

1. Pindah ke direktori frontend:

   ```bash
   cd frontend
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan aplikasi Angular:
   ```bash
   ng serve
   ```

## Penggunaan

- Untuk mengakses frontend, buka `http://localhost:4200`
