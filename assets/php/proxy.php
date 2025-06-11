<?php
// Recebe a URL da imagem pela query string
$url = $_GET['url'] ?? null;

// Verifica se foi enviada a URL
if (!$url) {
    http_response_code(400);
    echo 'URL inválida.';
    exit;
}

// Faz a requisição da imagem
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Segue redirecionamentos
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // (opcional se tiver erro SSL)
$response = curl_exec($ch);

// Verifica o tipo de conteúdo da imagem
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

curl_close($ch);

// Retorna a imagem com o tipo certo
header("Content-Type: $contentType");
echo $response;
?>