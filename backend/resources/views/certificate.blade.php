<!DOCTYPE html>
<html>

<head>
    <style type='text/css'>
        body,
        html {
            margin: 0;
            padding: 0;

        }

        body {
            color: black;
            font-family: 'Times New Roman', Times, serif;
            text-align: center;
            position: relative;
            width: 210mm;
            height: 297mm;

        }

        .container {
            vertical-align: middle;

            background-image: url('{{ $imagePath }}');
            background-size: cover;
            background-position: center center;
        }

        .main {
            padding-top: 80px;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom: 80px;
        }

        .subText {
            font-size: 12px;
        }

        .mainText {
            font-size: 24px;
            color: red;
            margin: 12px auto;
            font-weight: bold;
        }

        .tandaTangan {
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            padding-bottom: 30px;

        }

        .signature {
            width: 25%;
            text-align: center;
        }

        .red {
            color: red;
        }
    </style>

</head>

<body>
    <div class="container">
        <div class="main">
            <div class="subText" style="padding-top: 50px;">
                Diberikan kepada
            </div>
            <div class="mainText">
                {{ $name }}
            </div>
            <div class="subText">
                atas partisipasinya sebagai
            </div>
            <div class="mainText">
                {{ $role}}
            </div>
            <div class="subText">
                dalam kegiatan pengabdian kepada masyarakat dengan judul
            </div>
            <div class="mainText">
                {{ $title}}
            </div>
            <div class="mainText">
                ..............
            </div>
            <div class="subText">
                yang diselenggarakan pada Hari <span class="red">Selasa, 23 Maret 2021 di MTs Husnul Khotimah Kabupaten
                    Kuningan</span>
            </div>
            <div class="subText" style="margin-top: 10px;">
                Bandung, <span class="red">18 April 2021</span>
            </div>

        </div>
        <div class="tandaTangan">
            <div class="signature" style="text-align: start;">
                <div>Direktur PPN <br> Universitas Telkom </div>
                <div></div>
            </div>
            <div class="signature" style="text-align: start;">
                <div>Dekan Fakultas.... <br> Universitas Telkom </div>
                <div></div>
            </div>
        </div>
    </div>
</body>

</html>