<?php

if (!function_exists('composeTicketLink')) {

    /**
     * compose ticket edit url
     */
    function composeTicketLink($id, $type)
    {
        switch ($type) {
            case \App\Enums\TicketTypeEnum::CALL:
                return route('ticket.calls.edit', $id);
            default:
                return route('ticket.locals.edit', $id);
        }
    }
}
