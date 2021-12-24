<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersAndTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('password_resets');

        Schema::table('users', function (Blueprint $blueprint) {
            $blueprint->string('avatar')->nullable()->after('email');
        });

        Schema::table('tickets', function (Blueprint $blueprint) {
            $blueprint->boolean('is_private')->default(false)->after('priority');
            $blueprint->text('properties')->nullable()->after('priority');
            $blueprint->string('variant', 50)->nullable()->after('priority');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('password_resets', function (Blueprint $table) {
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::table('users', function (Blueprint $blueprint) {
            $blueprint->dropColumn('avatar');
        });

        Schema::table('tickets', function (Blueprint $blueprint) {
            $blueprint->dropColumn('is_private');
            $blueprint->dropColumn('properties');
            $blueprint->dropColumn('variant');
        });
    }
}
