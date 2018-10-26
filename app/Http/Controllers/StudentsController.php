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

    public function store(Request $request) {
        $student = new Student;
        $student->name = $request->name;
        $student->grade = $request->grade;
        $student->course = $request->course;
        $student->teacher_ID = $request->ID;
        $student->save();

        return response()->json([
            'message' => 'Create success'
        ], 201);
    }
}
