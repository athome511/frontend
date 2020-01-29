<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

	//日本語化
mb_language("ja");
mb_internal_encoding("UTF-8");

	//データ受け取り
$company = $_POST["company"];
$name = $_POST["name"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$text = $_POST["text"];

	//問い合わせ企業様向けメール送信
	//問い合わせ内容まとめ
$to      = $email;
$subject = "【メディカルアシストTV株式会社】お問い合わせを受け付けました";
$message = "";
$message .= $company . "\n";
$message .= $name . "様\n";
$message .= "\n";
$message .= "メディカルアシストTV株式会社へのお問い合わせが完了しました。\n";
$message .= "お問い合せ内容を確認させていただきます。\n";
$message .= "▼お問い合わせ内容\n";
$message .= "--------------------------------------------------\n";
$message .= $text . "\n";
$message .= "--------------------------------------------------\n";
$message .= "\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "このメールはメディカルアシストTV株式会社より自動的に送信されています。\n";
$message .= "▼メディカルアシストTV株式会社\n";
$message .= "https://matv.co.jp \n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "Copyright© 2019 Medical Assist TV Corp. All Rights Reserved.\n";
	$headers = 'From: jo0403jo0403@gmail.com'; //info@matv.co.jp
	//送信処理
	$sendmail = mb_send_mail($to, $subject, $message, $headers);

	//問い合わせ内部向けメール送信
	//問い合わせ内容まとめ
	$to2      = "jo0403jo0403@gmail.com"; //info@matv.co.jp
	$subject2 = "【メディカルアシストTV株式会社】お問い合わせを受け付けました";
	$message2 = "";
	$message2 .= "メディカルアシストTV株式会社へのお問い合わせがありました。\n";
	$message2 .= "お問い合せ内容を確認させていただきます。\n";
	$message2 .= "▼お問い合わせ内容\n";
	$message2 .= "--------------------------------------------------\n";
	$message2 .= $company . "\n";
	$message2 .= $name . "様\n";
	$message2 .= "\n";
	$message2 .= $text . "\n";
	$message2 .= "--------------------------------------------------\n";
	$message2 .= "\n";
	$message2 .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
	$message2 .= "このメールは自動的に送信されています。\n";
	$message2 .= "▼メディカルアシストTV株式会社\n";
	$message2 .= "https://matv.co.jp \n";
	$message2 .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
	$message2 .= "Copyright© 2019 Medical Assist TV Corp. All Rights Reserved.\n";
	$headers2 = 'From: jo0403jo0403@gmail.com'; //info@matv.co.jp
	//送信処理
	$sendmail2 = mb_send_mail($to2, $subject2, $message2, $headers2);
	
	?>
	<!doctype html>
	<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<title>お問い合わせ完了 | 人々のQOLの向上に貢献するMATV</title>
		<!-- commons discription defaultCss -->
		<?php include 'php/default.php'; ?>
		<link rel="stylesheet" media="all" href="css/contact.css">
		<!-- commons responsive js Google Tag Manager -->
		<?php include 'php/headFunction.php'; ?>
	</head>

	<body>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8M69CZ"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<!-- End Google Tag Manager (noscript) -->

			<!-- commons globalmenu -->
			<?php include 'php/header.php'; ?>





			<header>
				<div class="overray">
					<div class="topWrapper">
						<h1>お問い合わせ</h1>
					</div>
				</div>

			</header>

			<p class="pankuzu func"><a href="index.php">ホーム</a><i class="fas fa-chevron-right"></i><a href="contact.php">お問い合わせ</a><i class="fas fa-chevron-right"></i>お問い合わせ完了</p>

			<div class="thx func">
				<h2>お問い合わせが完了しました</h2>
				<p>お問い合わせいただき、ありがとうございます。<br>
				後日、担当者よりご連絡させていただきます。</p>

				<a href="index.php" class="arrow_btn shadow ripple">トップへ戻る<span><i class="fas fa-arrow-circle-right fa-fw"></i></span></a>
			</div>



			<?php include 'php/footer.php'; ?>


		</body>
		</html>
