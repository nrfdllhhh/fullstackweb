<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if ($user->role !== 'admin') {
                return response()->json([
                    'message' => 'Access denied. Admins only.'
                ], 403);
            }

            return $next($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Token invalid or missing'
            ], 401);
        }
    }
}
