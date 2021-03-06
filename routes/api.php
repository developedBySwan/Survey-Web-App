<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user',function (Request $request){
        return $request->user();
    });
    Route::resource('/survey',SurveyController::class);

    Route::post('/logout',[AuthController::class,'logout']);
});

Route::post('/register',[AuthController::class,'register']);

Route::post('/login',[AuthController::class,'login']);

