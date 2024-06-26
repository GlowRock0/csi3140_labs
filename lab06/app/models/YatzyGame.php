<?php

namespace Yatzy;

class YatzyGame {
    private $dice;
    private $rolls;
    private $currentRoll;
    private $keep;

    public function __construct() {
        $this->dice = [rand(1, 6), rand(1, 6), rand(1, 6), rand(1, 6), rand(1, 6)];
        $this->rolls = 3;
        $this->currentRoll = 0;
        $this->keep = [false, false, false, false, false];
    }

    public function rollDice() {
        if ($this->currentRoll < $this->rolls) {
            for ($i = 0; $i < 5; $i++) {
                if (!$this->keep[$i]) {
                    $this->dice[$i] = rand(1, 6);
                }
            }
            $this->currentRoll++;
        }
    }

    public function toggleKeep($index) {
        if ($index >= 0 && $index < 5) {
            $this->keep[$index] = !$this->keep[$index];
        }
    }

    public function getDice() {
        return $this->dice;
    }

    public function getCurrentRoll() {
        return $this->currentRoll;
    }

    public function getRollsLeft() {
        return $this->rolls - $this->currentRoll;
    }

    public function getKeep() {
        return $this->keep;
    }
}
?>
