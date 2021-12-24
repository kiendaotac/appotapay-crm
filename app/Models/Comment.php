<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Support\Carbon;

class Comment extends Pivot
{
    protected $table = 'comments';

    protected $appends = ['diff_for_now'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::createFromTimeString($date)->format('d-m-Y H:i:s');
    }

    public function getDiffForNowAttribute()
    {
        return $this->created_at->locale('vi_VN')->diffForHumans();
    }
}
