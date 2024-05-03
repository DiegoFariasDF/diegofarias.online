<?php
    $nome = addcslashes($_POST("nome"));
    $email = addcslashes($_POST("email"));
    $mensagem = addcslashes($_POST("mensagem"));

    $para = "diego.dev@diegofarias.online";
    $assunto = "Contato - Portfolio";

    $corpo = "Nome: ".$nome."\n"."E-mail".$email."\n"."Mensagem".$mensagem;

    $cabeca = "From: diegofariaspl@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("Email enviado com sucesso!");
    }
    else{
        echo("Houve um erro ao enviar o e-mail!")
    }

?>