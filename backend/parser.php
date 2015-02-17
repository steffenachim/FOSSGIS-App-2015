<?php

ini_set('display_errors', '1');
	error_reporting(E_ALL | E_STRICT);

	include("config.php");
	
	
//delete data from database
$sql1 = "DELETE FROM Speech;";
$sql2 = "DELETE FROM Links;";
$sql3 = "DELETE FROM SpeakerSpeech;";
$sql4 = "DELETE FROM Speaker;";

//execute query
mysqli_query($connection, $sql1);
mysqli_query($connection, $sql2);
mysqli_query($connection, $sql3);
mysqli_query($connection, $sql4);

//Objekt erzeugen
$xml = "http://www.fossgis.de/konferenz/2015/programm/schedule.de.xml";

          $Response = @simplexml_load_file($xml) or
          die ("Fehler beim Laden der Datei: ".$xml."\n");


/* Objekt erzeugen
if (file_exists('test.xml')) {
    $xml = simplexml_load_file('test.xml');
    
    
} else {
    exit('Konnte test.xml nicht öffnen.');
}
print_r($Response); */

foreach ( $Response->{'day'} as $day)
    {
      foreach ($day->{'room'} as $room) 
      {
      	$room_id = $room['name'];

        foreach($room->{'event'} as $event)
      	{
      		$id = $event['id'];	
      		$date = $event->{'date'};
      		$start =  $event->{'start'};
      		$duration =  $event->{'duration'};
      		$slug =  $event->{'slug'};        
      		$title =  $event->{'title'};
      		$subtitle =  $event->{'subtitle'};
      		$language =  $event->{'language'};
      		$abstract =  $event->{'abstract'};
      		$description =  $event->{'description'};
      		$links =  $event->{'links'}->{'link'};
      		
      		//insert events into database
          $sql5 = "INSERT INTO Speech (id, date, start, duration, room_id, slug, title, subtitle, language, abstract, description) 
      			VALUES ($id, '$date', '$start', '$duration', '$room_id', '$slug', '$title', '$subtitle', '$language', '$abstract', '$description')";

           //execute insert
          mysqli_query($connection, $sql5);	
      		
      	}
      	
      }
    }

foreach ( $Response->{'day'} as $day)
    {
      foreach ($day->{'room'} as $room) 
      {
        foreach($room->{'event'} as $event)
        {
          $speech_id = $event['id'];

          foreach($event->{'links'}-> children() as $gen)
          {

            $link_title = $gen;
            $link_url = $gen['href'];

            //insert links into database
            $sql6 = "INSERT INTO Links (speech_id, url, title) VALUES ($speech_id, '$link_url', '$link_title')";

            //execute insert
            mysqli_query($connection, $sql6); 
          }
        }
      }
    }

foreach ( $Response->{'day'} as $day)
    {
      foreach ($day->{'room'} as $room) 
      {
        foreach($room->{'event'} as $event)
        {
          $speech_id = $event['id'];

          foreach($event->{'persons'}-> children() as $gen)
          {

            $speaker_id = $gen['id'];
            $speaker_name = $gen;

            //insert links into database
            $sql7 = "INSERT INTO SpeakerSpeech (speech_id, speaker_id) VALUES ($speech_id, $speaker_id)";
            $sql8 = "INSERT INTO Speaker (id, name) VALUES ($speaker_id, '$speaker_name') ";
            
            //execute insert
            mysqli_query($connection, $sql7); 
            mysqli_query($connection, $sql8);
          }
        }
      }
    }

 echo "Die Daten aus der XML-Datei wurden erfolgreich in die Datenbank eingef&uumlgt.";


?>

	

	
