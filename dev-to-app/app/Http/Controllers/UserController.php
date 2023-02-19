<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use DateTime;
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

        return response()->json([
            'res' => 'success',
        ]);
    }
}
