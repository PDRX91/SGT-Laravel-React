<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Student::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'grade' => rand(65, 100),
        'course' => $faker->randomElement(['Comp Sci', 'Calculus', 'Drama', 'Chemistry', 'Biology', 'Vigilante Justice', 'US History', 'English', 'Physical Education']),
        'teacher_ID' => rand(1, 3),
    ];
});
