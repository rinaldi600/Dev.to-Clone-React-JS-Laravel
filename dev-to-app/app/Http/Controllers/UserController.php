<?php

namespace App\Http\Controllers;

use App\Models\Remember_Me;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = [
            'title' => 'Welcome! - DEV Community 👩‍💻👨‍💻'
        ];
        if ($request->input('state')) {
            return Inertia::render('LoginSignUp/SignUp/SignUp', $data);
        }
        return Inertia::render('LoginSignUp/SignIn/SignIn', $data);
    }

    public function newUser(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|regex:/^[\pL\s\-]+$/u',
            'username' => 'required|string|regex:/^\w*$/|max:25|unique:users,username',
            'email' => 'required|email:rfc,dns|unique:users,email',
            'password' => 'required|string|min:8',
        ],[
            'name.required' => 'Wajib Diisi',
            'name.regex' => 'Nama tidak valid',

            'username.required' => 'Wajib Diisi',
            'username.regex' => 'Username tidak valid',
            'username.string' => 'Username tidak valid',
            'username.max' => 'Maksimal 25 karakter',
            'username.unique' => 'Username sudah ada',

            'email.required' => 'Wajib Diisi',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email sudah ada',

            'password.required' => 'Wajib Diisi',
            'password.string' => 'Password tidak valid',
            'password.min' => 'Password minimal 8 karakter',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->with('message', true);
        }

        $nowDate = date('m/d/Y H:i:s', time());

        $user = User::create([
            'id_user' => 'USER - ' . $nowDate . ' - ' .strtotime($nowDate),
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return redirect()->back()->with('success', true);
    }

    public function handleLogin(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => ['required','email:rfc,dns', function ($value, $attribute ,$fail) {
                $checkEmail = User::where('email', '=' , $attribute)->first();
                if ( !(array) $checkEmail) {
                    $fail($attribute . ' tidak ditemukan');
                }
            }],
            'password' => 'required|string|min:8',
        ],[
            'email.required' => 'Wajib Diisi',
            'email.email' => 'Email tidak valid',

            'password.required' => 'Wajib Diisi',
            'password.string' => 'Password tidak valid',
            'password.min' => 'Password minimal 8 karakter',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->with('message', true);
        } else {

            $data = [
                'email' => $request->input('email'),
                'password' => $request->input('password')
            ];

            if (Auth::attempt($data)) {
                if ($request->input('remember_me')) {

                    $detailUser = User::where('email', '=', $request->input('email'))->first();
                    $idUser = $detailUser['id_user'];
                    $usernameHash = Hash::make($detailUser['username']);
                    $sessionId = Session::getId();

                    Remember_Me::create([
                        'session_id' => $sessionId,
                        'id_user' => $idUser,
                        'hash' => $usernameHash,
                    ]);
                }

                $request->session()->regenerate();
                return redirect()->to('/');
            } else {
                return redirect()->back()->with('wrong_password','Password Salah');
            }
        }
    }

    public function handleLogOut() {
        return Inertia::render('LoginSignUp/LogOut/LogOut');
    }

    public function LogOutUser(Request $request) {

        $sessionID = $request->input('session_id');

        Remember_Me::where('session_id', '=', $sessionID)->delete();

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->to('/');

    }

    public function rememberMeUser(Request $request) {
        $sessionID = $request->input('session_id');
        $hash = $request->input('hash');

        $detailRememberMe = Remember_Me::with('users')
            ->where('session_id', '=' ,$sessionID)->first()->users;

        if (Hash::check($detailRememberMe[0]['username'],$hash)) {
            Auth::login(User::where('username','=',$detailRememberMe[0]['username'])->first());
            $request->session()->regenerate();
            return redirect()->to('/');
        } else {
            return redirect()->to('/');
        }
    }

    public function profileUser(User $user) {
        return Inertia::render('Profile/profileUser', [
            'user' => $user,
        ]);
    }

    public function settingProfileView() {
        return Inertia::render('Profile/UserSetting/UserSetting');
    }

    public function settingsValueUser(Request $request) {

        $checkEmail = $request->input('email') === $request->input('old_email') ?
            ''
        :
            'unique:users,email';

        $checkUsername = $request->input('username') === $request->input('old_username') ?
            ''
        :
            'unique:users,username';

        $checkImage = $request->hasFile('profile_image') ? 'image|mimes:jpg,png|max:512' : '';

        $validator = Validator::make($request->all(), [
            'name' => 'required|regex:/^[\pL\s\-]+$/u',
            'email' => ['required','email:rfc,dns', $checkEmail],
            'username' => ['required', 'string', 'regex:/^\w*$/', 'max:25', $checkUsername],
            'bio' => ['max:255'],
            'profile_image' => $checkImage,
            'education' => ['nullable', 'regex:/^[\w\s]+$/', 'min:8' ,'max:255'],
        ], [
            'name.required' => 'Wajib Diisi',
            'name.regex' => 'Nama tidak valid',

            'email.required' => 'Wajib Diisi',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email sudah ada',

            'username.required' => 'Wajib Diisi',
            'username.regex' => 'Username tidak valid',
            'username.string' => 'Username tidak valid',
            'username.max' => 'Maksimal 25 karakter',
            'username.unique' => 'Username sudah ada',

            'bio.max' => 'Maksimal 1000 karakter',

            'profile_image.image' => 'File harus gambar',
            'profile_image.mimes' => 'File harus jpg atau png',
            'profile_image.max' => 'File maksimal 512KB',

            'education.regex' => 'Education tidak valid',
            'education.min' => 'Minimal 8 karakter',
            'education.max' => 'Maksimal 255 karakter',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        } else {

            $idUser = User::where('email', $request->input('old_email'))->first();

            $filePath = explode('/', $idUser['profile_image']);

            if ($request->hasFile('profile_image') && $idUser['profile_image'] !== '') {
                if (Storage::disk('public')->exists($filePath[2] . '/' . $filePath[4])) {
                    Storage::disk('public')->delete($filePath[2] . '/' . $filePath[4]);
                }
            }

            $fileUpload = $request->hasFile('profile_image') ? Storage::disk('public')->put('profile/', $request->file('profile_image')) : '';

            User::where('id_user', $idUser->makeVisible(['id_user'])['id_user'])->update([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'profile_image' => $fileUpload === '' ? $idUser['profile_image'] : Storage::url($fileUpload),
                'bio' => $request->input('bio') === '' ? $idUser['bio'] : $request->input('bio'),
                'education' => $request->input('education'),
            ]);

            if (($request->input('email') !== $request->input('old_email')) || ($request->input('username') !== $request->input('old_username')) ) {

                Auth::logout();

                $request->session()->invalidate();

                $request->session()->regenerateToken();

                $checkRememberMe = Remember_Me::where('id_user', $idUser['id_user'])->orderBy('created_at', 'desc')->first();

                if ($checkRememberMe !== null) {
                    $checkRememberMe->delete();
                }

                return redirect()->to('/enter')->with('try_login', 'Silahkan coba login kembali');

            }

            return redirect()->back();
        }
    }

    public function settingAccountView() {
        return Inertia::render('Profile/UserSetting/PasswordSetting');
    }

    public function setNewPassword(Request $request) {
        $validator = Validator::make($request->all(), [
            'current_password' => ['required', 'min:8', 'string', function($attribute, $value, $fail) use ($request) {
                $passwordUser = Auth::user()->makeVisible(['password'])['password'];
                if ( !Hash::check($value, $passwordUser) ) {
                    $fail('Password saat ini salah');
                }
            }],
            'password' => ['required', 'string' ,'min:8'],
            'confirm_password' => ['required', 'same:password', 'string', 'min:8'],
        ], [
            'current_password.required' => 'Wajib diisi',
            'current_password.min' => 'Min 8 karakter',

            'password.required' => 'Wajib diisi',
            'password.min' => 'Min 8 karakter',

            'confirm_password.required' => 'Wajib diisi',
            'confirm_password.same' => 'Confirm password harus sama',
            'confirm_password.min' => 'Min 8 karakter',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        } else {
            $hashNewPassword = Hash::make($request->input('confirm_password'));

            User::where('id', Auth::user()['id'])->update([
                'password' => $hashNewPassword,
            ]);

            $checkRememberMe = Remember_Me::where('id_user', Auth::user()['id_user'])->orderBy('created_at', 'desc')->first();

            if ($checkRememberMe !== null) {
                $checkRememberMe->delete();
            }

            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return redirect()->to('/enter')->with('try_login', 'Silahkan coba login kembali');
        }
    }

    public function notifications() {
        return Inertia::render('Profile/Notifications/All/All');
    }

    public function notificationsComment() {
        return Inertia::render('Profile/Notifications/Comments/Comments');
    }

    public function notificationsPost() {
        return Inertia::render('Profile/Notifications/Posts/Posts');
    }

    public function new() {
        return Inertia::render('NewPost/NewPost');
    }

    public function getDataPost(Request $request) {
        dd($request->input());
    }

    public function handlerImage(Request $request) {
        // return response()->json([
        //     'res' => $request->hasFile('file') ? Storage::disk('public')->put('profile/', $request->file('file')) : 'EMPTY',
        // ]);
        return response()->json([
            'res' => $request->hasFile('file') ? 'WORK' : 'EMPTY',
        ]);
        /***************************************************
         * Only these origins are allowed to upload images *
         ***************************************************/
        $accepted_origins = array("http://localhost", "http://127.0.0.1");

        /*********************************************
         * Change this line to set the upload folder *
         *********************************************/
        $imageFolder = "images/";

        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // same-origin requests won't set an origin. If the origin is set, it must be valid.
            if (in_array($_SERVER['HTTP_ORIGIN'], $accepted_origins)) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
            } else {
            header("HTTP/1.1 403 Origin Denied");
            return;
            }
        }

        // Don't attempt to process the upload on an OPTIONS request
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header("Access-Control-Allow-Methods: POST, OPTIONS");
            return;
        }

        reset ($_FILES);
        $temp = current($_FILES);
        if (is_uploaded_file($temp['tmp_name'])){
            /*
            If your script needs to receive cookies, set images_upload_credentials : true in
            the configuration and enable the following two headers.
            */
            // header('Access-Control-Allow-Credentials: true');
            // header('P3P: CP="There is no P3P policy."');

            // Sanitize input
            if (preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])) {
                header("HTTP/1.1 400 Invalid file name.");
                return;
            }

            // Verify extension
            if (!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))) {
                header("HTTP/1.1 400 Invalid extension.");
                return;
            }

            // Accept upload if there was no origin, or if it is an accepted origin
            $filetowrite = $imageFolder . $temp['name'];
            move_uploaded_file($temp['tmp_name'], $filetowrite);

            // Determine the base URL
            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? "https://" : "http://";
            $baseurl = $protocol . $_SERVER["HTTP_HOST"] . rtrim(dirname($_SERVER['REQUEST_URI']), "/") . "/";

            // Respond to the successful upload with JSON.
            // Use a location key to specify the path to the saved image resource.
            // { location : '/your/uploaded/image/file'}
            echo json_encode(array('location' => $baseurl . $filetowrite));
        } else {
            // Notify editor that the upload failed
            header("HTTP/1.1 500 Server Error");
        }
    }
}
