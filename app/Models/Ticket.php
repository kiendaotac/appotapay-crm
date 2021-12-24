<?php

namespace App\Models;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketVariantEnum};
use Fico7489\Laravel\Pivot\Traits\PivotEventTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Support\Str;
use Spatie\Tags\HasTags;

/**
 * @property int $id
 * @property string $name
 * @property string $type
 * @property string $description
 * @property string $status
 * @property string $priority
 * @property string $variant
 * @property bool $is_private
 * @property \Illuminate\Support\Collection $properties
 * @property string $customer_phone
 * @property string $customer_email
 * @property string $customer_type
 * @property int $customer_vip
 * @property int $created_by
 * @property int $resolved_by
 * @property int $global_id
 * @property int $product_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property array status_decoration
 * @property array priority_decoration
 * @property array variant_decoration
 */
class Ticket extends Model
{
    use HasFactory, LogsActivity, PivotEventTrait, HasTags;

    const SEARCHABLE_FIELD = [
        'name',
        'customer_phone',
        'customer_email',
        'customer_name',
    ];

    protected $fillable = [
        'name',
        'type',
        'description',
        'status',
        'priority',
        'variant',
        'is_private',
        'properties->record_name',
        'properties->call_duration',
        'customer_phone',
        'customer_email',
        'customer_name',
        'customer_type',
        'customer_vip',
        'created_by',
        'resolved_by',
        'global_id',
        'product_id',
        'call_id',
    ];

    protected static $logAttributes = [
        'name',
        'type',
        'description',
        'status',
        'priority',
        'variant',
        'is_private',
        'customer_phone',
        'customer_email',
        'customer_name',
        'customer_type',
        'customer_vip',
        'created_by',
        'resolved_by',
        'global_id',
        'product.name',
    ];
    protected static $logName = 'ticket';
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    public function tapActivity(Activity $activity, $event)
    {
        $changes = collect([]);
        foreach ($activity->getExtraProperty('attributes') as $key => $value) {
            switch (true) {
                case Str::is('status', $key):
                    $changes->push('TRẠNG THÁI thành ' . \App\Enums\TicketStatusEnum::VALUE[$value]);
                    break;
                case Str::is('priority', $key):
                    $changes->push('ĐỘ ƯU TIÊN thành ' . \App\Enums\TicketPriorityEnum::VALUE[$value]);
                    break;
                case Str::is('customer_*', $key):
                    $changes->push('thay đổi Thông tin khách hàng');
                    break;
                case Str::is('product.name', $key):
                    $changes->push('SẢN PHẨM thành ' . $value);
                    break;
                default:
                    break;
            }
        }
        $activity->properties = $activity->properties->put('detail', $detail = $changes->unique()->implode(', '));
        $activity->properties = $activity->properties->put('title', $title = Str::ucfirst(__($event)) . ' ticket #' . $activity->subject_id);
        $activityEvent = [
            'title' => $title,
            'detail' => $detail,
            'causer' => $activity->causer_id ? $activity->causer()->first()->email : null,
        ];
        event(new \App\Events\TicketActive($activityEvent, $this));
    }

    protected $casts = [
        'is_private' => 'boolean',
        'properties' => 'array',
    ];

    protected $attributes = [
        'is_private' => false,
    ];

    public function getStatusDecorationAttribute()
    {
        return [
            'color' => TicketStatusEnum::COLOR[$this->status] ?? 'primary',
            'value' => TicketStatusEnum::VALUE[$this->status] ?? 'Mới',
        ];
    }

    public function getPriorityDecorationAttribute()
    {
        return [
            'color' => TicketPriorityEnum::COLOR[$this->priority] ?? 'primary',
            'value' => TicketPriorityEnum::VALUE[$this->priority] ?? 'Trung bình',
        ];
    }

    public function getVariantDecorationAttribute()
    {
        return [
            'color' => TicketVariantEnum::COLOR[$this->variant] ?? "primary",
            'value' => TicketVariantEnum::VALUE[$this->variant] ?? "Lỗi khác",
        ];
    }

    public function assignees()
    {
        return $this->belongsToMany(User::class, 'assignees');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function comments()
    {
        return $this->belongsToMany(User::class, 'comments')
            ->using(Comment::class)
            ->withPivot('content')
            ->withTimestamps()
            ->orderBy('pivot_created_at', 'asc');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function ticketKeyword()
    {
        return $this->hasOne(TicketKeyword::class, 'id');
    }
}
