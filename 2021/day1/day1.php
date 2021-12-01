<?php 

function readFromFile() {
    return explode(PHP_EOL, file_get_contents('puzzle.txt'));
}

function part1(){
    $puzzle = readFromFile();
    $count = 0;

    foreach ($puzzle as $key => $depth) {
        if($key > 0) {
            $prev = $puzzle[$key-1];
            if($depth > $prev) {
                $count++;
            }
        }
    }
    return $count;
}

echo 'Part 1: ' . part1() . " sums are larger than the previous sum \n";

function part2() {
    $puzzle = readFromFile();
    $count = 0;
    $sums = [];

    foreach ($puzzle as $key => $depth) {
        if(isset($puzzle[$key+1]) && isset($puzzle[$key+2])) {
            $sum1 = $puzzle[$key+1];
            $sum2 = $puzzle[$key+2];
            $sum = $depth + $sum1 + $sum2;
            array_push($sums, $sum);
        }
    }

    foreach ($sums as $key => $depth) {
        if($key > 0) {
            $prev = $sums[$key-1];
            if($depth > $prev) {
                $count++;
            }
        }
    }
    return $count;
}

echo 'Part 2: ' . part2() . " sums are larger than the previous sum \n";

