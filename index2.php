<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>CandyLand2</title>
        <meta name="Description" content="This is a user login project created using Vue and PHP object oriented programming.">
        <script src="https://unpkg.com/vue@3"></script> 
        <script src="https://cdn.tailwindcss.com"></script> 
        <link rel="stylesheet" href="./assets/dist/css/styles.css">
        <script>
//{ "newVal": [ { "firstName": "t", "lastName": "t", "email": "t2", "userName": "t", "password": "t", "userAgreement": true }, "newUser" ] }
                var userData;
                var newVal = [ { "firstName": "t", "lastName": "t", "email": "t", "userName": "t", "password": "t", "userAgreement": true }, "newUser" ];

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({newVal})
                };

                fetch('./classes/input.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        userData = data;
                        console.log(userData);
                        document.getElementById("test").innerHTML = userData;
                    });
        </script>
    </head>
    <body class="homeBody">
        <h1 class="welcomeSign">Welcome to CandyLand</h1>
            <div id="test"></div>
    </body>
</html>