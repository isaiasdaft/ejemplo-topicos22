<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Program;

class ProgramFactory extends Factory
{
    protected $model = Program::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->sentence,
            'description'=>$this->faker->paragraph,
            'key'=>$this->faker->unique()->text(5)
        ];
    }
}