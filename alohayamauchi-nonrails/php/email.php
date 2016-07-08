<?php 
	require_once('http://www.alohayamauchi.com/php/class.phpmailer.php');
	include("http://www.alohayamauchi.com/php/class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

	$mail = new PHPMailer();
	//the message 
	if(isset($_POST['email_submit'])) {
		$to = "jared.yamauchi@gmail.com"; //this will be sent to your email address
		$from = $_POST['sender_email']; //this will be sent to the sender's email address
		$sender_name = $_POST['sender_name'];
		$subject = "Form Submission";
		$subject2 = "Copy of your form submission";
		$message = $sender_name . " wrote the following:" . "\n\n" . $_POST['email_message'];
		$message2 = "Here is a copy of your message " . $sender_name . "\n\n" . $_POST['email_message'];

		$headers = "From:" . $from;
		$headers2 = "From:" . $to; 
		mail($to, $subject, $message, $headers);
		mail($from, $subject2, $message, $headers2); //sends a copy of the message to the sender
		header("Location: http://www.alohayamauchi.com");
		die();
	}
	else {
		header("Location: http://www.alohayamauchi.com");
		die();
	}

?>