<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('books')->insert([
            ['title' => 'Harry Potter', 'genre' => 'Fantasy', 'author_id' => 1, 'year' => 1997],
            ['title' => 'Game of Thrones', 'genre' => 'Fantasy', 'author_id' => 2, 'year' => 1996],
            ['title' => 'Kafka on the Shore', 'genre' => 'Fiction', 'author_id' => 5, 'year' => 2002],
            ['title' => 'Hujan', 'genre' => 'Drama', 'author_id' => 3, 'year' => 2016],
            ['title' => 'Laskar Pelangi', 'genre' => 'Inspirational', 'author_id' => 4, 'year' => 2005],
        ]);
    }
}
