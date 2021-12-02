<?php

function readFromFile() {
    return explode(PHP_EOL, file_get_contents('puzzle.txt'));
}

function part1() {
    $puzzle = readFromFile();
    $horizontal = 0;
    $depth = 0;

    foreach ($puzzle as $pos) {
        $cmd = explode(' ',$pos);
        if($cmd[0] === 'forward') {
            $horizontal += $cmd[1];
        }

        if($cmd[0] === 'down') {
            $depth += $cmd[1];
        }

        if($cmd[0] === 'up') {
            $depth -= $cmd[1];
        }
    }

    return $horizontal * $depth;

}

echo 'Part1: ' . part1() . "\n";

function part2() {
    $puzzle = readFromFile();
    $horizontal = 0;
    $depth = 0;
    $aim = 0;

    foreach ($puzzle as $pos) {
        $cmd = explode(' ',$pos);
        if($cmd[0] === 'forward') {
            $horizontal += $cmd[1];
            $depth += $aim * $cmd[1];
        }

        if($cmd[0] === 'down') {
            $aim += $cmd[1];
        }

        if($cmd[0] === 'up') {
            $aim -= $cmd[1];
        }
    }

    return $horizontal * $depth;
}

echo 'Part2: ' . part2();
