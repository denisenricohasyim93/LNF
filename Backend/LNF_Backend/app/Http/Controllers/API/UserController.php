<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends Controller
{
    protected $baseController;
    public function __construct(BaseController $baseController){
        $this->baseController = $baseController;
    }

    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){
        if(['email' => $request->input('email'), 'password' => $request->input('password')]){
            
            $user = User::where('email', $request->input('email'))->first();

            if(Hash::check($request->input('password'), $user->password)){
                $success['access_token'] =  $user->createToken('access_token')->accessToken;
                return $this->baseController->send_response_api($success, 'Login success');
            }else{
                return $this->baseController->send_error_api(null, 'Unauthorize');
            }

        }
        else{
            return $this->baseController->send_error_api(null, 'Field cant be blank');
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullname' => 'required',
            'email' => 'required|email',
            'username' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
            'no_telp' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->baseController->send_response_api($validator->error(), 'Data required');          
        }

        $input = $request->all();
        $input['password'] = app('hash')->make($input['password']);
        $user = User::create($input);
        $success['access_token'] =  $user->createToken('access_token')->accessToken;
        $success['name'] =  $user->name;
        $success['username'] = $user->username;
        $success['email'] = $user->email;

        return $this->baseController->send_response_api($success, 'Register Success');
    }

    public function profile(){
        $user = Auth::user();
        return $this->baseController->send_response_api($user, 'Data retrieved successfully');
    }
}