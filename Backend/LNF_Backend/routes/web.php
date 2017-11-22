<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key',function(){
    return str_random(32);
});

$router->post('/login' , 'API\UserController@login');
$router->post('/register', 'API\UserController@register');
$router->get('/user/{id}', ['middleware' => 'auth', 'uses' =>  'UserController@get_user']);
/////////////////////////////////////////////////////////////////////
/* Lost Route */
$router->get('/lost', 'API\LostController@index');
$router->get('/show-lost/{id}', 'API\LostController@show');
$router->post('/create-lost', 'API\LostController@create');
////////////////////////////////////////////////////////////////////
/* Found Route */ 
$router->get('/found', 'API\FoundController@index');
$router->get('/show-found/{id}', 'API\FoundController@show');
$router->post('/create-found', 'API\FoundController@create');