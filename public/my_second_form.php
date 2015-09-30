

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>My Second HTML Form</title>
</head>
<body>

	
  <h1>GET</h1>
  <?php var_dump($_GET); ?>

  <h1>POST</h1>
  <?php var_dump($_POST); ?>

	<p>Welcome <em>Guest</em></p>
	
	<h2>Search</h2>
	<form method="GET" action="/my_second_form.php">
		<label for="Search">Search</label>
		<input id="Search" name="Search" type="text" placeholder="search here" required autofocus>
	</form>

	<h2>Log in Form</h2>
	<form method="POST" action="/my_second_form.php">
		<label for="username">Username</label>
		<input id="username" name="username" type="text" placeholder="username here" required autofocus>
	</form>
	
	<h2>Sign-up Form</h2>
	<form method="POST" action="/my_second_form.php">
		<label for="name">Name</label>
		<input id="name" name="name" type="text" placeholder="name here" required autofocus>
	<br>
	<br>
		<label for="email">Email</label>
		<input id="email" name="email" type="email" placeholder="email here" required autofocus>
	<br>
	<br>
		<label for="username">Username</label>
		<input id="username" name="username" type="username" placeholder="username here" required autofocus>
	<br>
	<br>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" placeholder="password here" required autofocus>
	</form> 

	<h2>Contact Me</h2>
	<form method="POST" action="/my_second_form.php">
		<label for="address">Address</label>
		<input id="address" name="address" type="address" placeholder="address here" required autofocus>
	<br>
	<br>
		<label for="subject">Subject</label>
		<input id="subject" name="subject" type="Subject" placeholder="subject here" required autofocus>
	<br>
	<br>
		<label for="body">Body</label>
		<textarea id="body" name="body" type="text" placeholder="message here" required autofocus></textarea>
	</form>
</body>