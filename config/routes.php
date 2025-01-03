<?php

if(isset($_GET['pagina'])){
    $pagina = $_GET["pagina"];
}
else{
    $pagina = 'home';
}

switch ($pagina){

        case "comunicacao": include("views/comunicacao.php"); break;
        case "documentos": include("views/documentos.php"); break;
        case "documentos-gp": include("views/documentos-rh.php"); break;

        default: include("views/home.php"); break;
    } 
?>