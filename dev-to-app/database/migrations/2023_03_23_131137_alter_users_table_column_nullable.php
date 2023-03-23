<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUsersTableColumnNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_image')->nullable()->default('')->change();
            $table->text('bio')->nullable()->default('')->change();
            $table->text('education')->nullable()->default('')->change();
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
            $table->string('profile_image')->nullable()->default('')->change();
            $table->text('bio')->nullable()->default('')->change();
            $table->text('education')->nullable()->default('')->change();
        });
    }
}
