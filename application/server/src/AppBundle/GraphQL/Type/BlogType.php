<?php

namespace AppBundle\GraphQL\Type;

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQL\Type\Scalar\StringType;

class BlogType extends AbstractObjectType
{
    public function build($config)
    {
        /*
        $config->addFields([
            'id' => new IdType(),
            'title' => new StringType(),
            'content' => new ContentType(),
        ]);*/
        $config
            ->addField('id', new IdType())
            ->addField('title', new StringType())
            ->addField('content', new ContentType());
    }
}
