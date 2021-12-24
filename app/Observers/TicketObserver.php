<?php

namespace App\Observers;

use App\Models\{Ticket, User};
use App\Notifications\TicketAssigned;
use Illuminate\Support\Facades\Notification;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Support\Str;

class TicketObserver
{
    /**
     * Handle the Ticket "created" event.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return void
     */
    public function created(Ticket $ticket)
    {
        $assignees = $ticket->assignees()->get()->reject(fn ($assignee) => $assignee->id === auth()->id());
        Notification::send($assignees, new TicketAssigned("Ticket #{$ticket->id} được gán cho bạn", $ticket));
    }

    /**
     * Handle the Ticket "updated" event.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return void
     */
    public function updated(Ticket $ticket)
    {
        //
    }

    /**
     * Handle the Ticket "deleted" event.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return void
     */
    public function deleted(Ticket $ticket)
    {
        //
    }

    /**
     * Handle the Ticket "restored" event.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return void
     */
    public function restored(Ticket $ticket)
    {
        //
    }

    /**
     * Handle the Ticket "force deleted" event.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return void
     */
    public function forceDeleted(Ticket $ticket)
    {
        //
    }

    public function pivotAttached(Ticket $ticket, $relationName, $pivotIds)
    {
        if ($relationName === 'assignees') {
            $assignees = User::find(collect($pivotIds)->reject(fn ($item) => $item === auth()->id())->toArray());
            Notification::send($assignees, new TicketAssigned("Ticket #{$ticket->id} được gán cho bạn", $ticket));

            activity()
                ->useLog('ticket')
                ->performedOn($ticket)
                ->tap(function (Activity $activity) use ($ticket) {
                    $event = 'updated';
                    $activity->properties = $activity->properties->put('detail', 'GIAO CHO ' . collect($ticket->assignees()->pluck('email'))->implode(', '));
                    $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' ticket #' . $activity->subject_id);
                })
                ->log('updated');
        }
    }

    public function pivotDetached(Ticket $ticket, $relationName, $pivotIds)
    {
        if ($relationName === 'assignees') {
            activity()
                ->useLog('ticket')
                ->performedOn($ticket)
                ->tap(function (Activity $activity) use ($ticket) {
                    $event = 'updated';
                    $activity->properties = $activity->properties->put('detail', 'GIAO CHO ' . collect($ticket->assignees()->pluck('email'))->implode(', '));
                    $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' ticket #' . $activity->subject_id);
                })
                ->log('updated');
        }
    }
}
