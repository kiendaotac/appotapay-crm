<?php

namespace Database\Factories;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ticket::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(40),
            'type' => $this->faker->randomElement(\App\Enums\TicketTypeEnum::KEY),
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomKey(\App\Enums\TicketStatusEnum::GROUP_LOCAL),
            'priority' => $this->faker->randomKey(\App\Enums\TicketPriorityEnum::VALUE),
            'variant' => $this->faker->randomKey(\App\Enums\TicketVariantEnum::GROUP_LOCAL),
            'is_private' => false,
            'customer_phone' => $this->faker->randomElement(['02', '03', '08', '09']) . $this->faker->randomNumber(8),
            'customer_email' => $this->faker->email,
        ];
    }
}
