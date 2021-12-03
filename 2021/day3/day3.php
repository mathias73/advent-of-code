<?php

function readFromFile()
{
    return explode(PHP_EOL, file_get_contents('puzzle.txt'));
}

function part1()
{
    $puzzle = readFromFile();
    $gamma = null;
    $epsilon = null;
    $count = [
        0 => [
            '0' => null,
            '1' => null,
        ],
        1 => [
            '0' => null,
            '1' => null,
        ],
        2 => [
            '0' => null,
            '1' => null,
        ],
        3 => [
            '0' => null,
            '1' => null,
        ],
        4 => [
            '0' => null,
            '1' => null,
        ],
        5 => [
            '0' => null,
            '1' => null,
        ],
        6 => [
            '0' => null,
            '1' => null,
        ],
        7 => [
            '0' => null,
            '1' => null,
        ],
        8 => [
            '0' => null,
            '1' => null,
        ],
        9 => [
            '0' => null,
            '1' => null,
        ],
        10 => [
            '0' => null,
            '1' => null,
        ],
        11 => [
            '0' => null,
            '1' => null,
        ],
    ];

    foreach ($puzzle as $bit) {
        $explodePuzzle = str_split($bit);
        foreach ($explodePuzzle as $key => $value) {
            if ($value === "1") {
                $count[$key]['1'] += 1;
            } else {
                $count[$key]['0'] += 1;
            }
        }
    }

    foreach ($count as $value) {
        if ($value[1] > $value[0]) {
            $gamma .= '1';
            $epsilon .= '0';
        } else {
            $gamma .= '0';
            $epsilon .= '1';
        }
    }

    return bindec($gamma) * bindec($epsilon);
}

echo part1();


//PART2 IS NOT THE GOOD ANSWER
function part2()
{
    $puzzle = readFromFile();
    $oxygen = oxygenGenerator(readFromFile(), 0);
    $newPuzzle = [];
    foreach ($oxygen as $opt) {
        if(isset($puzzle[$opt])) {
            array_push($newPuzzle, $puzzle[$opt]);
        }
    }
    for ($i=1;$i<=11; $i++) {
        $oxygen = oxygenGenerator($newPuzzle, $i);

        if(count($oxygen) === 1) {
            var_dump($newPuzzle);
            break;
        }
        foreach ($oxygen as $opt) {
            unset($newPuzzle);
            $newPuzzle = [];
            array_push($newPuzzle, $puzzle[$opt]);
        }
    }


    $scrubber = scrubberGenerator(readFromFile(), 0);
    $scrubberPuzzle = [];

    foreach ($scrubber as $opt) {
        if(isset($puzzle[$opt])) {
            array_push($scrubberPuzzle, $puzzle[$opt]);
        }
    }
    for ($i=1;$i<=11; $i++) {
        $scrubber = oxygenGenerator($scrubberPuzzle, $i);

        if(count($scrubber) === 1) {
            var_dump($scrubberPuzzle);
            break;
        }
        foreach ($scrubber as $opt) {
            unset($scrubberPuzzle);
            $scrubberPuzzle = [];
            array_push($scrubberPuzzle, $puzzle[$opt]);
        }
    }
    var_dump(bindec($newPuzzle[0])*bindec($scrubberPuzzle[0]));
}

function oxygenGenerator(array $puzzle, int $index): array
{
    $bitOne = [];
    $bitZero = [];
    foreach ($puzzle as $key1 => $bit) {
        $explodePuzzle = str_split($bit);
        foreach ($explodePuzzle as $key => $value) {
            if ($key === $index) {
                if ($value === "1") {
                    $bitOne[] = $key1;
                } else {
                    $bitZero[] = $key1;
                }
            }
        }
    }
    if (count($bitZero) > count($bitOne)) {
        return $bitZero;
    }

    return $bitOne;
}

function scrubberGenerator(array $puzzle, int $index): array
{
    $bitOne = [];
    $bitZero = [];
    foreach ($puzzle as $key1 => $bit) {
        $explodePuzzle = str_split($bit);
        foreach ($explodePuzzle as $key => $value) {
            if ($key === $index) {
                if ($value === "1") {
                    $bitOne[] = $key1;
                } else {
                    $bitZero[] = $key1;
                }
            }
        }
    }
    if (count($bitZero) > count($bitOne)) {
        return $bitOne;
    }

    return $bitZero;
}

echo part2();
