<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('id_post')->unique();
            $table->string('cover')->default('');
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('content');
            $table->string('tag_1')->default('');
            $table->string('tag_2')->default('');
            $table->string('tag_3')->default('');
            $table->string('tag_4')->default('');
            $table->string('id_user');
            $table->timestamps();
            $table->softDeletes($column = 'deleted_at', $precision = 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
