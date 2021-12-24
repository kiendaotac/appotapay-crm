<?php

namespace App\Models;

use App\Enums\UserStatusEnum;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\{Carbon, Str};
use Laratrust\Traits\LaratrustUserTrait;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $phone
 * @property string $avatar
 * @property string $avatar_url
 * @property bool $is_active
 * @property string $stringee_id
 * @property string $stringee_username
 * @property string $stringee_token
 * @property string $telegram_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class User extends Authenticatable
{
    use LaratrustUserTrait;
    use HasFactory, Notifiable, LogsActivity;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'avatar',
        'is_active',
        'stringee_id',
        'stringee_username',
        'stringee_token',
        'telegram_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'avatar'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'avatar_url'
    ];

    protected static $logName = 'user';
    protected static $logAttributes = ['name', 'phone', 'avatar', 'is_active'];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    public function tapActivity(Activity $activity, $event)
    {
        $target = $activity->causer_id === $activity->subject_id ? 'bản thân' : 'người dùng #' . $activity->subject_id;
        $activity->properties = $activity->properties->put('title', Str::ucfirst(__($event)) . ' thông tin cá nhân ' . $target);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::createFromTimeString($date)->format('d-m-Y H:i:s');
    }

    public function getStatusDecorationAttribute()
    {
        return [
            'color' => UserStatusEnum::COLOR[$this->status] ?? 'primary',
            'value' => UserStatusEnum::VALUE[$this->status] ?? 'Mới',
        ];
    }

    public function getAvatarUrlAttribute()
    {
        return $this->avatar ?? 'https://ui-avatars.com/api/?name=' . urlencode($this->name) . '&color=7F9CF5&background=EBF4FF';
    }

    public function isSuspended()
    {
        return !$this->is_active;
    }

    public function tickets()
    {
        return $this->belongsToMany(Ticket::class, 'assignees');
    }
}
