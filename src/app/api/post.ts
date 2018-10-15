import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'posts'
})
export class Post extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    content: string;

    @Attribute({ serializedName: 'created-at' })
    createdAt: Date;

    @HasMany()
    comments: Comment[];
}

@JsonApiModelConfig({
    type: 'comments'
})
export class Comment extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    created_at: Date;

    @BelongsTo()
    post: Post;

    @BelongsTo()
    user: User;
}

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {

    @Attribute()
    name: string;
    // ...
}
