<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RunAppInstallExecutor extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'executor:app-install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run the AppInstall executor class.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        (new \App\Executor\AppInstall())->run();

        return 0;
    }
}
