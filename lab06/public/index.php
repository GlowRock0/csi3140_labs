<?php
    require_once('../app/models/Dice.php');
    require_once('../app/models/YatzyGame.php');

    use Yatzy\YatzyGame;

    session_start();

    if (!isset($_SESSION['game']) || (isset($_POST['action']) && $_POST['action'] === 'reset')) {
        $_SESSION['game'] = new YatzyGame();
    }

    $game = $_SESSION['game'];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['action']) && $_POST['action'] === 'roll') {
            $game->rollDice();
        } elseif (isset($_POST['action']) && strpos($_POST['action'], 'toggle') === 0) {
            $index = (int)substr($_POST['action'], 6);
            $game->toggleKeep($index);
        }
        $_SESSION['game'] = $game;
        header('Location: index.php');
        exit();
    }

    $dice = $game->getDice();
    $keep = $game->getKeep();
    $rollsLeft = $game->getRollsLeft();
    
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Yatzy Game</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Yatzy Game</h1>
    <p>Rolls left: <?= $rollsLeft ?></p>
    <form method="post">
        <div>
            <?php for ($i = 0; $i < 5; $i++): ?>
                <div style="display: inline-block; margin: 10px;">
                    <p>Die <?= $i + 1 ?>: <?= $dice[$i] ?></p>
                    <p><input type="checkbox" name="keep[]" value="<?= $i ?>" <?= $keep[$i] ? 'checked' : '' ?> disabled> Keep</p>
                </div>
            <?php endfor; ?>
        </div>
        <div>
            <button type="submit" name="action" value="roll" <?= $rollsLeft === 0 ? 'disabled' : '' ?>>Roll</button>
        </div>
        <div>
            <?php for ($i = 0; $i < 5; $i++): ?>
                <button type="submit" name="action" value="toggle<?= $i ?>">Toggle Keep <?= $i + 1 ?></button>
            <?php endfor; ?>
        </div>
        <div>
            <button type="submit" name="action" value="reset">Reset Game</button>
        </div>
    </form>
</body>
</html>
