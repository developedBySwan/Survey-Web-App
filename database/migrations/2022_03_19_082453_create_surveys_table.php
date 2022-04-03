<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class,'user_id');
            $table->string('title',1000);
            $table->string('slug',1000);
            $table->tinyInteger('status');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->timestamp('expire_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('surveys');
    }
};

// QLSTATE[HY000]: General error: 1364 Field 'images' doesn't have a default value (SQL: insert into `surveys` (`title`, `image`, `user_id`, `status`, `description`, `expire_date`, `slug`, `updated_at`, `created_at`) values (Quibusdam esse ipsum, images/zsG4TxpKm24INZF2.jpeg, 1, 1, Dolore tempore iste, 2022-04-21, quibusdam-esse-ipsum, 2022-04-03 02:33:10, 2022-04-03 02:33:10))"
