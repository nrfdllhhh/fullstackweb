<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('authors')->insert([
            ['name' => 'J.K. Rowling', 'email' => 'jk@example.com', 'bio' => 'Author of Harry Potter.'],
            ['name' => 'George R.R. Martin', 'email' => 'grrm@example.com', 'bio' => 'Author of Game of Thrones.'],
            ['name' => 'Tere Liye', 'email' => 'tere@example.com', 'bio' => 'Indonesian author.'],
            ['name' => 'Andrea Hirata', 'email' => 'andrea@example.com', 'bio' => 'Author of Laskar Pelangi.'],
            ['name' => 'Haruki Murakami', 'email' => 'murakami@example.com', 'bio' => 'Japanese novelist.'],
        ]);
    }
}
