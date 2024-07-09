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
        }

        .container {
            vertical-align: middle;
            background-image: url('https://wallpaperaccess.com/full/1993006.jpg');
            background-size: cover;
            background-position: center center;
            text-align: center;
            position: relative;
            width: 100%;
            height: 100%;
        }

        .subText {
            font-size: 18px;
        }

        .main {
            position: absolute;
            width: 100%;
            top: 80;
            left: 0;
            bottom: 0;
            right: 0;
        }

        .mainText {
            font-size: 32px;
            color: red;
            margin: 18px auto;
            font-weight: bold;
        }

        .tandaTangan {
            width: 100%;
            font-size: 18px;
            text-align: start;
        }

        .signature {
            position: absolute;
            width: 25%;
            bottom: 50;
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
                {{$description}}
            </div>
            <div class="subText">
                yang diselenggarakan pada Hari <span class="red">{{$date}} di {{$place}}</span>
            </div>
            <div class="subText" style="margin-top: 10px;">
                Bandung, <span class="red">18 April 2021</span>
            </div>

        </div>
        <div class="tandaTangan">
            <div class="signature" style="left: 36;">
                <div>Direktur PPN <br> Universitas Telkom </div>
                <div></div>
            </div>
            <div class="signature" style="right: 36;">
                <div>Dekan Fakultas.... <br> Universitas Telkom </div>
                <div></div>
            </div>
        </div>
    </div>
</body>

</html>