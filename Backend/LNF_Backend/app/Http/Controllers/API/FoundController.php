<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use App\User;
use App\Found;
use Illuminate\Support\Facades\Auth;
use Validator;

class FoundController extends Controller{
    protected $baseController;
    public function __construct(BaseController $baseController){
        $this->baseController = $baseController;
    }

    public function index(){
        $data = Found::all();
        return $this->baseController->send_response_api($data, "Data retrieved success");
    }

    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'description' => 'required'
        ]);

        if($validator->fails()){
            return $this->baseController->send_error_api($validator->error(), 'Data required');
        }

        $data = array(
            'user_id' => Auth::user()->id,
            'description' => $request->description,
            'image' => $request->image,
            'reward' => $request->reward,
            'location' => $request->location,
            'lat' => $request->lat,
            'lng' => $request->lng,
            'identity' => $request->identity
        );
        $found = Found::create($data);

        if($found){
            return $this->baseController->send_response_api($data, 'Found uploaded');
        }else{
            return $this->baseController->send_error_api($data, 'Upload Found failed');
        }
    }

    public function show($id){
        $data = Found::find($id);
        if($data){
            return $this->baseController->send_response_api($data, 'Data retrieved successfully');
        }else{
            return $this->baseController->send_error_api($data, 'Data not found');
        }
    }

    // public function delete($id){
    //     $found = Found::find($id);
    //     $user = $found->User;
    //     if($user['id'] == Auth::User()->id){
    //         $data = $found->delete();
    //         if($data){
    //             return $this->baseController->send_response_api(null, 'Data deleted');
    //         }else{
    //             return $this->baseController->send_error_api($data, 'Data not deleted');
    //         }
    //     }else{
    //         return $this->baseController->send_error_api($data, 'You cannot delete this found data');
    //     }
    // }
}