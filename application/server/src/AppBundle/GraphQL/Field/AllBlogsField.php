<?php

namespace AppBundle\GraphQL\Field;

use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Type\Scalar\IntType;
use Youshido\GraphQL\Execution\ResolveInfo;
use AppBundle\GraphQL\Type\BlogType;
use AppBundle\Entity\Blog;

class AllBlogsField extends AbstractField
{
    const MAX_LIMIT = 10;

    /**
     * @return AbstractObjectType|AbstractType
     */
    public function getType()
    {
        return new ListType(new BlogType());
    }

    /**
     * @param Youshido\GraphQL\Config\Field\FieldConfig $config
     */
    public function build(FieldConfig $config)
    {
        $config->addArguments(
            [
                'offset' => new IntType(),
                'limit' => new IntType(),
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
        $result = [];

        $offset = $args['offset'];
        $limit = $args['limit'] >= $this::MAX_LIMIT ? $this::MAX_LIMIT : $args['limit'];

        $em = $this->getEntityManager();
        $queryBuilder = $em->getRepository(Blog::class)
                           ->createQueryBuilder('blog')
                           ->orderBy('blog.createdAt', 'DESC')
                           ->setFirstResult($offset)
                           ->setMaxResults($limit);

        return $queryBuilder->getQuery()->execute();
    }
}
