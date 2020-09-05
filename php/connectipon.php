<?php

if (isset($_GET['u_name']))
{
    echo "Значение JavaScript-переменной: ". $_GET['u_name'];
}

else
{
    echo '<script type="text/javascript">';
    echo 'document.location.href="' . $_SERVER['REQUEST_URI'] . '?u_name=" + userName2';
    echo '</script>';
    exit();
}

// $name = 'Юрий';

// $host = 'localhost'; // адрес сервера 
// $database = 'yt'; // имя базы данных
// $user = 'root'; // имя пользователя
// $password = ''; // пароль

// // подключаемся к серверу
// $link = mysqli_connect($host, $user, $password, $database) 
//     or die("Ошибка " . mysqli_error($link));
 
// // выполняем операции с базой данных
     
// // закрываем подключение
// mysqli_close($link);
?>