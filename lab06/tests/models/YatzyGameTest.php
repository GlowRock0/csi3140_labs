<?php
namespace Yatzy\Test;

use Yatzy\YatzyGame;
use PHPUnit\Framework\TestCase;

class YatzyGameTest extends TestCase
{
    public function testInitialGameState()
    {
        $game = new YatzyGame();
        $this->assertEquals(0, $game->getCurrentRoll());
    }
}
