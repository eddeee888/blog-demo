<?php

namespace AppBundle\GraphQL\Type;

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\Scalar\DateTimeType;

class BlogType extends AbstractObjectType
{
    public function build($config)
    {
        $config->addFields([
            'id' => new IdType(),
            'title' => new StringType(),
            'content' => new StringType(),
            'created_at' => new DateTimeType(),
            'user' => new UserType(),
        ]);
    }
}
