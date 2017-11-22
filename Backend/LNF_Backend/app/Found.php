<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Found extends Model
{
    protected $fillable = [
        'description', 'image', 'reward', 'location', 'lat', 'lng', 'identity', 'id_user',
    ];


    public function user(){
        return $this->belongsTo('App\User');
    }
}
