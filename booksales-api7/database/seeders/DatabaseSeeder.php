<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
             UserSeeder::class,
            AuthorSeeder::class,
            BookSeeder::class,
            TransactionSeeder::class,
        ]);
    }
}
