<?php

namespace AppBundle\GraphQL;

use Youshido\GraphQL\Config\Object\ObjectTypeConfig;
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use AppBundle\GraphQL\Field\Mutation\AddBlogField;

class RootMutation extends AbstractObjectType
{
    /**
     * @param ObjectTypeConfig $config
     */
    public function build($config)
    {
        $config->addFields([
            new AddBlogField(),
        ]);
    }
}
