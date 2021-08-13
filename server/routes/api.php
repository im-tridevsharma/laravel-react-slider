<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\FeatureController;
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

Route::get('sliders/{id?}', [SliderController::class, 'getSliders']);
Route::post('sliders', [SliderController::class, 'createSlider']);
Route::post('sliders/{id}', [SliderController::class, 'updateSlider']);
Route::delete('sliders/{id}', [SliderController::class, 'deleteSlider']);


Route::get('features/{id?}', [FeatureController::class, 'getFeatures']);
Route::post('features', [FeatureController::class, 'createFeature']);
Route::post('features/{id}', [FeatureController::class, 'updateFeature']);
Route::delete('features/{id}', [FeatureController::class, 'deleteFeature']);
