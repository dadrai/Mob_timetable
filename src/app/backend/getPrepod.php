<?php
include "config.php";



$data = array();
$id_prepod=$_GET['id_prepod'];
if ($id_prepod==0) {
$q = mysqli_query($con, "SELECT distinct `id_prepod`, fam_pr, name_pr,otch_pr, Prepod FROM `tgputimetable`  WHERE  name_pr!='' ORDER BY `tgputimetable`.`fam_pr` asc");
} else $q = mysqli_query($con, "SELECT distinct `id_prepod`, fam_pr, name_pr,otch_pr, Prepod FROM `tgputimetable`  WHERE  name_pr!='' and `id_prepod`=$id_prepod ORDER BY `tgputimetable`.`fam_pr` asc");
while($row= mysqli_fetch_object($q)){
    $data[]=$row;
}

echo json_encode($data);

echo mysqli_error($con);
