<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentsController extends Controller
{
    public function index(Request $request) {
        // $students = $request->ID;
        $students = Student::where('teacher_ID', $request->ID)->get();
        return response()->json($students);
    }
}
