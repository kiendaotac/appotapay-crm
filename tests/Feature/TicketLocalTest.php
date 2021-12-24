<?php

namespace Tests\Feature;

use App\Enums\TicketPriorityEnum;
use App\Enums\TicketStatusEnum;
use App\Enums\TicketTypeEnum;
use App\Events\TicketActive;
use App\Exports\TicketsExport;
use App\Models\Permission;
use App\Models\Ticket;
use App\Models\User;
use App\Notifications\TicketAssigned;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\{Event, Notification};
use Livewire\Livewire;
use Maatwebsite\Excel\Facades\Excel;
use Tests\TestCase;

class TicketLocalTest extends TestCase
{
    use RefreshDatabase;

    public function test_restrict_access_list_ticket_local()
    {
        $this->actingAs(User::factory()->create());

        $this->get(route('ticket.locals.index'))
            ->assertForbidden();
    }

    public function test_can_access_list_ticket_local()
    {
        $this->withoutExceptionHandling();
        $this->actingAs($user = User::factory()->create());

        $user->attachPermission(Permission::factory()->create(['name' => 'ticket-local-view']));

        $this->get(route('ticket.locals.index'))
            ->assertOk();
    }

    public function test_create_new_ticket_local()
    {
        Event::fake([TicketActive::class]);
        Notification::fake();

        $this->actingAs($user = User::factory()->create());
        Livewire::test('ticket-local.create')
            ->set('ticket.name', '::ticket.name::')
            ->call('save')
            ->assertForbidden();

        $user->attachPermission(Permission::factory()->create(['name' => 'ticket-local-create']));

        $assignee1 = User::factory()->create();
        $assignee2 = User::factory()->create();

        Livewire::test('ticket-local.create')
            ->set('ticket.name', '::ticket.name::')
            ->set('assignees', [$user->id, $assignee1->id, $assignee2->id])
            ->call('save');

        $this->assertDatabaseCount('tickets', 1);

        Event::assertDispatched(TicketActive::class);
        Notification::assertSentTo(
            [$assignee1, $assignee2],
            TicketAssigned::class
        );
        Notification::assertNotSentTo(
            [$user],
            TicketAssigned::class
        );
    }

    public function test_edit_ticket_local()
    {
        Event::fake([TicketActive::class]);
        Notification::fake();

        $assignee1 = User::factory()->create()
            ->attachPermission(Permission::factory()->create(['name' => 'ticket-local-update']));
        $assignee2 = User::factory()->create();
        $this->actingAs($assignee1);
        $ticket = Ticket::factory()
            ->hasAttached([$assignee1, $assignee2], [], 'assignees')
            ->create(['type' =>  TicketTypeEnum::LOCAL]);
        Livewire::test('ticket-local.edit', ['ticket' => $ticket])
            ->assertSet('ticket.name', $ticket->name)
            ->set('ticket.name', '::ticket.name::')
            ->call('save');
        $this->assertDatabaseCount('tickets', 1)
            ->assertDatabaseHas('tickets', [
                'name' => '::ticket.name::'
            ]);

        Event::assertDispatched(TicketActive::class);
    }

    public function test_preview_ticket_local()
    {
        Event::fake([TicketActive::class]);
        Notification::fake();

        $user = User::factory()->create()
            ->attachPermission(Permission::factory()->create(['name' => 'ticket-local-view']));

        $this->actingAs($user)
            ->get(route('ticket.locals.index'))
            ->assertSeeLivewire('ticket-local.show');
        $ticket = Ticket::factory()
            ->hasAttached([$user], [], 'assignees')
            ->create(['type' =>  TicketTypeEnum::LOCAL]);
        Livewire::test('ticket-local.show')
            ->emit('show', $ticket->id)
            ->assertSet('ticket.name', $ticket->name);
    }

    public function test_can_filter_ticket()
    {
        Event::fake([TicketActive::class]);
        Notification::fake();

        $this->actingAs($user = User::factory()->create());
        $user->attachPermission(Permission::factory()->create(['name' => 'ticket-local-view']));

        Ticket::factory()->count(50)->create();
        $ticket = Ticket::factory()
            ->hasAttached([$user], [], 'assignees')
            ->create([
                'type' =>  TicketTypeEnum::LOCAL,
                'name' => '::status.fresh::',
                'status' => TicketStatusEnum::FRESH,
            ]);

        Livewire::withQueryParams(['perPage' => 1, 'status' => TicketStatusEnum::FRESH])
            ->test('ticket-local.index')
            ->assertSet('status', TicketStatusEnum::FRESH)
            ->assertSee($ticket->name);

        $ticket = Ticket::factory()
            ->hasAttached([$user], [], 'assignees')
            ->create([
                'type' =>  TicketTypeEnum::LOCAL,
                'name' => '::priority.high::',
                'priority' => TicketPriorityEnum::HIGH,
            ]);

        Livewire::withQueryParams(['perPage' => 1, 'priority' => TicketPriorityEnum::HIGH])
            ->test('ticket-local.index')
            ->assertSet('priority', TicketPriorityEnum::HIGH)
            ->assertSee($ticket->name);
    }

    public function test_export_xlsx()
    {
        Excel::fake();
        Event::fake([TicketActive::class]);
        Notification::fake();

        $this->actingAs($user = User::factory()->create());
        $user->attachPermission(Permission::factory()->create(['name' => 'ticket-local-view']));

        Ticket::factory()->count(100)->create();
        $ticket = Ticket::factory()->create([
            'name' => '::ticket.name::',
            'status' => \App\Enums\TicketStatusEnum::FRESH,
            'priority' => \App\Enums\TicketPriorityEnum::HIGH,
        ]);

        Livewire::withQueryParams(['status' => $ticket->status, 'priority' => $ticket->priority])
            ->test('ticket-local.index')
            ->call('exportExcel');
        Excel::matchByRegex();
        Excel::assertDownloaded('/tickets[\d_]{18}\.xlsx/');
    }

    public function test_export_csv()
    {
        Excel::fake();
        Event::fake([TicketActive::class]);
        Notification::fake();

        $this->actingAs($user = User::factory()->create());
        $user->attachPermission(Permission::factory()->create(['name' => 'ticket-local-view']));

        Ticket::factory()->count(100)->create();
        $ticket = Ticket::factory()->create([
            'name' => '::ticket.name::',
            'status' => \App\Enums\TicketStatusEnum::FRESH,
            'priority' => \App\Enums\TicketPriorityEnum::HIGH,
        ]);

        Livewire::withQueryParams(['status' => $ticket->status, 'priority' => $ticket->priority])
            ->test('ticket-local.index')
            ->call('exportCsv');
        Excel::matchByRegex();
        Excel::assertDownloaded('/tickets[\d_]{18}\.csv/');
    }
}
