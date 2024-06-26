<?php
namespace Yatzy\Test;

use Yatzy\Dice;
use PHPUnit\Framework\TestCase;

class DiceTest extends TestCase
{
    public function testConstructor()
    {
        $d = new Dice();
        $this->assertEquals(1, $d->getMin());
        $this->assertEquals(6, $d->getMax());

        $d = new Dice(10, 20);
        $this->assertEquals(10, $d->getMin());
        $this->assertEquals(20, $d->getMax());
    }
}
