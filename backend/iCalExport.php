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
	$sql = ""
    for ($i=0; $i <= $maxi; $i++)
    {
		$sql = $sql."
		Select title, date, start, room_id
		From Speech
		Where title = $titles[$i];";
		echo $titles[$i];
    }
		
	$result = mysqli_query($connection, $sql);
	   
            
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
