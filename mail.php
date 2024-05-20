<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "yeseniaaag9@gmail.com"
$subject = "Mail From Website"

$headers = "From: ".$name. "\r\n" .
"CC: yesenia10.gz@gmail.com";

$txt = "You have recieved an email from ".$name ."\r\nEmail: " .$email ."\r\nMessage: ". $message;

if($email!=NULL){
    mail($to, $subject, $txt, $headers);
}

header('Location:thankyou.html');

?>