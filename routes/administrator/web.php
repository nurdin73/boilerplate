<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('bolerplate');
});
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::get('forgot-password', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('forgot-password');
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetForm'])->name('reset-password');
Route::get('verify-email/{token}', [RegisterController::class, 'verify'])->name('verify-email');