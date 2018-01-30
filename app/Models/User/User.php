<?php

namespace App\Models\User;

use App\Models\BaseModel;

class User extends BaseModel
{
    protected $table = 'users';
    protected $primaryKey = 'id';

    protected $fillable = [
        'username',
        'password',
        'first_name',
        'last_name',
        'email',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by'
    ];
}