<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use App\User;
use App\Lost;
use Illuminate\Support\Facades\Auth;
use Validator;

class LostController extends Controller{
    protected $baseController;
    public function __construct(BaseController $baseController){
        $this->baseController = $baseController;
    }

    public function index(){
        $data = Lost::all();
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
        $lost = Lost::create($data);

        if($lost){
            return $this->baseController->send_response_api($data, 'Lost uploaded');
        }else{
            return $this->baseController->send_error_api($data, 'Upload Lost failed');
        }
    }

    public function show($id){
        $data = Lost::find($id);
        if($data){
            return $this->baseController->send_response_api($data, 'Data retrieved successfully');
        }else{
            return $this->baseController->send_error_api($data, 'Data not found');
        }
    }

    public function delete($id){
        $lost = Lost::find($id);
        $user = $lost->User;
        if($user['id'] == Auth::User()->id){
            $data = $lost->delete();
            if($data){
                return $this->baseController->send_response_api(null, 'Data deleted');
            }else{
                return $this->baseController->send_error_api($data, 'Data not deleted');
            }
        }else{
            return $this->baseController->send_error_api($data, 'You cannot delete this lost data');
        }
    }
}