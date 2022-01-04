<?php

namespace App\Http\Livewire\TicketCall;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketVariantEnum};
use App\Models\Ticket;
use App\Repositories\Contracts\{
    ProductRepository,
    UserRepository
};
use App\Services\Contracts\StringeeService;
use App\Services\Contracts\TicketCallService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Livewire\{Component, WithPagination};
use Spatie\Tags\Tag;

/**
 * @property TicketCallService $ticketCallService
 */
class TicketIndex extends Component
{
    use WithPagination;

    public $perPage = 10;

    public $start = '';

    public $end = '';

    public $status = '';

    public $priority = '';

    public $variant = '';

    public $keyword = '';

    public $product = '';

    public $assignee = '';

    public $tag = '';

    public Ticket $modalTicket;

    public $types, $statuses, $priorities, $variants;

    public $products, $agents, $tags;

    protected $paginationTheme = 'bootstrap';

    protected $queryString = [
        'start'    => ['except' => ''],
        'end'      => ['except' => ''],
        'status'   => ['except' => ''],
        'priority' => ['except' => ''],
        'variant'  => ['except' => ''],
        'keyword'  => ['except' => ''],
        'product'  => ['except' => ''],
        'assignee' => ['except' => ''],
    ];

    protected $listeners = [
        'incoming-call'          => 'incomingCall',
        'incoming-call-answered' => 'incomingCallAnswered',
        'outgoing-call-answered' => 'outgoingCallAnswered',
        'call-ended'             => 'callEnded',
    ];

    public function mount(UserRepository $userRepository, ProductRepository $productRepository)
    {
        $this->statuses   = TicketStatusEnum::GROUP_LOCAL;
        $this->priorities = TicketPriorityEnum::VALUE;
        $this->variants   = TicketVariantEnum::GROUP_LOCAL;
        $this->agents     = $userRepository->all();
        $this->products   = $productRepository->all();
        $this->tags       = Tag::all();
    }

    public function render(TicketCallService $ticketCallService)
    {
        return view('livewire.ticket-call.ticket-index', [
            'tickets' => $ticketCallService
                ->query()
                ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($this->start))
                ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($this->end))
                ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($this->status))
                ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($this->priority))
                ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($this->variant))
                ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($this->keyword))
                ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($this->product))
                ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($this->assignee))
                ->orderBy('id', 'desc')
                ->paginate($this->perPage)
        ])->layout('layouts.new');
    }

    public function filter()
    {
        //
    }

    public function resetFilter()
    {
        $this->reset([
            'start',
            'end',
            'status',
            'priority',
            'variant',
            'keyword',
            'product',
            'assignee',
        ]);
    }

    public function destroy($itemToDelete, TicketCallService $ticketCallService)
    {
        $ticketCallService->delete($itemToDelete);
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Deleted.')]);
    }

    public function incomingCall($callId, $customerPhone)
    {
        Validator::make(
            ['call_id' => $callId],
            ['call_id' => 'required|unique:tickets,call_id']
        )->validate();
        $customerPhone = Str::normalizePhone($customerPhone);
        $this->ticketCallService->create([
            'name'           => "Cuộc gọi đến " . $customerPhone,
            'status'         => TicketStatusEnum::MISSED,
            'customer_phone' => $customerPhone,
            'call_number'    => $customerPhone,
            'call_id'        => $callId,
            'variant'        => TicketVariantEnum::CALL_INCOMING,
        ]);
    }

    public function incomingCallAnswered($callId)
    {
        $ticket = $this->ticketCallService->updateViaCallId([
            'status' => TicketStatusEnum::ANSWERED
        ], $callId);
        $this->ticketCallService->assignManually([auth()->id()], $ticket);
        $this->emit('edit-ticket', route('ticket.calls.edit', $ticket->id));
    }

    public function outgoingCallAnswered($callId, $customerPhone)
    {
        Validator::make(
            ['call_id' => $callId],
            ['call_id' => 'required|unique:tickets,call_id']
        )->validate();
        $customerPhone = Str::normalizePhone($customerPhone);
        $ticket        = $this->ticketCallService->create([
            'name'           => "Cuộc gọi đi " . $customerPhone,
            'status'         => TicketStatusEnum::ANSWERED,
            'customer_phone' => $customerPhone,
            'call_number'    => $customerPhone,
            'call_id'        => $callId,
            'variant'        => TicketVariantEnum::CALL_OUTGOING,
        ]);
        $this->ticketCallService->assignManually([auth()->id()], $ticket);
        $this->emit('edit-ticket', route('ticket.calls.edit', $ticket->id));
    }

    public function callEnded($callId, $callDuration, StringeeService $stringeeService)
    {
        $recordName = '';
        try {
            $recordName = $stringeeService->downloadRecordCall($callId);
            $ticket     = $this->ticketCallService->updateViaCallId([
                'recordName'   => $recordName,
                'callDuration' => $callDuration,
            ], $callId);
            $this->emit("ticket-comment-added-{$ticket->id}");
        } catch (\Exception $e) {
            //throw $th;
        }
    }

    public function getTicketCallServiceProperty()
    {
        return app(TicketCallService::class);
    }
}
