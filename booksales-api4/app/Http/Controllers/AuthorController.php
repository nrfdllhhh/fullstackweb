<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{

    public function index()
    {
        return response()->json(Author::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'country' => 'nullable|string|max:255',
        ]);

        $author = Author::create($request->all());

        return response()->json([
            'message' => 'Author created successfully',
            'data' => $author
        ], 201);
    }
}
