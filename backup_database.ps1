# Simple database backup script for Windows

# Configuration
$DB_NAME = "app_database"
$BACKUP_DIR = "C:\Backups\DB"
$DATE = Get-Date -Format "yyyyMMdd_HHmmss"
$FILENAME = Join-Path $BACKUP_DIR "$DB_NAME`_$DATE.sql.gz"

# Create backup directory if it doesn't exist
if (-not (Test-Path $BACKUP_DIR)) {
    New-Item -ItemType Directory -Path $BACKUP_DIR -Force
    Write-Host "Created directory $BACKUP_DIR"
}

# Perform the backup
Write-Host "Starting backup of $DB_NAME..."

try {
    # Using 7-Zip for compression (make sure 7-Zip is installed)
    # If you don't have 7-Zip, you can use .NET's GZipStream
    mysqldump -u root -p "$DB_NAME" | & 'C:\Program Files\7-Zip\7z.exe' a -tgzip -si"$FILENAME"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Backup successful: $FILENAME"
    } else {
        throw "Backup failed with exit code $LASTEXITCODE"
    }
} catch {
    Write-Error "Backup failed: $_"
    exit 1
}

# Alternative method using .NET's GZipStream if 7-Zip is not available
<#
try {
    $dump = mysqldump -u root -p "$DB_NAME"
    $dump | ForEach-Object {
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($_)
        $ms = New-Object System.IO.MemoryStream
        $gzip = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionMode]::Compress)
        $gzip.Write($bytes, 0, $bytes.Length)
        $gzip.Close()
        [System.IO.File]::WriteAllBytes($FILENAME, $ms.ToArray())
    }
    Write-Host "Backup successful: $FILENAME"
} catch {
    Write-Error "Backup failed: $_"
    exit 1
}
#> 