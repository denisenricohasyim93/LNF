<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use App\Http\Middleware\Authenticate;
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
     * Index login controller
     *
     * When user success login will retrive callback as api_token
     */
    public function login(Request $request)
    {
        $hasher = app()->make('hash');
        $email = $request->input('email');
        $password = $request->input('password');
        $login = User::where('email', $email)->first();
        if (!$login) {
            $res['success'] = false;
            $res['message'] = 'Your email or password incorrect!';
            return response($res);
            // dd($login);
        }else{
            if ($hasher->check($password, $login->password)) {
                $remember_token = sha1(time());
                $create_token = User::where('id', $login->id)->update(['remember_token' => $remember_token]);
                if ($create_token) {
                    $res['success'] = true;
                    $res['remember_token'] = $remember_token;
                    $res['message'] = $login;
                    return response($res);
                }
            }else{
                $res['success'] = true;
                $res['message'] = 'You email or password incorrect!';
                return response($res);
            }
        }
    }

     /**
    * Register new user
    *
    * @param $request Request
    */
   public function register(Request $request)
   {
       $hasher = app()->make('hash');
       $fullname = $request->input('fullname');
       $username = $request->input('username');
       $password = $hasher->make($request->input('password'));
       $email = $request->input('email');
       $no_telp = $request->input('no_telp');
       $address = $request->input('address');
       $image = $request->file('image');       
       $register = User::create([
           'fullname' => $fullname,
           'username' => $username,
           'password' => $password,
           'email' => $email,
           'no_telp' => $no_telp,
           'address' => $address,
           'image' => $image
       ]);
       if ($register) {
           $res['success'] = true;
           $res['message'] = 'Success register!';
           return response($res);
       }else{
           $res['success'] = false;
           $res['message'] = 'Failed to register!';
           return response($res);
       }
   }

    public function profile(){
        $user = Auth::user();
        return $this->baseController->send_response_api($user, 'Data retrieved successfully');
    }

    public function get_user(Request $request, $id)
    {
        $user = User::where('id', $id)->get();
        if ($user) {
              $res['success'] = true;
              $res['message'] = $user;
        
              return response($res);
        }else{
          $res['success'] = false;
          $res['message'] = 'Cannot find user!';
        
          return response($res);
        }
    }
}