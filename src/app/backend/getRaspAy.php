<?php
include "config.php";

//var_dump($_GET['Ayditoriya']);

$id_aydit= $_GET['id_aydit'];


$data = array();

$vibor_day=$_GET['vibor_day'];


$week =$_GET['week_today'];
$q = mysqli_query($con, "SELECT * FROM `tgputimetable` 
WHERE `TipNedeli` = $week 
and `id_aydit`= $id_aydit
and `DenNedeli`=$vibor_day
ORDER BY `tgputimetable`.`VremyaPo` asc");
$today = date('Y-m-j 00:00:00');
while($row= mysqli_fetch_object($q)){
    $data[]=$row;
}

echo json_encode($data);

echo mysqli_error($con);
