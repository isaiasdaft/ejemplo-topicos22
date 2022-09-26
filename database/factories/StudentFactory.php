<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;
use App\Models\Program;

class StudentFactory extends Factory
{
    protected $model = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->firstname(),
            'last_name'=>$this->faker->lastname(),
            'email'=>$this->faker->unique()->safeEmail(),
            'semester'=>$this->faker->numberBetween(1, 10),
            'program_id'=> Program::all()->random()->id,
        ];
    }
}
