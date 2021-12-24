<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;
use Laratrust\Models\LaratrustPermission;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $name
 * @property string $display_name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Permission extends LaratrustPermission
{
    use LogsActivity, HasFactory;

    public $guarded = ['id'];

    protected static $logName = 'permission';
    protected static $logAttributes = ['name', 'display_name'];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    public function tapActivity(Activity $activity, $event)
    {
        $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' quyền hạn #' . $activity->subject_id);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::createFromTimeString($date)->format('d-m-Y H:i:s');
    }
}
