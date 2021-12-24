<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\{Carbon, Str};
use Spatie\Activitylog\Traits\LogsActivity;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Spatie\Activitylog\Models\Activity;

/**
 * @property int $id
 * @property string $name
 * @property string $code
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Product extends Model implements Transformable
{
    use HasFactory, LogsActivity;
    use TransformableTrait;

    protected $fillable = ['name', 'code'];

    protected static $logFillable = true;
    protected static $logName = 'product';
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    public function tapActivity(Activity $activity, $event)
    {
        $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' sản phẩm #' . $activity->subject_id);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::createFromTimeString($date)->format('d-m-Y H:i:s');
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
