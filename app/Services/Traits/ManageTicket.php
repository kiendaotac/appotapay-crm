<?php

namespace App\Services\Traits;

use App\Events\TicketCommentAdded;
use App\Models\Ticket;
use App\Repositories\Contracts\TicketRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @property TicketRepository $ticketRepository
 * @method string errorType()
 */
trait ManageTicket
{
    public function create(array $attributes): Ticket
    {
        $attributes['created_by'] = auth()->id();
        $attributes['type'] = $this->errorType();
        $attributes['description'] = trim($attributes['description'] ?? '');
        $ticket = $this->ticketRepository->create($attributes);
        if (isset($attributes['description']) && !empty($attributes['description'])) {
            $this->addComment($attributes['description'], $ticket);
        }
        $this->appendSearchKeyword(collect($attributes)->only(Ticket::SEARCHABLE_FIELD)->implode(' '), $ticket);
        return $ticket;
    }

    public function update(array $attributes, $ticketId): Ticket
    {
        $ticket = $this->ticketRepository->update($attributes, $ticketId);
        $ticketKeyword = collect($attributes)
            ->only(Ticket::SEARCHABLE_FIELD)
            ->implode(' ');
        $this->appendSearchKeyword($ticketKeyword, $ticket);
        return $ticket;
    }

    protected function appendSearchKeyword(string $keyword, Ticket $ticket)
    {
        if (empty($keyword)) return;
        $ticketKeyword = optional($ticket->ticketKeyword()->first())->content;
        $ticketKeyword .= ' ' . $keyword;
        $ticketKeyword = Str::of($ticketKeyword)
            ->stripTags()
            ->entitiesDecode()
            ->trim();
        // ->slug(' ');
        $ticket->ticketKeyword()->updateOrCreate(
            ['id' => $ticket->id],
            ['content' => ' ' . $ticketKeyword]
        );
    }

    public function delete($ticketId)
    {
        return $this->ticketRepository->delete($ticketId);
    }

    public function find($ticket): Ticket
    {
        if ($ticket instanceof Ticket) {
            return $ticket;
        }

        return Ticket::whereType($this->errorType())->whereId($ticket)->firstOrFail();
    }

    public function query(): TicketRepository
    {
        return $this->ticketRepository
            ->pushCriteria(new \App\Repositories\Criteria\TypeCriteria($this->errorType()));
    }

    public function addComment(string $comment, Ticket $ticket, int $causerId = null)
    {
        $causerId ??= auth()->id();
        $ticket->comments()->attach([
            $causerId => ['content' => $comment]
        ]);
        $this->appendSearchKeyword($comment, $ticket);
        event(new TicketCommentAdded($ticket));
        return;
    }

    public function addImageComment($image, Ticket $ticket)
    {
        if (gettype($image) === 'array' && count($image)) {
            $comment = '<div class="d-inline-flex">';
            foreach ($image as $handlingImage) {
                $extension = $handlingImage->getClientOriginalExtension(); // getting file extension
                $fileName = uniqid("appota") . '.' . $extension; // renaming file
                $handlingImage->storePubliclyAs('', $fileName, 'ticket_images');
                $url = Storage::disk('ticket_images')->url($fileName);
                $comment .= "<a href='{$url}' data-lightbox='ticket-{$ticket->id}'><div class='mr-1 border rounded upload-image-preview' style='background-image:url({$url});'></div></a>";
            }
            $comment .= "</div>";
            if (!isset($comment)) return;
            $this->addComment($comment, $ticket);
        }
    }

    public function addRecordCallComment($recordPath, Ticket $ticket)
    {
        if (!isset($recordPath) || empty($recordPath)) return;
        $comment = "<audio controls><source src=\"$recordPath\" type=\"audio/ogg\">Your browser does not support the audio element.</audio>";
        $this->addComment($comment, $ticket);
    }

    public function addSystemComment(string $comment, Ticket $ticket)
    {
        //
    }

    public function assignManually($assignees = [], Ticket $ticket)
    {
        return $ticket->assignees()->sync($assignees);
    }

    public function syncTags(string $tags, Ticket $ticket)
    {
        return $ticket->syncTags(
            Str::of($tags)
                ->explode(',')
                ->reject(fn ($item) => empty($item))
        );
    }
}
