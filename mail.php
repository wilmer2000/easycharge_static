<?php

  $reason = $_POST['reason'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mail = $_POST['mail'];
  $comment = $_POST['comment'];
  $message = '';

  $to  = 'hola@easycharge.com.uy';
  $subject = $reason.' - Contacto desde la Página de EasyCharge';

  // mensaje
  // $message = '<p><strong>Nombre: <strong> {$name}</p><p><strong>Teléfono: <strong> {$phone}</p><p><strong>Email: <strong> {$mail}</p><p><strong>Comentario: <strong> {$comment}</p>';
  // $message = '{$name} {$phone} {$mail} {$comment}';
  $message ="Motivo de contacto: ".$reason."\rNombre: ".$name."\rTeléfono: ".$phone."\rEmail: ".$mail."\rComentarios: ". $comment ;
    

  // Para enviar un correo HTML, debe establecerse la cabecera Content-type
  $headers = "De: " . $_POST["name"] . "<". $_POST["mail"] .">\r\n";

// Enviarlo
mail($to, $subject, $message, $headers);

?>