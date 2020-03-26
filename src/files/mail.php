<?php 

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
/*
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$filename = basename($_FILES['upload']['name']);
$ext = substr($filename, strrpos($filename, '.') + 1);*/

//$mail->SMTPDebug = 3;                               // Enable verbose debug output


  
$today = date("d.m.y");

$phone=$_POST['phone'];


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'site-noreply@amulex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'BCBD86jhgVqzqrDjQK7v'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('site-noreply@amulex.ruн'); // от кого будет уходить письмо?
$mail->addAddress('levitinn@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment($_FILES['uploaded_file']['tmp_name'], /*"$name.$ext"*/ $filename);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = "«Перезвонить для бесплатной консультации – лендинг возврат товара»";
$txt = "Телефон - ".$_POST['phone']."\r\n"; 
$headers = "From: amulex-no-replay@amulex.ru" . "\r\n";

if(!$mail->send()) {
    echo "Thanks you!";
} else {
	echo 'Hello!';
    // echo "<script>parent.fileUploaded();</script>";

}
?>
