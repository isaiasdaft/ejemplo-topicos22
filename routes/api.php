<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PassportAuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//laravel passport
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

//back-end
Route::get('/users', [UserController::class, 'store']);
Route::post('/student_store', [StudentController::class, 'store']);
Route::get('/show_token', [StudentController::class, 'showToken']);
Route::post('/show_students', [ProgramController::class, 'show_students_by_program']);
Route::delete('/delete_students', [StudentController::class, 'delete']);
Route::post('/update_students', [StudentController::class, 'update']);

Route::post('/show_users', [UserController::class, 'show_test']);
Route::get('/show_email', [UserController::class, 'email_student']);
