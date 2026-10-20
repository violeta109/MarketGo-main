
<?php

$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_datos = "marketgo";

$conexion = new mysqli(
    $host,
    $usuario,
    $contrasena,
    $base_datos
);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if (!$conexion->set_charset("utf8mb4")) {
    die("Error al configurar la codificación: " . $conexion->error);
}

?>
