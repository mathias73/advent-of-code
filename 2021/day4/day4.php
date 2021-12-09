<?php

function readFromFile()
{
    return explode(PHP_EOL . PHP_EOL, file_get_contents('puzzle.txt'));
}

function part1()
{
    $cleanPuzzle = formatGrid(readFromFile());
    array_shift($cleanPuzzle);
    $puzzle = readFromFile();
    $draw = array_map('intval', explode(',', array_shift($puzzle)));
    $puzzle = formatGrid($puzzle);
    $drawnNum = [];
    foreach ($draw as $keyD => $drawNum) {
        array_push($drawnNum, $drawNum);
        foreach ($puzzle as $keyP => $grid) {
            foreach ($grid as $keyR => $row) {
                if (count($row) == 0) {
                    array_pop($drawnNum);
                    $grid = cleanUnmarkedNumber($cleanPuzzle[$keyP], $drawnNum);
                    return result($draw[$keyD-1], $grid);
                }
                foreach ($row as $keyN => $num) {
                    if ($drawNum === $num) {
                        unset($puzzle[$keyP][$keyR][$keyN]);
                    }
                }
            }
        }
    }
}

function result(int $drawNum, array $grid) {
    $unmarked = 0;
    foreach ($grid as $row) {
        foreach ($row as $num) {
            $unmarked += $num;
        }
    }

    return $unmarked * $drawNum;
}

function cleanUnmarkedNumber(array $grid, array $markedNumber): array
{
    foreach ($markedNumber as $drawNum) {
        foreach ($grid as $keyGrid => $row) {
            foreach ($row as $keyRow => $num) {
                if ($drawNum === $num) {
                    unset($grid[$keyGrid][$keyRow]);
                }
            }
        }
    }
    return $grid;
}

function formatGrid(array $puzzle): array
{
    foreach ($puzzle as $keyP => $grid) {
        $row = explode("\n", $grid);
        foreach ($row as $keyR => $rowValue) {
            $rowResult = array_map('intval', preg_split('/\s+/', trim($rowValue)));
            $row[$keyR] = $rowResult;
        }
        $puzzle[$keyP] = $row;
    }
    unset($puzzle[99][5]);
    return $puzzle;
}

echo part1();
