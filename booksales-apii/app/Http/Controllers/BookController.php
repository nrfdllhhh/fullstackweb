<?php

namespace App\Http\Controllers;

use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        // ambil semua data buku + relasi ke author
        $books = Book::with('author')->get();

        return view('books', compact('books'));
    }
}
