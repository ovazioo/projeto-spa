<?php
// Permitir CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Valida a URL recebida
if (!isset($_GET['url'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing url parameter']);
    exit;
}

$url = filter_var($_GET['url'], FILTER_VALIDATE_URL);
if (!$url) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid URL']);
    exit;
}

// Inicializa CURL
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Header opcional
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'User-Agent: Mozilla/5.0'
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

curl_close($ch);

http_response_code($httpcode);

// Define o Content-Type corretamente (JSON ou imagem, se necessário)
if (strpos($contentType, 'application/json') !== false) {
    header('Content-Type: application/json; charset=utf-8');
} else {
    header("Content-Type: $contentType");
}

// Retorna o conteúdo original
echo $response;
?>
