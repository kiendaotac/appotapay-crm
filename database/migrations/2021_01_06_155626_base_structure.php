<?php

use App\Enums\TicketPriorityEnum;
use App\Enums\UserStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BaseStructure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachments', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->unsignedBigInteger('ticket_id');
            $blueprint->string('file_type', '20')->nullable();
            $blueprint->string('content', 500)->nullable();
            $blueprint->timestamps();
        });

        Schema::create('assignees', function (Blueprint $blueprint) {
            $blueprint->unsignedBigInteger('ticket_id');
            $blueprint->unsignedBigInteger('user_id');
        });

        Schema::create('comments', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->unsignedBigInteger('ticket_id');
            $blueprint->unsignedBigInteger('user_id');
            $blueprint->string('content', 500);
            $blueprint->timestamps();
        });

        Schema::table('users', function (Blueprint $blueprint) {
            $blueprint->enum('status', UserStatusEnum::KEY)->default(UserStatusEnum::ONLINE)->after('email');
            $blueprint->boolean('is_active')->default(true)->after('email');
            $blueprint->string('phone', 20)->nullable()->after('email');
        });

        Schema::create('products', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('name', 100);
            $blueprint->string('code', 30)->unique();
            $blueprint->timestamps();
        });

        Schema::create('tickets', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('name', 100);
            $blueprint->unsignedBigInteger('ticket_type_id')->nullable();
            $blueprint->text('description')->nullable();
            $blueprint->unsignedBigInteger('product_id')->nullable();
            $blueprint->string('status', 20)->nullable();
            $blueprint->enum('priority', TicketPriorityEnum::KEY)->default(TicketPriorityEnum::MEDIUM);
            $blueprint->string('customer_phone', 20)->nullable();
            $blueprint->string('customer_email', 100)->nullable();
            $blueprint->string('customer_name', 100)->nullable();
            $blueprint->string('customer_type', 30)->nullable();
            $blueprint->unsignedTinyInteger('customer_vip')->default(0);
            $blueprint->unsignedBigInteger('created_by')->nullable();
            $blueprint->unsignedBigInteger('resolved_by')->nullable();
            $blueprint->string('global_id', 50)->nullable()->unique();
            $blueprint->timestamps();
            $blueprint->softDeletes();
        });

        Schema::create('ticket_types', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('name', 100);
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachments');
        Schema::dropIfExists('assignees');
        Schema::dropIfExists('comments');
        Schema::table('users', function(Blueprint $blueprint) {
            $blueprint->dropColumn('status');
            $blueprint->dropColumn('is_active');
            $blueprint->dropColumn('phone');
        });
        Schema::dropIfExists('products');
        Schema::dropIfExists('tickets');
        Schema::dropIfExists('ticket_types');
    }
}
