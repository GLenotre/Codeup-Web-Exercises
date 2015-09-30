<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>My First HTML Form</title>
</head>
<body>
	<h1>Welcome to the <em>Jungle</em></h2>
	
	<form method="POST" action="/my_first_form.php">
    <h2>User Login</h2>
    <p>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" placeholder="input name here" required autofocus>
    </p>
    <p>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="input password here" required autofocus>
    </p>
    <p>
        <button type="submit">Login</button>
    </p>
    </form>

    <br>

    <form method="POST" action="/my_first_form.php">
    <h2>Compose an Email</h2>
    
    <p>
        <label for="to">To:</label>
        <input id="to" name="to" type="email" placeholder="input address" required autofocus>
    </p>
    <p>
        <label for="from">From:</label>
        <input id="from" name="from" type="email" placeholder="input address" required autofocus>
    </p>
    <p>
        <label subject="subject">Subject</label>
        <input id="subject" name="from" type="text" placeholder="input subject" required autofocu>
    </p>
    <p>
        <label subject="body">Body</label>
        <input id="subject" name="from" type="text" placeholder="input message" required autofocus>
    </p>
    <p>
        <button type="send">Send</button>
    </p>
    <br>
        <input type="checkbox" id="mailing_list" name="mailing_list" value="yes" checked>
        <label for-"mailing_list">Do you want to save a copy in your sent folder?</label>
    </form>

    <form method="GET" action="/my_first_form.php">
    <h2>Multiple Choice Test</h2>
    <p> Which animal is not in the SA zoo?</p>
    <label>
        <input type="radio" name="q1" value="Cheetah">
        Cheetah
    </label>
    <label>
        <input type="radio" name="q1" value="Parakeet">
        Parakeet
    </label>
    <label>
        <input type="radio" name="q1" value="Elephant">
        Elephant
    </label>
    <label>
        <input type="radio" name="q1" value="Human">
        Human
    </label>

    <p>Which city is the second largest in Texas?</p>
    <label>
        <input type="radio" name="q2" value="Austin">
        Austin
    </label>
    <label>
        <input type="radio" name="q2" value="Dallas">
        Dallas
    </label>
    <label>
        <input type="radio" name="q2" value="San Antonio">
        San Antonio
    </label>
    <label>
        <input type="radio" name="q2" value="Houston">
        Houston
    </label>
    
    <p>What's the average temperature of San Antonio in September?</p>
    <label>
        <input type="checkbox" id="os1" name="os[]" value="70">
        70
    </label>
    <label>
        <input type="checkbox" id="os1" name="os[]" value="75">
        75
    </label>
    <label>
        <input type="checkbox" id="os1" name="os[]" value="80">
        80
    </label>
    <label>
        <input type="checkbox" id="os1" name="os[]" value="85">
        85
    </label>
    <p>What attractions and activities does San Antonio have?</p>
    <label>
        <input type="checkbox" id="os2" name="os[]" value="Sea World">
        Sea World
    </label>
    <label>
        <input type="checkbox" id="os2" name="os[]" value="Geekdom">
        Geekdom
    </label>
    <label>
        <input type="checkbox" id="os2" name="os[]" value="Snowboarding">
        Snowboarding
    </label>
    <label>
        <input type="checkbox" id="os2" name="os[]" value="Fly Fishing">
        Fly Fishing
    </label>
    <p>
        <label for="river">What river flows through San Antonio?</label>
        <select id="river" name="river[]" multiple>
            <option value="Colorado">Colorado River</option>
            <option value="Trinity">Trinity River</option>
            <option value="San Antonio">San Antonio River</option>
            <option value="Sabine">Sabine River</option>
        </select>
    </p>
    <p>

        <button type="submit">Submit</button>
    </p>

    <form>
        <h2>Select Testing</h2>
        <label for="city">Select your city: </label>
        <select id="city" name="city">
            <option value="0">
            Yes
            <option value="1">
            No
        </select>
    <p>
        <button type="submit">Submit</button>
    </p>
    </form>


</body>