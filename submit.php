<html>
<head>
	<title>Ihre Auswahl</title>
</head>

<body>

<?php
$ausgewaehlter_VorschlagFr_status="unchecked";
$ausgewaehlter_VorschlagSaMo_status="unchecked";
$ausgewaehlter_VorschlagSaNa_status="unchecked";
$ausgewaehlter_VorschlagSoMo_status="unchecked";

$ausgewaehlter_VorschlagFr = $_POST['vorFr'];
 echo "Ihre Auswahl für Freitag ist $_POST['ausgewaehlter_VorschlagFr']";
 
 if (isset($_POST['submit1'])) {

	$ausgewaehlter_VorschlagFr = $_POST['VorFr'];

 if ($ausgewaehlter_VorschlagFr = = 'Vorschlag 1') {

	$ausgewaehlter_VorschlagFr_status = 'checked';

 }
 else if ($ausgewaehlter_VorschlagFr = = 'Vorschlag 2') {

	$ausgewaehlter_VorschlagFr_status = 'checked';
 }
 }

$ausgewaehlter_VorschlagSaMo = $_POST['vorSaMo'];
 echo "Ihre Auswahl für Samstag ist $ausgewaehlter_VorschlagSaMo";
 
 if (isset($_POST['submit1'])) {

	$ausgewaehlter_VorschlagSaMo = $_POST['VorSaMo'];

 if ($ausgewaehlter_VorschlagSaMo = = 'Vorschlag 1') {

	$ausgewaehlter_VorschlagSaMo_status = 'checked';

 }
 else if ($ausgewaehlter_VorschlagSaMo = = 'Vorschlag 2') {

	$ausgewaehlter_VorschlagSaMo_status = 'checked';
 }
 }
 
$ausgewaehlter_VorschlagSaNa = $_POST['vorSaNa'];
 echo "Ihre Auswahl für Samstag ist $ausgewaehlter_VorschlagSaNa";
 
 if (isset($_POST['submit1'])) {

	$ausgewaehlter_VorschlagSaNa= $_POST['VorSaNa'];

 if ($ausgewaehlter_VorschlagSaNa= = 'Vorschlag 1') {

	$ausgewaehlter_VorschlagSaNa_status = 'checked';

 }
 else if ($ausgewaehlter_VorschlagSaNa = = 'Vorschlag 2') {

	$ausgewaehlter_VorschlagSaNa_status = 'checked';
 }
 }
 
$ausgewaehlter_VorschlagSoMo = $_POST['vorSoNa'];
 echo "Ihre Auswahl für Sonntag ist $ausgewaehlter_VorschlagSoMo";
 
 if (isset($_POST['submit1'])) {

	$ausgewaehlter_VorschlagSoMo = $_POST['VorSoMo'];

 if ($ausgewaehlter_VorschlagSoMo = = 'Vorschlag 1') {

	$ausgewaehlter_VorschlagSoMo_status = 'checked';

 }
 else if ($ausgewaehlter_VorschlagSoMo = = 'Vorschlag 2') {

	$ausgewaehlter_VorschlagSoMo_status = 'checked';
 }
 }

 
$eintrag = "INSERT INTO Tabelle
(Freitag, SamstagMorgen, SamstagNachmittag, SonntagMorgen)
VALUES
('$ausgewaehlter_VorschlagFr', '$ausgewaehlter_VorschlagSaMo', '$ausgewaehlter_VorschlagSaNa', '$ausgewaehlter_VorschlagSoMo')";

$eintragen = mysql_query($eintrag);

?>

</body>
</html>

