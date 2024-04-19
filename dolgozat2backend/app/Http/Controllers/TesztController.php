<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;

class TesztController extends Controller
{
    public function getAll() {;
        return Teszt::all();
    }

    public function getByCategoryId($id) {;
        return Teszt::all()->where("kategoriaId", "=",$id);
    }
}
