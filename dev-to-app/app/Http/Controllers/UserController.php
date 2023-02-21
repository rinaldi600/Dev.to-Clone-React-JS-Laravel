<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
            'username' => 'required|string|regex:/^\w*$/|max:255|unique:users,username',
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
            if (Auth::attempt([
                'email' => $request->input('email'),
                'password' => $request->input('password')
            ])) {
                $request->session()->regenerate();

                return redirect()->to('/');
            } else {
                return response()->json([
                    'res' => Auth::attempt($data)
                ]);
            }
        }
    }
}
