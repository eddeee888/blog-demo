<?php

namespace AppBundle\GraphQL\Field;

use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Field\AbstractField;
use AppBundle\GraphQL\Type\BlogType;

class AllBlogsField extends AbstractField
{
    /**
     * @return AbstractObjectType|AbstractType
     */
    public function getType()
    {
        return new ListType(new BlogType());
    }

    public function resolve($value, array $args, ResolveInfo $info)
    {
        return [
            [
                'id' => 1,
                'title' => 'Blog 1',
                'content' => 'Content 1',
            ],
            [
                'id' => 2,
                'title' => 'Blog 2',
                'content' => 'Content 2',
            ],
        ];
    }
}
