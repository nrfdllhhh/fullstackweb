<!DOCTYPE html>
<html>
<head>
    <title>Books List</title>
</head>
<body>
    <h1>Daftar Buku</h1>
    <ul>
        @foreach ($books as $book)
            <li>
                <strong>{{ $book->title }}</strong>
                ({{ $book->genre }}) — {{ $book->year }}<br>
                <em>Author: {{ $book->author->name }}</em>
            </li>
        @endforeach
    </ul>
</body>
</html>
