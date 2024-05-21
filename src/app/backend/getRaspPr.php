<?php
include "config.php";

//var_dump($_GET['groupa']);

$prepod=$_GET['id_prepod'];
//$prepod =2477;

$data = array();

$vibor_day=$_GET['vibor_day'];


$week =$_GET['week_today'];
$q = mysqli_query($con, "SELECT * FROM `tgputimetable` 
WHERE `id_prepod`= $prepod 
and `TipNedeli` = $week 
and `DenNedeli`=$vibor_day 
ORDER BY `tgputimetable`.`VremyaPo` asc");

while($row= mysqli_fetch_object($q)){
    $data[]=$row;
}

echo json_encode($data);

echo mysqli_error($con);
