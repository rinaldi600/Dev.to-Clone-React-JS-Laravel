<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Remember_Me;

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
    $data = [
        'title' => 'DEV Community 👩‍💻👨‍💻',
        'isRememberMe' => Auth::check() ? Remember_Me::where('id_user','=', Auth::user()['id_user'])->first() : '',
    ];
    return Inertia::render('Home/Home', $data);
});

Route::get('/search', function () {
    return 'WORK';
});

Route::get('/enter?state=new-user', [\App\Http\Controllers\UserController::class, 'signUpView'])->middleware('validLogin');
Route::get('/enter', [\App\Http\Controllers\UserController::class, 'index'])->middleware('validLogin');
Route::post('/new_user', [\App\Http\Controllers\UserController::class, 'newUser']);
Route::post('/login_user', [\App\Http\Controllers\UserController::class, 'handleLogin']);
Route::post('/logout_user', [\App\Http\Controllers\UserController::class, 'LogOutUser'])->middleware('isValidLogin');
Route::post('/remember_me_user', [\App\Http\Controllers\UserController::class, 'rememberMeUser']);
Route::get('/signout_confirm', [\App\Http\Controllers\UserController::class, 'handleLogOut'])->middleware('isValidLogin');
Route::get('/{user:username}', [\App\Http\Controllers\UserController::class, 'profileUser'])->middleware('isValidLogin');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
