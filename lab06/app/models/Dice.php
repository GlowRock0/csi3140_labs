<?php

namespace Yatzy;

class Dice {
    public function roll() {
        // Generate a random number between 1 and 6 (inclusive)
        return rand(1, 6);
    }
}
?>