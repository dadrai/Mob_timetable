<?php
include "config.php";


//$input = file_get_contents('php: //input');
$data = array();
$groups=array();

$q = mysqli_query($con, "SELECT distinct `Gruppa` FROM `tgputimetable` order by `tgputimetable`.`Gruppa` asc");
$today = date('Y-m-j 00:00:00');
while($row= mysqli_fetch_object($q)){
    $data[]=$row->Gruppa;
   
}
echo json_encode($data);
echo mysqli_error($con);
