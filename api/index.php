<?php

/**
 * endpoint links
 *
 * This index page allows the api to identify the different endpoints for the app to connect to.
 * If a path is entered that is unknown, the error "error 404, path not found" should be returned.
 * This page also holds the secret key which is used to create the JWT.
 *
 * @author Kelsey Andrews, John Rooksby
 */

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

define('SECRET', "6z5UZcqTB^rPJ{bQXgjP8Hce]%z>ZT");

include 'config/autoloader.php';
spl_autoload_register('autoloader');

include 'config/exceptionhandler.php';
set_exception_handler('exceptionHandler');

$path = parse_url($_SERVER['REQUEST_URI'])['path'];
$path = str_replace("year3/assignment/api/", "", $path);

try {
    switch($path) {
        case '/':
            $endpoint = new Base();
            break;
        case '/authors/':
        case '/authors':
            $endpoint = new Authors();
            break;
        case '/papers/':
        case '/papers':
            $endpoint = new Papers();
            break;
        case '/auth/':
        case '/auth':
            $endpoint = new Authenticate();
            break;
        case '/update/':
        case '/update':
            $endpoint = new update();
            break;
        case '/documentation/':
        case '/documentation':
            $endpoint = new Documentation();
            break;
        default:
            $endpoint = new ClientError("Path not found: " . $path, 404);

    }
}
catch(ClientErrorException $e) {
    $endpoint = new ClientError($e->getMessage(), $e->getCode());
}

$response = $endpoint->getData();
echo json_encode($response);