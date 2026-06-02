<?php
if (isset($_GET["erro"])) {
    switch ($_GET["erro"]) {
        case 0:
            echo "Apenas arquivos SQL";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Framework MVC</title>
</head>

<body>

    <form action="lerArquivo.php"
        method="post"
        enctype="multipart/form-data">
        <label for="arquivo">
            Envie seu arquivo SQL
        </label>
        <input
            type="file"
            name="arquivos"
            id="arquivo"
            required>

        <button type="submit">
            Enviar
        </button>

    </form>

</body>

</html>