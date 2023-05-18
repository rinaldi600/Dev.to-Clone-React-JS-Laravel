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

Route::post('/new_user', [\App\Http\Controllers\UserController::class, 'newUser']);
Route::post('/login_user', [\App\Http\Controllers\UserController::class, 'handleLogin']);
Route::post('/remember_me_user', [\App\Http\Controllers\UserController::class, 'rememberMeUser']);

Route::middleware('validLogin')->group(function () {
    Route::get('/enter?state=new-user', [\App\Http\Controllers\UserController::class, 'signUpView']);
    Route::get('/enter', [\App\Http\Controllers\UserController::class, 'index']);
});

Route::middleware('isValidLogin')->group(function () {
    Route::post('/logout_user', [\App\Http\Controllers\UserController::class, 'LogOutUser']);
    Route::post('/set_new_password', [\App\Http\Controllers\UserController::class, 'setNewPassword']);
    Route::post('/settings_value_user', [\App\Http\Controllers\UserController::class, 'settingsValueUser']);
    Route::get('/signout_confirm', [\App\Http\Controllers\UserController::class, 'handleLogOut']);
    Route::get('/settings/profile', [\App\Http\Controllers\UserController::class, 'settingProfileView']);
    Route::get('/settings/account', [\App\Http\Controllers\UserController::class, 'settingAccountView']);
    Route::prefix('notifications')->group(function () {
        Route::get('/', [\App\Http\Controllers\UserController::class, 'notifications']);
        Route::get('/comments', [\App\Http\Controllers\UserController::class, 'notificationsComment']);
        Route::get('/posts', [\App\Http\Controllers\UserController::class, 'notificationsPost']);
    });
    Route::get('/new', [\App\Http\Controllers\UserController::class, 'new']);
    Route::get('/{post:slug}/edit', [\App\Http\Controllers\UserController::class, 'editPost']);
    Route::post('/delete_post', [\App\Http\Controllers\UserController::class, 'deletePost']);
    Route::get('/{user:username}/{post:slug}', [\App\Http\Controllers\UserController::class, 'seePost']);
    Route::get('/dashboard', [\App\Http\Controllers\UserController::class, 'dashboard']);
    Route::post('/get_data_post', [\App\Http\Controllers\UserController::class, 'getDataPost']);
    Route::post('/handler_image', [\App\Http\Controllers\UserController::class, 'handlerImage']);
    Route::post('/delete_image_post', [\App\Http\Controllers\UserController::class, 'deleteImagePost']);
    Route::get('/{user:username}', [\App\Http\Controllers\UserController::class, 'profileUser']);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
