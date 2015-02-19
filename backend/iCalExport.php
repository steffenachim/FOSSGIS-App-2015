<?php
    $Filename = "EventExport.ics";
    header("Content-Type: text/Calendar");
    header("Content-Disposition: inline; filename=$Filename");


    echo "BEGIN:VCALENDAR\n";
    echo "VERSION:1.0\n";
    echo "PRODID:PHP\n";
    echo "METHOD:PUBLISH\n";

    require 'config.php';
    
    $ititles = $_COOKIE['title'];
    $titles = explode(",", $ititles);
    $maxi = count($titles);
	$help = $maxi;
	$sql = "Select title, date, start, room_id, duration
		From Speech
		Where title ";
    for ($i=0; $i <= $maxi; $i++)
    {
		if ($i = $help){
			$sql = $sql."LIKE '%".$titles[$i]."%'";
			$sqlarray[] = $sql;
		}else{
			$sql = $sql."LIKE '%".$titles[$i]."%' OR ";
		}
		
    }
	$sqlfor = $sqlarray[0];
	$sqlend = $sqlfor." GROUP BY date
		Order by start;"
	
		
	$result = mysqli_query($connection, $sqlend);
	   
            
    while($row = mysqli_fetch_array($result)){

    echo 
    "
    BEGIN:VEVENT\n
    SUMMARY:". $row['Summary'] . "\n
    LOCATION;ENCODING=QUOTED-PRINTABLE:".$row['Location']. "\n
    DESCRIPTION:". $row['Description'] . "\n
    DTSTART:".$row['Start']. "\n
    DTEND:".$row['End']. "\n
    END:VEVENT\n
    END:VCALENDAR
    ";

    }
?>
