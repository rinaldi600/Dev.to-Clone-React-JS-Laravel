<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Remember_Me;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

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
            'dataPost' => Post::with('users')->where('id_user', $user->id_user)->get(),
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

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'cover' => 'required|file|image|max:1000|mimes:jpg,bmp,png',
        ], [
            'required' => ':attribute wajib diisi.',
            'cover.file' => ':attribute wajib diisi.',
            'cover.image' => ':attribute harus wajib berupa gambar.',
            'cover.max' => ':attribute ukuran maksimal 1 MB.',
            'cover.mimes' => ':attribute format gambar harus jpg,bmp dan png.',
            'title.max' => ':attribute maksimal 255 karakter.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        } else {
            $data = [
                'id_post' => 'POST - ' . date('dmYHis', time()) . substr((string)microtime(), 1, 8),
                'cover' => Storage::url(Storage::disk('public')->put('cover_post', $request->file('cover'))),
                'title' => $request->input('title'),
                'content' => $request->input('body'),
                'image_content' => $request->input('image_content') === null ? null : json_encode($request->input('image_content')),
                'tags' => $request->input('tags') === null ? null : json_encode($request->input('tags')),
                'id_user' => Auth::user()->id_user,
            ];

            Post::create($data);

            // return redirect()->back()->withInput()->with('test_res', json_encode($request->input('image_content')));

            return redirect()->to('/dashboard');
        }
    }

    public function dashboard() {
        return Inertia::render('Profile/Dashboard/Dashboard', [
            'dataPost' => Post::with('users')->where('id_user', Auth::user()->id_user)->get()
        ]);
    }

    public function editPost(User $user,Post $post) {
        return Inertia::render('EditPost/EditPost', [
            'detailPost' => $post,
            'user' => $user,
        ]);
    }

    public function deletePost(Request $request) {
        Post::where('id_post', $request->input('idPosts'))->delete();
        return redirect()->back();
    }

    public function editDataPost(Request $request) {

        $validation = [
            'title' => 'required|string|max:255',
        ];

        $validation['cover'] = $request->hasFile('cover') ? 'required|file|image|max:1000|mimes:jpg,bmp,png' : '';

        $validator = Validator::make($request->all(), $validation, [
            'required' => ':attribute wajib diisi.',
            'cover.file' => ':attribute wajib diisi.',
            'cover.image' => ':attribute harus wajib berupa gambar.',
            'cover.max' => ':attribute ukuran maksimal 1 MB.',
            'cover.mimes' => ':attribute format gambar harus jpg,bmp dan png.',
            'title.max' => ':attribute maksimal 255 karakter.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        } else {

            if ($request->hasFile('cover')) {
                Storage::disk('public')->delete(str_replace("/storage/", "", $request->input('oldPath')));
            };

            $data = [
                'cover' => $request->hasFile('cover') ? (Storage::url(Storage::disk('public')->put('cover_post', $request->file('cover')))) : $request->input('cover'),
                'title' => $request->input('title'),
                'content' => $request->input('body'),
                'image_content' => json_encode($request->input('image_content')) === '[]' ? null : json_encode($request->input('image_content')),
                'tags' => json_encode($request->input('tags')) === '[]' ? null : json_encode($request->input('tags')),
            ];

            Post::where('id_post', $request->input('idPost'))->update($data);

            return redirect()->to('/dashboard');
        }
    }

    public function seePost($username, $slug) {
        $idPost = Post::where('slug',$slug)->first()['id_post'];
        return Inertia::render('SeePost/SeePost', [
            'detailPost' => Post::with(['users', 'comments' => function ($query) {
                $query->where('parent_comment', null);
            } , 'comments.users', 'comments.replyComment.users'])->where('slug', $slug)->first(),
            'countComment' => Comment::where('id_post', $idPost)->count(),
          ]);
    }

    public function handlerImage(Request $request) {
        $validator = Validator::make($request->all(), [
            'file' => 'image|mimes:jpg,png|max:512',
        ], [
            'file.image' => 'File harus gambar',
            'file.mimes' => 'File harus jpg atau png',
            'file.max' => 'File maksimal 512KB',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()->all(),
            ]);
        } else {
            if ($request->hasFile('file')) {
                $fileUpload = Storage::disk('public')->put('content/', $request->file('file'));
                return response()->json([
                    'location' => Storage::url($fileUpload),
                ]);
            };
        }
    }

    public function deleteImagePost(Request $request) {
        $deleteImage = Storage::disk('public')->delete($request->input('nameImage'));

        return response()->json([
            'res' => $deleteImage,
        ]);
    }

    public function commentPost(Request $request) {
        $validator = Validator::make($request->all(), [
            'comment' => 'required|max:1000|string',
        ], [
            'comment.required' => 'Wajib diisi',
            'comment.max' => 'Maksimal comment 1000 karakter',
            'comment.string' => 'Comment wajib berupoa string',
        ]);
        if ($validator->fails()) {
            return redirect()
                        ->back()
                        ->withErrors($validator)
                        ->withInput();
        } else {
            Comment::create([
                'id_comment' => 'Comment - ' . Carbon::now() . '_' . Carbon::now()->getPreciseTimestamp(10),
                'comment' => $request->input('comment'),
                'parent_comment' => $request->input('idComment') !== null ? $request->input('idComment') : null,
                'id_post' => $request->input('idPost'),
                'id_user' => Auth::user()->id_user,
            ]);
            return redirect()->back()->with('close_comment_box', true);
        }
    }

    public function removeFlashData(Request $request) {
        $request->session()->forget('close_comment_box');
        return redirect()->back()->with('position', true);
    }
}
