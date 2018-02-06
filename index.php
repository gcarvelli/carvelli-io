<?php
    require_once('vendor/autoload.php');

    $pageContent = json_decode(file_get_contents('me.json'), true);

    $loader = new Twig_Loader_Filesystem('assets/templates/');
    $twig = new Twig_Environment($loader, [
        'cache' => 'cache/',
    ]);
    $template = $twig->load('index.html.twig');

    echo $template->render($pageContent);
