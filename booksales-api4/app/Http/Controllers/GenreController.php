<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        return response()->json(Genre::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $genre = Genre::create($request->all());

        return response()->json([
            'message' => 'Genre created successfully',
            'data' => $genre
        ], 201);
    }
}
