<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>

<header>
    <h1>Cadastro de clientes | TechConnect</h1>
</header>

<main class="text">
<?php
$nome = $_GET["nome"];
$email = $_GET["email"];
$mensagem = $_GET["mensagem"];

echo '<p>É um prazer te conhecer, a TechConnect agradece $nome! Entraremos em contato com você!</p>';
?>
<button class="text-js">
    <a href="javascript:history.go(-1)">Voltar para página anterior</a>
</button>


</main>



</body>
</html>