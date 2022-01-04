<?php

namespace App\Http\Livewire\TicketCall;

use App\Enums\CallRoutingEnum;
use App\Models\User;
use App\Services\Facades\Stringee;
use Cache;
use Illuminate\Support\Str;
use Livewire\Component;

class RoutingType extends Component
{
    public $stringee_routing_type;
    public $stringee_routing_phone;
    public $callRoutings;
    public User $user;

    protected $rules = [
        'stringee_routing_type' => 'required',
        'stringee_routing_phone' => '',
    ];

    public function mount()
    {
        $this->callRouting = CallRoutingEnum::APP;
        $this->callRoutings = CallRoutingEnum::VALUE;
        $this->user = User::find(auth()->id());
        [
            'stringee_routing_type' => $this->stringee_routing_type,
            'stringee_routing_phone' => $this->stringee_routing_phone
        ] = $this->user->only(['stringee_routing_type', 'stringee_routing_phone']);
    }

    public function render()
    {
        return view('livewire.ticket-call.routing-type');
    }

    public function save()
    {
        $this->stringee_routing_phone = Str::normalizePhone($this->stringee_routing_phone);
        $this->user->fill([
            'stringee_routing_type' => $this->stringee_routing_type,
            'stringee_routing_phone' => $this->stringee_routing_phone
        ]);
        $this->user->save();
        Stringee::updateAgent($this->user);
        $this->emit('stringee-routing-info-saved');
    }
}
