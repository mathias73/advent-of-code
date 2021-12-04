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

echo 'Part1: ' . part1() . "\n";

function part2()
{
    $puzzleOxy = readFromFile();
    $puzzleScrub = readFromFile();

    $countScrub = 0;
    $countOxy = 0;

    $stopOxy = false;
    while (!$stopOxy) {
        $puzzleOxy = oxygenGenerator($puzzleOxy, $countOxy);
        if(count($puzzleOxy) === 1) {
            $stopOxy = true;
        }
        $countOxy++;
    }

    $stopScrub = false;
    while (!$stopScrub) {
        $puzzleScrub = scrubberGenerator($puzzleScrub, $countScrub);
        if(count($puzzleScrub) === 1) {
            $stopScrub = true;
        }
        $countScrub++;
    }
    return bindec($puzzleOxy[0]) *  bindec($puzzleScrub[0]);
}

function oxygenGenerator(array $puzzle, int $index): array
{
    $bits = generateArray($puzzle, $index);
    if (count($bits[0]) > count($bits[1])) {
        return $bits[0];
    }

    return $bits[1];
}

function scrubberGenerator(array $puzzle, int $index): array
{
    $bits = generateArray($puzzle, $index);
    if (count($bits[0]) > count($bits[1])) {
        return $bits[1];
    }

    return $bits[0];
}

function generateArray(array $puzzle, int $index): array
{
    $bitOne = [];
    $bitZero = [];
    foreach ($puzzle as $key1 => $bit) {
        $explodePuzzle = str_split($bit);
        foreach ($explodePuzzle as $key => $value) {
            if ($key === $index) {
                if ($value === "1") {
                    $bitOne[] = $bit;
                } else {
                    $bitZero[] = $bit;
                }
            }
        }
    }

    return [
        0 => $bitZero,
        1 => $bitOne,
    ];
}

echo 'Part2: ' . part2();
