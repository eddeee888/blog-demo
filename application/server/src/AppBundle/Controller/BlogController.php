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
     * @Route("/blog/")
     */
    public function showAction()
    {
        return $this->render('blog/blog.html.twig', []);
    }
}
