<?php

require_once("LeitorSQL.php");

$arquivo = $_FILES['arquivos'];
$arquivo_tmp = $arquivo['tmp_name'];
$arquivo_size = $arquivo['size'];
$arquivo_name = explode('.', $arquivo['name']);
$extensao = strtolower(end($arquivo_name));
echo "<br>";

if ($extensao != "sql"){
    header("location: formUpload.php?erro=0");

}   
else{
    echo "Extensão: ".$extensao;
}
echo "<br>";
echo "Tamanho: ".$arquivo_size." Kbytes";
echo "<br>";
echo "Nome do arquivo: ".$arquivo_name[0];
echo "<br>";

move_uploaded_file(
    $arquivo_tmp,
    $arquivo["name"]
);

$leitor = new LeitorSQL($arquivo["name"]);  