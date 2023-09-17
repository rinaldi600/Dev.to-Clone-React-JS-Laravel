<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
// use Laravel\Scout\Searchable;

class Post extends Model
{
    use HasFactory;
    use Sluggable;
    use SoftDeletes;
    // use Searchable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'posts';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true,
            ]
        ];
    }

    public function users() {
        return $this->hasMany(User::class,'id_user', 'id_user');
    }

    public function comments() {
        return $this->hasMany(Comment::class,'id_post', 'id_post');
    }
        /**
     * Get the name of the index associated with the model.
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'posts_title_content_fulltext';
    }
}
