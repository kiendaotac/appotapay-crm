<?php

namespace App\Http\Livewire\Dashboard;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketTypeEnum};
use App\Repositories\Contracts\TicketRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Livewire\Component;
use Spatie\Activitylog\Models\Activity;

class Index extends Component
{
    public $shouldLoad = false;
    public $ticketType = TicketTypeEnum::LOCAL;

    public function render(TicketRepository $ticketRepository)
    {
        return view('livewire.dashboard.index', [
            'activities' => !$this->shouldLoad
                ? []
                : Activity::query()
                ->causedBy(auth()->user())
                ->where('created_at', '>=', now()->startOfDay())
                ->latest('id')
                ->limit(10)
                ->get(),
            'ticketLocalTodayCount' => !$this->shouldLoad
                ? 0
                : $ticketRepository
                ->resetCriteria()
                ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria(TicketTypeEnum::LOCAL))
                ->pushCriteria(\App\Repositories\Criteria\TodayCriteria::class)
                ->count(),
            'ticketCallTodayCount' => !$this->shouldLoad
                ? 0
                : $ticketRepository
                ->resetCriteria()
                ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria(TicketTypeEnum::CALL))
                ->pushCriteria(\App\Repositories\Criteria\TodayCriteria::class)
                ->count(),
            'ticketFresh' => $ticketRepository
                ->resetCriteria()
                ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria($this->ticketType))
                ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria(TicketStatusEnum::FRESH))
                ->pushCriteria(\App\Repositories\Criteria\TodayCriteria::class)
                ->count(),
            'ticketProcessing' => $ticketRepository
                ->resetCriteria()
                ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria($this->ticketType))
                ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria(TicketStatusEnum::PROCESSING))
                ->pushCriteria(\App\Repositories\Criteria\TodayCriteria::class)
                ->count(),
            'ticketHighPriority' => $ticketRepository
                ->resetCriteria()
                ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria($this->ticketType))
                ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria(TicketPriorityEnum::HIGH))
                ->pushCriteria(\App\Repositories\Criteria\TodayCriteria::class)
                ->count(),
            'ticketAssignedToYou' => Auth::user()
                ->tickets()
                ->where('type', $this->ticketType)
                ->where('created_at', '>=', today())
                ->count(),
        ]);
    }

    public function startLoading()
    {
        $this->shouldLoad = true;
    }

    public function getTicketIndexRouteProperty()
    {
        return 'ticket.' . Str::of($this->ticketType)->lower()->plural() . '.index';
    }
}
