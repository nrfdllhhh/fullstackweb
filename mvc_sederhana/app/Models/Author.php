<?php

namespace App\Models;

class Author
{
    public static function getAll()
    {
        return [
            ['id' => 1, 'name' => 'Tere Liye'],
            ['id' => 2, 'name' => 'Andrea Hirata'],
            ['id' => 3, 'name' => 'J.K. Rowling'],
            ['id' => 4, 'name' => 'George R.R. Martin'],
            ['id' => 5, 'name' => 'Dewi Lestari'],
        ];
    }
}
