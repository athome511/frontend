<?php
	//フォーム初期化
$company = "";
$name = "";
$tel = "";
$email = "";
$text = "";
?>
<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>お問い合わせ | 人々のQOLの向上に貢献するMATV</title>
	<!-- commons discription defaultCss -->
	<?php include 'php/default.php'; ?>
	<link rel="stylesheet" media="all" href="css/contact.css">
	<!-- commons responsive js Google Tag Manager -->
	<?php include 'php/headFunction.php'; ?>
	<!-- <script src="js/contact.js"></script> -->
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
		<p class="pankuzu func"><a href="index.php">ホーム</a><i class="fas fa-chevron-right"></i>お問い合わせ</p>


		<div class="contactText func">
			<p>弊社にご関心をお持ちいただきまして、ありがとうございます。<br>
				ご意見・ご相談、料金のお見積もりなど、お気軽にお問合わせください。<br>
			お問合せ内容の確認後、担当者よりご連絡させていただきます。</p>

			<h2><span>お問い合わせフォーム</span></h2>
		</div>


		<!-- 問い合わせ -->
		<div class="contact grayBg func">
			<form action="complete.php" method="post">
				<div class="contactForm">
					<label>会社名</label>
					<input
					id="company"
					type="text"
					name="company"
					placeholder="メディカルアシストTV株式会社"
					required
					>
				</div>
				
				<div class="contactForm">
					<label>お名前</label>
					<input
					id="name"
					type="text"
					name="name"
					placeholder="メディカル 太郎"
					required
					>
				</div>
				

				<div class="contactForm">
					<label>電話番号</label>
					<input
					id="tel"
					type="tel"
					name="tel"
					placeholder="0123-456-789"
					pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
					title="0123-456-789"
					required
					>
				</div>
				
				<div class="contactForm">
					<label>メールアドレス</label>
					<input
					id="email"
					type="email"
					name="email"
					placeholder="info@matv.jp"
					maxlength="50"
					required
					>
				</div>
				<div class="contactForm">
					<label>お問い合わせ内容</label>
					<textarea
					id="text"
					type="textarea"
					name="text"
					placeholder="ここにお問い合わせ内容をご記入ください。"
					maxlength="500"
					required
					></textarea>
				</div>
				

				<p class="checkBox">
					<label for="agree">
						<input type="checkbox" id="agree" value="true" required>
						<span><a href="privacyPolicy.php" target="_blank">個人情報取扱</a>に同意する</span>
					</label>
				</p>
				<button id="send" type="submit" name="button" class="active shadow">送信</button>
			</form>
		</div>

		<!-- commons globalmenu -->
		<?php include 'php/footer.php'; ?>
	</div>
</body>
</html>
