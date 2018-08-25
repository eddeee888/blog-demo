<?php

namespace AppBundle\GraphQL\Field;

use AppBundle\GraphQL\Type\BlogType;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Field\AbstractField;

class BlogField extends AbstractField
{
    /**
     * @return AbstractObjectType|AbstractType
     */
    public function getType()
    {
        return new BlogType();
    }

    public function resolve($value, array $args, ResolveInfo $info)
    {
        return [
            'id' => 1,
            'title' => 'Blog 1',
            'content' => 'Content 1',
        ];
    }
}
