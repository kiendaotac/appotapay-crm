<?php

namespace App\Exports;

use App\Repositories\Contracts\TicketRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;

class TicketsExport implements FromView, ShouldQueue
{
    use Exportable;

    protected TicketRepository $query;

    public function __construct()
    {
        ini_set('memory_limit', -1);
    }

    public function of(TicketRepository $query)
    {
        $this->query = $query;
        return $this;
    }

    public function view(): View
    {
        return view('exports.ticket', [
            'tickets' => $this->query->with('product:id,name')->all([
                'id',
                'name',
                'description',
                'product_id',
                'status',
                'priority',
                'variant',
                'customer_phone',
                'customer_email',
                'customer_name',
                'created_at',
            ]),
        ]);
    }
}
