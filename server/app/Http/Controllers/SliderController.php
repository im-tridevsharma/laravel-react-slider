<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    //getSliders
    function getSliders($id = null){
        if($id){
            $data = Slider::find($id);
            if($data->exists()){
                return response()->json(['status'=>'success','data'=>$data], 200);
            }else{
                return $data;
            }
        }else{
            return Slider::all();
        }
    }

    //create new slider
    function createSlider(Request $req){
        $rules = [
            'title' => 'required|string|max:200|min:20',
            'description' => 'required|string|max:300',
            'image' => 'required|mimes:jpg,jpeg,png'
        ];
        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json(["errors" => $validator->errors()],200);
        }

        $slider = new Slider;
        $slider->title = $req->title;
        $slider->description = $req->description;
        $slider->image = $req->image->store("sliders","public");

        $data = $slider->save();

        return response()->json(["status" => "success", "data" => $data], 200);
    }

    //updateSlider
    function updateSlider(Request $req){
        $rules = [
            'title' => 'required|string|max:200|min:20',
            'description' => 'required|string|max:300'
        ];
        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json(["errors" => $validator->errors()],200);
        }

        $slider = Slider::find($req->id);
        $slider->title = $req->title;
        $slider->description = $req->description;

        if($req->hasFile('image')){
            $slider->image = $req->image->store("sliders","public");
        }

        $data = $slider->save();

        return response()->json(["status" => "success", "data" => $data], 200);
    }

    //deleteSlider
    function deleteSlider($id){
        if(!empty($id)){
            $slider = Slider::find($id);
            if($slider->exists()){
                if(file_exists(public_path('storage/'.$slider->image))){
                    unlink(public_path('storage/'.$slider->image));
                }
                $slider->delete();
                return response()->json(['status' => "success", "data" =>true],200);
            }else{
                return response()->json(['errors' => "Slider not found."], 401);
            }
        }else{
            return response()->json(['errors' => "Id is not provided."], 401);
        }
    }
}
