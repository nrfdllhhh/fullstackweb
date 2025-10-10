<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Nilai Ujian</title>
    <style>
        /* Reset dan gaya dasar */
        * {
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #d4fc79, #96e6a1);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
        }

        h2 {
            color: #333;
            margin-bottom: 20px;
        }

        form {
            background: #fff;
            padding: 25px 30px;
            border-radius: 15px;
            width: 320px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            transition: transform 0.2s ease;
        }

        form:hover {
            transform: scale(1.02);
        }

        label {
            font-weight: 600;
            color: #333;
            display: block;
            margin-top: 10px;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
        }

        input:focus {
            border-color: #4CAF50;
        }

        input[type="submit"] {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 15px;
            font-weight: bold;
            transition: background 0.3s ease;
        }

        input[type="submit"]:hover {
            background: #43a047;
        }

        .hasil {
            background: #ffffffcc;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 320px;
            margin-top: 25px;
            text-align: left;
        }

        .hasil h3 {
            color: #2e7d32;
            margin-top: 0;
        }

        .status-lulus {
            color: #2e7d32;
            font-weight: bold;
        }

        .status-remedial {
            color: #c62828;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h2>Form Penilaian Ujian</h2>

    <form method="POST" action="">
        <label>Nama:</label>
        <input type="text" name="nama" required>

        <label>Email:</label>
        <input type="email" name="email" required>

        <label>Nilai Ujian:</label>
        <input type="number" name="nilai" required>

        <input type="submit" value="Kirim">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        // Struktur kendali if-else
        if ($nilai > 70) {
            $status = "<span class='status-lulus'>Lulus 🎉</span>";
        } else {
            $status = "<span class='status-remedial'>Remedial 😢</span>";
        }

        echo "<div class='hasil'>";
        echo "<h3>Hasil Penilaian:</h3>";
        echo "Nama: <b>$nama</b><br>";
        echo "Email: <b>$email</b><br>";
        echo "Nilai Ujian: <b>$nilai</b><br>";
        echo "Status: $status";
        echo "</div>";
    }
    ?>

</body>
</html>
