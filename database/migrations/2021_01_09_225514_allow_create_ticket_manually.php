<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AllowCreateTicketManually extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ticket_types', function (Blueprint $table) {
            $table->string('code', 30)->unique()->after('name');
            $table->boolean('can_create_manually')->default(true)->after('name');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ticket_types', function (Blueprint $table) {
            $table->dropColumn('code');
            $table->dropColumn('can_create_manually');
            $table->dropSoftDeletes();
        });
    }
}
