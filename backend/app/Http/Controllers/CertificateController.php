<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Fruitcake\Cors\HandleCors;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class CertificateController extends Controller
{
    public function __construct()
    {
        $this->middleware(HandleCors::class);
    }


    public function generatePDF(Request $request)
    {

        // $names = $request->input('names');
        // $imagePath = asset('storage/sertifikat/sertif_master.png');

        // if (!$names || !is_array($names)) {
        //     return response()->json(['error' => 'Names are required and must be an array'], 400);
        // }

        // $name = "samsudin";
        // $name = "samsudin";
        // $role = "Ketua Panitia";
        // $title = "Perancangan IoT Device Matahari";

        // $html = view('certificate', compact('name', 'imagePath', 'role', 'title'))->render();
        // return $html;

        $title = $request->input('title');
        $description = $request->input('description');
        $date = $request->input('date');
        $recipients = $request->input('recipients');
        $imagePath = Storage::disk('public')->get('sertifikat/sertif_master.jpg');

        if (!$title || !$description || !$date || !$recipients || !is_array($recipients)) {
            return response()->json(['error' => 'All fields are required and recipients must be an array'], 400);
        }

        $zip = new ZipArchive;
        $zipFileName = 'certificates.zip';
        $zipFilePath = storage_path('app/' . $zipFileName);

        if ($zip->open($zipFilePath, ZipArchive::CREATE) === TRUE) {
            foreach ($recipients as $recipient) {
                $name = $recipient['name'];
                $role = $recipient['role'];
                $html = view('certificate', compact('title', 'description', 'date', 'name', 'role', 'imagePath'))->render();
                $pdf = Pdf::loadHTML($html)->setPaper('A4', 'landscape')
                    ->setOptions([
                        'enable_remote' => true,
                        'chroot' => public_path(),
                    ]);
                $pdfContent = $pdf->output();
                $zip->addFromString($name . '.pdf', $pdfContent);
            }
            $zip->close();

            return response()->download($zipFilePath)->deleteFileAfterSend(true);
        } else {
            return response()->json(['error' => 'Unable to create ZIP file'], 500);
        }
    }
}
