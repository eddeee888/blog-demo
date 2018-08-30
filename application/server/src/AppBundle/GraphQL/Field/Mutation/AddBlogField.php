<?php

namespace AppBundle\GraphQL\Field\Mutation;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Type\Scalar\IdType;
use AppBundle\GraphQL\Type\BlogType;
use AppBundle\GraphQL\Type\BlogInputType;
use AppBundle\GraphQL\Field\AbstractField;
use AppBundle\Entity\Blog;
use AppBundle\Entity\User;

class AddBlogField extends AbstractField
{
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
                'blog' => new BlogInputType(),
                'userId' => new IdType(),
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

        //1. get arguments
        $userId = $args['userId'];
        $blog = $args['blog'];
        $blogTitle = $blog['title'];
        $blogContent = $blog['content'];

        //2. prepare entity manager
        $em = $this->getEntityManager();

        //3. find user / handle user errors
        $user = $em->getRepository(User::class)->find($userId);
        if (!$user) {
            throw new NotFoundHttpException('404 - Unable to find user with id '.$userId);
        }

        //4. create new blog
        $newBlog = new Blog();
        $newBlog->setTitle($blogTitle);
        $newBlog->setContent($blogContent);
        $newBlog->setUser($user);

        $em->persist($newBlog);
        $em->flush();

        return $newBlog;
    }
}
