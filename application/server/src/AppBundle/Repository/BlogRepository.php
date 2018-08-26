<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class BlogRepository extends EntityRepository
{
    public function getAllBlogsQuery(int $offset, int $limit)
    {
        $queryBuilder = $this->createQueryBuilder('blog')
                             ->orderBy('blog.createdAt', 'DESC')
                             ->setFirstResult($offset)
                             ->setMaxResults($limit);

        return $queryBuilder;
    }
}
