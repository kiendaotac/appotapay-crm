<?php

namespace App\Http\Livewire\TicketLocal;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketVariantEnum};
use App\Exports\TicketsExport;
use App\Repositories\Contracts\{
    ProductRepository,
    UserRepository
};
use App\Services\Contracts\TicketLocalService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\{Component, WithPagination};
use Spatie\Tags\Tag;
use Illuminate\Http\Request;

class Index extends Component
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

    protected $queryString = [
        'perPage' => ['except' => '10'],
        'start' => ['except' => ''],
        'end' => ['except' => ''],
        'status' => ['except' => ''],
        'priority' => ['except' => ''],
        'variant' => ['except' => ''],
        'keyword' => ['except' => ''],
        'product' => ['except' => ''],
        'assignee' => ['except' => ''],
        'tag' => ['except' => ''],
    ];

    public function mount(UserRepository $userRepository, ProductRepository $productRepository)
    {
        $this->statuses = TicketStatusEnum::GROUP_LOCAL;
        $this->priorities = TicketPriorityEnum::VALUE;
        $this->variants = TicketVariantEnum::GROUP_LOCAL;
        $this->agents = $userRepository->all();
        $this->products = $productRepository->all();
        $this->tags = Tag::all();
    }

    public function render(TicketLocalService $ticketLocalService)
    {
        $this->authorize('ticket-local-view-any');
        return view('livewire.ticket-local.index', [
            'tickets' => $ticketLocalService
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
                ->paginate($this->perPage)
        ]);
    }



     public function exportTicketCSV(Request $request, TicketLocalService $ticketLocalService){

        $startTimeTicket = ($request->startTimeTicket)?$request->startTimeTicket:'';
        $endTimeTicket = ($request->endTimeTicket)?$request->endTimeTicket:'';
        $statusTicket = ($request->statusTicket)?$request->statusTicket:'';
        $priorityTicket = ($request->priorityTicket)?$request->priorityTicket:'';
        $variantTicket = ($request->variantTicket)?$request->variantTicket:'';
        $keywordTicketChung = ($request->keywordTicketChung)?$request->keywordTicketChung:'';
        $productsTicket = ($request->productsTicket)?$request->productsTicket:'';
        $assigneeTicket = ($request->assigneeTicket)?$request->assigneeTicket:'';
        $tagTicket = ($request->tagTicket)?$request->tagTicket:'';

        $limit = 10000;

        $data = $ticketLocalService
                ->query()
                ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($startTimeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($endTimeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($statusTicket))
                ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($priorityTicket))
                ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($variantTicket))
                ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($keywordTicketChung))
                ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($productsTicket))
                ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($assigneeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\TagCriteria($tagTicket))
                ->orderBy('id', 'desc')
                ->paginate($limit);

        $totalPage = $data->lastPage();
        $currentPage = $data->currentPage();

        set_time_limit(0);
        ini_set('memory_limit', '-1');

        $fileName = date('YmdHis', time());
        header('Content-Type: application/vnd.ms-execl');
        header('Content-Disposition: attachment;filename="' . $fileName . '.csv"');

        $handle = fopen("php://output", 'a');
        fputs($handle, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));

        $firstTime = 1;
        for ($i=1; $i <= $totalPage ; $i++) {
            $offset = ($i - 1) * $limit;

            $data = $ticketLocalService
                ->query()
                ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($startTimeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($endTimeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($statusTicket))
                ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($priorityTicket))
                ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($variantTicket))
                ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($keywordTicketChung))
                ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($productsTicket))
                ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($assigneeTicket))
                ->pushCriteria(new \App\Repositories\Criteria\TagCriteria($tagTicket))
                ->orderBy('id', 'desc')
                ->skip($offset)->take($limit)->get();

            $dataTitle = [
                'ID',
                'Tên',
                'Mô Tả',
                'Sản Phẩm',
                'Trạng Thái',
                'Ưu tiên',
                'Nhóm lỗi',
                'Khách hàng',
                'Khách hàng - email',
                'Khách hàng - SĐT',
                'Ngày tạo'
            ];


            foreach($data as $data){
                if($firstTime == 1){
                    fputcsv($handle, $dataTitle);
                }

                $product = ($data->product_id == 1)?'Ví Appota':'';
                $product = ($data->product_id == 2)?'Cổng Thanh Toán':'';
                $product = ($data->product_id == 3)?'Appota Card':'';

                $ticketCSV['id'] = $data->id;
                $ticketCSV['name'] = $data->name;
                $ticketCSV['description'] = strip_tags($data->description);
                $ticketCSV['product_id'] = $product;
                $ticketCSV['status'] = $data->status;
                $ticketCSV['priority'] = $data->priority;
                $ticketCSV['variant'] = $data->variant;
                $ticketCSV['customer_name'] = $data->customer_name;
                $ticketCSV['customer_email'] = $data->customer_email;
                $ticketCSV['customer_phone'] = $data->customer_phone;
                $ticketCSV['created_at'] = $data->created_at;
                fputcsv($handle, $ticketCSV);

                $firstTime++;

            }


         }
        unset($data);

        fclose($handle);
        ob_flush();
        flush();
        $end = microtime(true);

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
            'tag',
        ]);
    }

    public function destroy($itemToDelete, TicketLocalService $ticketLocalService)
    {
        $this->authorize('ticket-local-delete', $ticket = $ticketLocalService->find($itemToDelete));
        $ticket->delete();
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Deleted.')]);
    }

    public function exportExcel(TicketLocalService $ticketLocalService)
    {
        $query = $ticketLocalService
            ->query()
            ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($this->start))
            ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($this->end))
            ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($this->status))
            ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($this->priority))
            ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($this->variant))
            ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($this->keyword))
            ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($this->product))
            ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($this->assignee))
            ->pushCriteria(new \App\Repositories\Criteria\TagCriteria($this->tag));
        return (new TicketsExport)->of($query)->download('tickets_' . now()->format('d_m_y_H_i_s') . '.xlsx', \Maatwebsite\Excel\Excel::XLSX);
    }

    public function exportCsv(TicketLocalService $ticketLocalService)
    {
        $query = $ticketLocalService
            ->query()
            ->pushCriteria(new \App\Repositories\Criteria\CreatedAfterCriteria($this->start))
            ->pushCriteria(new \App\Repositories\Criteria\CreatedBeforeCriteria($this->end))
            ->pushCriteria(new \App\Repositories\Criteria\StatusCriteria($this->status))
            ->pushCriteria(new \App\Repositories\Criteria\PriorityCriteria($this->priority))
            ->pushCriteria(new \App\Repositories\Criteria\VariantCriteria($this->variant))
            ->pushCriteria(new \App\Repositories\Criteria\TicketKeywordCriteria($this->keyword))
            ->pushCriteria(new \App\Repositories\Criteria\ProductCriteria($this->product))
            ->pushCriteria(new \App\Repositories\Criteria\AssigneeCriteria($this->assignee))
            ->pushCriteria(new \App\Repositories\Criteria\TagCriteria($this->tag));
        return (new TicketsExport)->of($query)->download('tickets_' . now()->format('d_m_y_H_i_s') . '.csv', \Maatwebsite\Excel\Excel::CSV);
    }
}


