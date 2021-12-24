<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\{Carbon, Str};
use Laratrust\Models\LaratrustRole;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * @property int $id
 * @property string $name
 * @property string $display_name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Role extends LaratrustRole
{
    use LogsActivity, HasFactory;

    public $guarded = [];

    protected static $logName = 'role';
    protected static $logAttributes = ['name', 'display_name'];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    public function tapActivity(Activity $activity, $event)
    {
        $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' vai trò #' . $activity->subject_id);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::createFromTimeString($date)->format('d-m-Y H:i:s');
    }
}
