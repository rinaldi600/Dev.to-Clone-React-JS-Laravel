<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Home', [
        'title' => 'DEV Community 👩‍💻👨‍💻'
    ]);
});

Route::get('/search', function () {
    return 'WORK';
});

Route::get('/enter?state=new-user', [\App\Http\Controllers\UserController::class, 'signUpView']);
Route::get('/enter', [\App\Http\Controllers\UserController::class, 'index']);
Route::post('/new_user', [\App\Http\Controllers\UserController::class, 'newUser']);
Route::post('/login_user', [\App\Http\Controllers\UserController::class, 'handleLogin']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
