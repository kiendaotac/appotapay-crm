<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SetIndexForTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->index('name');
            $table->index('type');
            $table->index('status');
            $table->index('priority');
            $table->index('variant');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->dropIndex('name');
            $table->dropIndex('type');
            $table->dropIndex('status');
            $table->dropIndex('priority');
            $table->dropIndex('variant');
        });
    }
}
