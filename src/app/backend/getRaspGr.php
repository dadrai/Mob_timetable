<?php
include "config.php";



$data = array();
$groupa='173';
$DenNedeli1 = date('N');
$week = date('W') +18;
$q = mysqli_query($con, "SELECT * FROM `tgputimetable` WHERE `TipNedeli` = 23  and `Gruppa`= $groupa ");
$today = date('Y-m-j 00:00:00');
while($row= mysqli_fetch_object($q)){
    $data[]=$row;
}

echo json_encode($data);

echo mysqli_error($con);
