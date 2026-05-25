<?php
/**
 * Hostinger Native PHP Zip Extractor Helper
 * Bypasses web browser File Manager timeouts and 500 Internal Server Errors.
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);
set_time_limit(0);
ini_set('memory_limit', '512M');

$zipFile = 'dist.zip';
$extractTo = './';

echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>VIMOS - Server-Side Extractor</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
            color: #333;
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
        }
        .card {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            max-width: 600px;
            width: 100%;
        }
        h2 {
            color: #1e3a8a;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 15px;
            margin-top: 0;
        }
        .status {
            padding: 12px 16px;
            border-radius: 6px;
            margin: 15px 0;
            line-height: 1.5;
            font-size: 14px;
        }
        .success {
            background-color: #ecfdf5;
            color: #065f46;
            border: 1px solid #a7f3d0;
        }
        .error {
            background-color: #fef2f2;
            color: #991b1b;
            border: 1px solid #fca5a5;
        }
        .info {
            background-color: #eff6ff;
            color: #1e40af;
            border: 1px solid #bfdbfe;
        }
        .log-box {
            background-color: #1e293b;
            color: #f8fafc;
            padding: 15px;
            border-radius: 6px;
            font-family: monospace;
            max-height: 200px;
            overflow-y: auto;
            margin-top: 15px;
            font-size: 13px;
        }
    </style>
</head>
<body>
<div class='card'>
    <h2>VIMOS Technocrats Extractor</h2>";

if (!file_exists($zipFile)) {
    echo "<div class='status error'>
            <strong>Error:</strong> '$zipFile' was not found in this folder.<br>
            Please make sure you upload both <strong>$zipFile</strong> and <strong>unzip.php</strong> to the same folder on your server.
          </div>
          </div>
          </body>
          </html>";
    exit;
}

if (!class_exists('ZipArchive')) {
    echo "<div class='status error'>
            <strong>Error:</strong> PHP <code>ZipArchive</code> extension is not enabled on this server.<br>
            Please contact Hostinger support or enable it in hPanel PHP Extensions.
          </div>
          </div>
          </body>
          </html>";
    exit;
}

$zip = new ZipArchive;
if ($zip->open($zipFile) === TRUE) {
    echo "<div class='status info'>Opening archive <strong>$zipFile</strong>... Ready to extract.</div>";
    
    echo "<div class='log-box'>";
    echo "Files inside archive: " . $zip->numFiles . "<br>";
    echo "Target directory: " . htmlspecialchars(realpath($extractTo)) . "<br>";
    echo "Starting extraction...<br>";
    
    if ($zip->extractTo($extractTo)) {
        echo "Extraction completed successfully!<br>";
        echo "Closing zip handler...<br>";
        $zip->close();
        echo "Done.<br>";
        echo "</div>";
        
        echo "<div class='status success'>
                <strong>Success!</strong> All files have been extracted successfully.<br>
                Your React/Vite site is now live!
              </div>";
        
        echo "<div class='status info'><strong>Security Cleanup:</strong><br>";
        if (@unlink($zipFile)) {
            echo "✓ Deleted <code>$zipFile</code> to free up space.<br>";
        } else {
            echo "⚠️ Could not auto-delete <code>$zipFile</code>. You can delete it manually via File Manager.<br>";
        }
        
        // Self-destruction of script
        $scriptPath = __FILE__;
        register_shutdown_function(function() use ($scriptPath) {
            @unlink($scriptPath);
        });
        echo "✓ Extractor script <code>unzip.php</code> will auto-delete upon tab exit/reload.</div>";
    } else {
        echo "Extraction failed!<br></div>";
        echo "<div class='status error'>
                <strong>Error:</strong> Failed to extract files.<br>
                This is usually caused by incorrect write permissions on the parent directory. Ensure the folder permissions are set to <code>755</code>.
              </div>";
        $zip->close();
    }
} else {
    echo "</div>";
    echo "<div class='status error'>
            <strong>Error:</strong> Could not open the zip archive.<br>
            The file might be corrupted, incomplete, or not fully uploaded yet. Please delete it, re-upload, and try again.
          </div>";
}

echo "</div>
</body>
</html>";
?>
