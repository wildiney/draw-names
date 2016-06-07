<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sorteio Ciab</title>

        <link href="vendor/twbs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="css/layout.css" rel="stylesheet" type="text/css">

    </head>
    <body role="document">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <img id="logo" src="img/logo-indra.png" width="150" alt=""/>
                </div>
                <div class="col-md-6 col-sm-6">
                    <h1>Formulário de Cadastro</h1>
                    <!--// p class="lead"></p //-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <?php
                    echo "<pre>";
                    var_dump($_POST);
                    echo "</pre>";
                    ?>

                    <p class="redirecting">Redirecionando em<br><span id="segundos"></span>
                </div>
            </div>
        </div>

        <!--// SCRIPTS //-->
        <script src="vendor/components/jquery/jquery.min.js" type="text/javascript"></script>
        <script src="vendor/twbs/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/jquery-masked-input-1.4.1/jquery.maskedinput.min.js" type="text/javascript"></script>
        <script src="js/scripts.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                countdown();
            });

        </script>
    </body>
</html>
