<?php 

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$mail->SMTPDebug = 3;                               // Enable verbose debug output


  
$today = date("d.m.y");

$phone=$_REQUEST['tel'];
if($phone){
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'site-noreply@amulex.ru'; // Ваш логин от почты с которой будут отправляться письма
	$mail->Password = 'BCBD86jhgVqzqrDjQK7v'; // Ваш пароль от почты с которой будут отправляться письма
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
	$mail->setFrom('site-noreply@amulex.ru'); // от кого будет уходить письмо?
	//$mail->addAddress('nalog-call@amulex.ru'); 
	$mail->addAddress('asamoylo@amulex.ru'); 
	


	$mail->isHTML(true); 
	$mail->Subject = "«Перезвонить для бесплатной консультации – лендинг возврат товара»"; // Заголовок письма
	$mail->Body = "Телефон - ".$phone."\r\n";; // Текст письма
	// Результат
	if(!$mail->send()) {
	 echo 'Message could not be sent.';
	 echo 'Mailer Error: ' . var_dump($mail->ErrorInfo);
	} else {
	 echo 'ok';
	}
	
}
?>
