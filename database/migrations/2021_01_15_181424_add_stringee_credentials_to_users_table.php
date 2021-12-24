<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStringeeCredentialsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('stringee_id', 30)->nullable()->after('name');
            $table->string('stringee_username', 50)->nullable()->after('name');
            $table->text('stringee_token')->nullable()->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('stringee_id');
            $table->dropColumn('stringee_username');
            $table->dropColumn('stringee_token');
        });
    }
}
