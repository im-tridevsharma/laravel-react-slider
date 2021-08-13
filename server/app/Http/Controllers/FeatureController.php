<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feature;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class FeatureController extends Controller
{
    //getFeatures
    function getFeatures($id = null){
        if($id){
            $data = Feature::find($id);
            if($data->exists()){
                return response()->json(['status'=>'success','data'=>$data], 200);
            }else{
                return $data;
            }
        }else{
            return Feature::all();
        }
    }

    //create new feature
    function createFeature(Request $req){
        $rules = [
            'title' => 'required|string|max:200|min:10',
            'description' => 'required|string|max:300',
            'image' => 'required|mimes:jpg,jpeg,png'
        ];
        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json(["errors" => $validator->errors()],200);
        }

        $feature = new Feature;
        $feature->title = $req->title;
        $feature->description = $req->description;
        $feature->image = $req->image->store("features","public");

        $data = $feature->save();

        return response()->json(["status" => "success", "data" => $data], 200);
    }

    //updateSlider
    function updateFeature(Request $req){
        $rules = [
            'title' => 'required|string|max:200|min:10',
            'description' => 'required|string|max:300'
        ];
        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json(["errors" => $validator->errors()],200);
        }

        $feature = Feature::find($req->id);
        $feature->title = $req->title;
        $feature->description = $req->description;

        if($req->hasFile('image')){
            $feature->image = $req->image->store("features","public");
        }

        $data = $feature->save();

        return response()->json(["status" => "success", "data" => $data], 200);
    }

    //deleteSlider
    function deleteFeature($id){
        if(!empty($id)){
            $feature = Feature::find($id);
            if($feature->exists()){
                if(file_exists(public_path('storage/'.$feature->image))){
                    unlink(public_path('storage/'.$feature->image));
                }
                $feature->delete();
                return response()->json(['status' => "success", "data" =>true],200);
            }else{
                return response()->json(['errors' => "Feature not found."], 401);
            }
        }else{
            return response()->json(['errors' => "Id is not provided."], 401);
        }
    }
}
