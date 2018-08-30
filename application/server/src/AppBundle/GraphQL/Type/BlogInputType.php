<?php

namespace AppBundle\GraphQL\Type;

use Youshido\GraphQL\Type\InputObject\AbstractInputObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;

class BlogInputType extends AbstractInputObjectType
{
    public function build($config)
    {
        $config->addFields([
            'title' => new StringType(),
            'content' => new StringType(),
            'user' => new UserType(),
        ]);
    }
}
