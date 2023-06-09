<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>CandyLand</title>
        <meta name="Description" content="This is a user login project created using Vue and PHP object oriented programming.">
        <script src="https://unpkg.com/vue@3"></script> 
        <script src="https://cdn.tailwindcss.com"></script> 
        <link rel="stylesheet" href="./assets/dist/css/styles.css">
    </head>
    <body class="homeBody">
    <h1 class="welcomeSign">Welcome to CandyLand</h1>
        <div id="app" class="page">
        </div> 

        <script type="module">
            import App from './js/components/App.js';

            Vue.createApp(App).mount('#app');
        </script>
    </body>
</html>