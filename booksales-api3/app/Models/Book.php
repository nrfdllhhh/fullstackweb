<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Author;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'genre', 'author_id', 'year'];

    // relasi ke tabel authors
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
