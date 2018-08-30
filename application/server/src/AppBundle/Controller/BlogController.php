<?php
/**
 * BlogController.php
 * Author: Eddy Nguyen.
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends Controller
{
    /**
     * @Route("/blog/", name="blog_list")
     * @Route("/blog/add"), name="blog_add")
     * @Route("/blog/{id}", name="blog_view_id")
     * @Route("/blog/{id}/edit", name="blog_edit_id")
     */
    public function showAction($id = null)
    {
        return $this->render('blog/blog.html.twig', []);
    }
}
