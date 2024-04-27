<form method="post" action="subscriberform.php">
<textarea name="message"></textarea>
<input type="submit">
</form>

<?php
if($_POST["Message"]) {
mail("yeseniag9@hotmail.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: jane@janedoe.com");
}
?>