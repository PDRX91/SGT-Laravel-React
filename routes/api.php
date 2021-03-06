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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('students', 'StudentsController@index');
Route::post('/students', 'StudentsController@store');
Route::delete('/students/{student}', 'StudentsController@delete');
Route::put('/students/{student}', 'StudentsController@update');
