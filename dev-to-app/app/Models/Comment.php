<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory;
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'comments';

        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id_comment', 'comment', 'parent_comment' , 'id_post', 'id_user'];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function posts() {
        return $this->belongsTo(Post::class, 'id_post', 'id_post');
    }

    public function users() {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function replyComment() {
        return $this->hasMany(Comment::class, 'parent_comment', 'id_comment')->with('replyComment');
    }
}
