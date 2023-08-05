<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Результаты заявок</title>
</head>
<body>
    <h1>Результаты заявок</h1>
    <table width="100%">
        <tr>
            <td>Имя</td>
            <td>Email</td>
            <td>номер телефона</td>
            <td>Регион</td>
        </tr>
        <?$data = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT']."/sabmitevent.json") , true);
        foreach ($data as $row) {?>
            <tr>
                <?foreach ($row as $col) {?>
                    <td><?=$col?></td>
                <?}?>
            </tr>
        <?}?>
    </table>
</body>
</html>