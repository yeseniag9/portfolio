<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" type="text/css" href="main.css">
<title>Title</title>
</head>
<body>
<?php
    if(!empty($_POST["send"])){
        $userName = $_POST["userName"];
        $userEmail = $_POST["userEmail"];
        $userMessage = $_POST["userMessage"];
        $toEmail = "yeseniaaag9@gmail.com";

        $mailHeaders = "Name: " . $userName .
        "\r\n Email: " . $userEmail .
        "\r\n Message: " . $userMessage . "\r\n";

        if(mail($toEmail, $userName, $mailHeaders)){
            $message = "Your Information is Recieved Successfully."
        }
    }

?>

<form action="contact.php" method="post" name="emailContact">
                <div>
                    <div class="name d-inline-block">
                        <label for="name">Name</label>
                        <input class="name2" placeholder="..." type="text" name="userName" required value="">
                    </div>
                    <div class="email d-inline-block">
                        <label class="email3" for="email">Email</label>
                        <input class="email2" type="email" name="userEmail" required value="">
                    </div>
                </div>
                <div class="message pt-3">
                    <label for="message">Message</label>
                    <textarea class="message" type="text" name="userMessage" required value=""></textarea>
                </div>
                <div class="d-flex justify-content-center p-4">
                    <div>
                        <input class="form-button text-uppercase" name="send" type="submit" value="Submit">
                        <?php if(!empty($message)){ ?>
                        <div class="success">
                            <strong><?php echo $message; ?></strong>
                        </div>
                        <?php } ?>
                    </div>   
                </div>
            </form> 

</body>
</html>