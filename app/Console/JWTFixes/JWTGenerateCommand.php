<?php
/**
 * Created by PhpStorm.
 * User: Dima
 * Date: 03.06.2018
 * Time: 15:57
 */

namespace App\Console\JWTFixes;


class JWTGenerateCommand extends \Tymon\JWTAuth\Commands\JWTGenerateCommand
{

    public function handle()
    {
        $this->fire();
    }
}