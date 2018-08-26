<?php

namespace AppBundle\GraphQL\Field;

use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\Scalar\IdType;
use AppBundle\GraphQL\Type\BlogType;
use AppBundle\Entity\Blog;

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
     * @param Youshido\GraphQL\Config\Field\FieldConfig $config
     */
    public function build(FieldConfig $config)
    {
        $config->addArguments(
            [
                'id' => new IdType(),
            ]
        );
    }

    /**
     * @param $value
     * @param array                                  $args
     * @param Youshido\GraphQL\Execution\ResolveInfo $info
     */
    public function resolve($value, array $args, ResolveInfo $info)
    {
        $result = null;

        $blogId = $args['id'];
        $em = $this->getEntityManager();

        $result = $em->getRepository(Blog::class)
                     ->findOneBy(['id' => $blogId]);

        return $result;
    }
}
