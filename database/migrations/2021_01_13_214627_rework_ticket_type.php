<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ReworkTicketType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->dropColumn('ticket_type_id');
            $table->string('type')->nullable()->after('name');
        });
        Schema::dropIfExists('ticket_types');
        Schema::dropIfExists('attachments');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->unsignedBigInteger('ticket_type_id')->nullable()->after('name');
            $table->dropColumn('type');
        });
        Schema::table('ticket_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('code', 30)->unique()->after('name');
            $table->boolean('can_create_manually')->default(true)->after('name');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('attachments', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->unsignedBigInteger('ticket_id');
            $blueprint->string('file_type', '20')->nullable();
            $blueprint->string('content', 500)->nullable();
            $blueprint->timestamps();
        });
    }
}
