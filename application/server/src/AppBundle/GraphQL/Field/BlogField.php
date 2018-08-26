<?php

namespace AppBundle\GraphQL\Field;

use Youshido\GraphQL\Field\AbstractField;
use Youshido\GraphQL\Execution\ResolveInfo;
use AppBundle\GraphQL\Type\BlogType;

class BlogField extends AbstractField
{
    /**
     * @return AbstractObjectType|AbstractType
     */
    public function getType()
    {
        return new BlogType();
    }

    /**
     * @param $value
     * @param array                                  $args
     * @param Youshido\GraphQL\Execution\ResolveInfo $info
     */
    public function resolve($value, array $args, ResolveInfo $info)
    {
        return [
            'id' => 1,
            'title' => 'Blog 1',
            'content' => 'Content 1',
        ];
    }
}
