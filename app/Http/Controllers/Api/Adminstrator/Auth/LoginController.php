<?php

namespace App\Http\Controllers\Api\Adminstrator\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if(Auth::guard('administrator')->attempt($credentials)){
            return response()->json([
                'message' => 'Login Successfully',
                'data' => Auth::guard('administrator')->user(),
                'token' => Auth::guard('administrator')->user()->createToken('admin', ['administrator'])->accessToken,
            ]);
        }
        return response()->json([
            'message' => 'Login Failed',
        ], 401);
    }
}
