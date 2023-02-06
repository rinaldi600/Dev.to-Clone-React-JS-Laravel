<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
}
