<?php

namespace App\Executor;

use AshAllenDesign\LaravelExecutor\Classes\Executor;

class AppInstall extends Executor
{
    /**
     * Define the commands here that are to be run when
     * this executor class is called.
     *
     * @return Executor
     */
    public function run(): Executor
    {
        return $this->runArtisan('optimize')
            ->runArtisan('migrate --force')
            ->runExternal('npm run prod', false, 240);
    }
}
