<?php

namespace App\Http\Livewire\User;

use App\Repositories\Contracts\UserRepository;
use Livewire\Component;

class Index extends Component
{
    public $search = '';
    public $perPage = 10;

    protected $queryString = [
        'search' => ['except' => ''],
    ];

    public function render(UserRepository $userRepository)
    {
        return view('livewire.user.index', [
            'users' => $userRepository
                ->skipCache()
                ->filter($this->search)
                ->simplePaginate($this->perPage)
        ]);
    }
}
