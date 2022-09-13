<?php
function sendMsg() {
		require_once "vendor/autoload.php";
	  $basic  = new \Vonage\Client\Credentials\Basic('11bf985f', 'Lz2BGMfENGZIv9bi');
	  $client = new \Vonage\Client($basic);

    if (isset($_POST['htmlMsg'])) {
      $message1 = $_POST['htmlMsg'];
    } else {
      $message1 = 'No valid link generated ';
    }

    $message2 = 'Safe travels!';
    $message = $message1." ".$message2;

		$text = new \Vonage\SMS\Message\SMS('19564595298', '12406808726', $message);
		$text->setClientRef('test-message');
		$response = $client->sms()->send($text);
	}

	sendMsg();
?>
