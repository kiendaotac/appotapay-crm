<?php

namespace App\Http\Livewire\TicketLocal;

use App\Enums\TicketPriorityEnum;
use App\Enums\TicketStatusEnum;
use App\Enums\TicketVariantEnum;
use App\Repositories\Contracts\ProductRepository;
use App\Repositories\Contracts\UserRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;
use App\Services\Contracts\TicketLocalService;
use Livewire\WithPagination;
use Spatie\Tags\Tag;

class TicketIndex extends Component
{
    use WithPagination, AuthorizesRequests;

    public $perPage = '10';
    public $start = '';
    public $end = '';
    public $status = '';
    public $priority = '';
    public $variant = '';
    public $keyword = '';
    public $product = '';
    public $assignee = '';
    public $tag = '';
    public $types, $statuses, $priorities, $variants, $products, $agents, $tags;
    protected $paginationTheme = 'bootstrap';

    public function mount(UserRepository $userRepository, ProductRepository $productRepository)
    {
        $this->priorities = TicketPriorityEnum::VALUE;
        $this->variants = TicketVariantEnum::GROUP_LOCAL;
        $this->agents = $userRepository->all();
        $this->products = $productRepository->all();
        $this->tags = Tag::all();
    }

    public function render(TicketLocalService $ticketLocalService)
    {
        $tickets = $ticketLocalService
            ->query()
            ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($this->start))
            ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($this->end))
            ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($this->status))
            ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($this->priority))
            ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($this->variant))
            ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($this->keyword))
            ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($this->product))
            ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($this->assignee))
            ->pushCriteria(new \App\Repositories\Criteria\TagCriteria($this->tag))
            ->orderBy('id', 'desc')
            ->paginate($this->perPage);
        return view('livewire.ticket-local.ticket-index', compact('tickets'))->layout('layouts.new');
    }

    public function updateStatus($ticket)
    {
        dd($ticket);
    }
}
