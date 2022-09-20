<?php
   
if (isset($_POST['submit'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    if (!empty($nombre)) {
        $nombre = trim($nombre);
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
    }
    if (!empty($correo)) {
        $correo = filter_var($correo, FILTER_SANITIZE_EMAIL);
    }
    if (!empty($asunto)) {
        $asunto = trim($asunto);
        $asunto = filter_var($asunto, FILTER_SANITIZE_STRING);
    }
    if (!empty($mensaje)) {
        $mensaje = htmlspecialchars($mensaje);
        $mensaje = trim($mensaje);
        $mensaje = stripcslashes($mensaje);
    }
    $enviar_a = "marhiscarballo@gmail.com"; 
    $subject = $asunto;
    $mensaje_preparado = "
        <br/>
        $mensaje
        <br/>
        ";
        
    $enviado = "gracias-por-escribir.html";

    $headers  = "From: $nombre <$correo>\nReply-To:$correo\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    mail($enviar_a, $subject, $mensaje_preparado, $headers); 
    header("location: ".$enviado);
}   

?>