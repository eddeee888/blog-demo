<?php
/**
 * HomeController.php
 * Author: Eddy Nguyen.
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends Controller
{
    /**
     * @Route("/")
     */
    public function showAction()
    {
        return $this->render('home/home.html.twig', []);
    }
}
