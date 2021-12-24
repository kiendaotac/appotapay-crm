<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Carbon;

class CleanNotificationCommand extends Command
{
    protected $signature = 'notifications:clean
    {--days= : (optional) Records older than this number of days will be cleaned.}';

    protected $description = 'Clean up old records from the notification.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $this->comment('Cleaning notification...');
        $maxAgeInDays = $this->option('days') ?? config('activitylog.delete_records_older_than_days');
        $cutOffDate = Carbon::now()->subDays($maxAgeInDays)->format('Y-m-d H:i:s');
        $amountDeleted = DatabaseNotification::where('created_at', '<', $cutOffDate)->delete();
        $this->info("Deleted {$amountDeleted} record(s) from the notification.");
        $this->comment('All done!');
    }
}
