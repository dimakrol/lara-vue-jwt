<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/register', 'AuthController@register');

Route::post('auth/login', 'AuthController@login');

Route::group(['middleware' => 'api'], function() {
    Route::get('auth/user', 'AuthController@user');
});

Route::group(['middleware' => 'api'], function(){
    Route::get('auth/refresh', 'AuthController@refresh');
    Route::post('auth/logout', 'AuthController@logout');

    Route::resource('notes', 'NotesController');

    Route::put('/notes/{note}/toggleFavourite', 'NotesController@toggleFavourite');
});



//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
