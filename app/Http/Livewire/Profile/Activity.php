<?php

namespace App\Http\Livewire\Profile;

use Livewire\Component;
use Livewire\WithPagination;
use Spatie\Activitylog\Models\Activity as ModelsActivity;

class Activity extends Component
{
    use WithPagination;

    public $perPage = 10;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        return view('livewire.profile.activity', [
            'activities' => ModelsActivity::query()
                ->causedBy(auth()->user())
                ->latest('id')
                ->simplePaginate($this->perPage)
        ]);
    }
}
