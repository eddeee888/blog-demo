<?php

namespace AppBundle\GraphQL;

use Youshido\GraphQL\Config\Object\ObjectTypeConfig;
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use AppBundle\GraphQL\Field\AllBlogsField;
use AppBundle\GraphQL\Field\BlogField;

class Query extends AbstractObjectType
{
    /**
     * @param ObjectTypeConfig $config
     */
    public function build($config)
    {
        $config->addFields([
            new AllBlogsField(),
            new BlogField(),
        ]);
    }
}
