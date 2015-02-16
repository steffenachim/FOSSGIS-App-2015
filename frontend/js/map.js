
                //initialize map
                var map = L.map('map').setView([51.9635, 7.60973],15);
                map.options.minZoom = 6;
                
                // create and load tile layers
                var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/janu5.8327d153/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFudTUiLCJhIjoiR240TW5pTSJ9.XKYs-6ZWuWc-Yj8Wk1J2Rg', {
                  zIndex: 1,
                  maxZoom: 20,
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>'
                });

                var mapBox = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                  zIndex: 1,
                  maxZoom: 18,
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
                  id: 'examples.map-i875mjb7'
                }).addTo(map);

                var aerial = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
                  zIndex: 1,
                  maxZoom: 18,
                  attribution: 'Map data &copy; <a href="http://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">ArcGis Map Service</a> contributors, ' +
                    '<a href="http://www.esri.com/legal/software-license">Esri Master License Agreement</a>, ' +
                    'Imagery &copy; <a href="http://www.esri.com/">ESRI</a>'
                });

                var OSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  zIndex: 1,
                  maxZoom: 18,
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,'
                });

                //create icons (not needed)
                var specialIcon = L.Icon.extend({
                  options: {
                    shadowUrl: 'css/images/marker-shadow.png',
                    iconAnchor:   [12, 40],
                    shadowAnchor: [12, 40],
                    popupAnchor:  [0, -30]
                  }
                });

                var greenIcon = new specialIcon({iconUrl: 'css/images/marker-icon-green.png'}),
                    greyIcon = new specialIcon({iconUrl: 'css/images/marker-icon-grey.png'}),
                    redIcon = new specialIcon({iconUrl: 'css/images/marker-icon-red.png'}),
                    orangeIcon = new specialIcon({iconUrl: 'css/images/marker-icon-orange.png'});

              	//add icons             
              	var bus1 = L.marker([51.96187, 7.61506], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/1362' width='425px' height='380px' style='overflow:auto'></object>", {maxWidth: "none"});
                var bus2 = L.marker([51.962, 7.61542], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/1361' width='425px' height='380px' style='overflow:auto'></object>", {maxWidth: "none"});
              	var bus3 = L.marker([51.96933, 7.59644], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/5992' width='425px' height='380px' style='overflow:auto'></object>", {maxWidth: "none"});
                var bus4 = L.marker([51.9691, 7.59657], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/5991' width='425px' height='380px' style='overflow:auto'></object>", {maxWidth: "none"});
                var bus5 = L.marker([51.96111, 7.60798], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/5082' width='425px' height='380px' style='overflow:auto'></object>", {maxWidth: "none"});
                var bus6 = L.marker([51.96124, 7.60802], {icon: L.AwesomeMarkers.icon({icon: 'bus', prefix: 'fa', markerColor: 'blue', iconColor: '#ffffff'}) }).bindPopup("<center><b>Linie 13 verkehrt alle 20 Minuten zwischen den Tagungsorten</b></center><object type='text/html' data='http://www.stadtwerke-muenster.de/fis/5081' width='425px' height='380px' style='overflow:auto; '></object>", {maxWidth: "none"});
                var parking1 = L.marker([51.96602, 7.60111], {icon: L.AwesomeMarkers.icon({icon: 'car', prefix: 'fa', markerColor: 'lightblue', iconColor: '#ffffff'}) }).bindPopup("<b>Parkhaus der Universit&auml;t</b><br/><a href='https://maps.google.com?daddr=Domagkstrasse+55+48149+Muenster+Deutschland' target='_blank'>Navigation</a>");
                var parking2 = L.marker([51.96522, 7.61733], {icon: L.AwesomeMarkers.icon({icon: 'car', prefix: 'fa', markerColor: 'lightblue', iconColor: '#ffffff'}) }).bindPopup("<b>Parkplatz auf dem Schlossplatz</b><br/><a href='https://maps.google.com?daddr=Schlossplatz+24-26+48143+Muenster+Deutschland' target='_blank'>Navigation</a>");

                var hotel1 = L.marker([51.95568, 7.61759], {icon: L.AwesomeMarkers.icon({icon: 'bed', prefix: 'fa', markerColor: 'cadetblue', iconColor: '#ffffff'}) }).bindPopup("<b>Hotel Agora</b><br/>N&auml;here Informationen gibt es <a href='http://www.agora-muenster.de/index.php' target='_blank'>hier</a>!<br/><a href='https://maps.google.com?daddr=agora:+das+Hotel+am+Aasee+Bismarckallee+5+48151+Muenster+Deutschland' target='_blank'>Navigation</a>");
                var hotel2 = L.marker([51.95404, 7.61383], {icon: L.AwesomeMarkers.icon({icon: 'bed', prefix: 'fa', markerColor: 'cadetblue', iconColor: '#ffffff'}) }).bindPopup("<b>Jugendg&auml;stehaus am Aasee</b><br/>N&auml;here Informationen gibt es <a href='http://www.djh-wl.de/de/jugendherbergen/muenster' target='_blank'>hier</a>!<br/><a href='https://maps.google.com?daddr=JugendGaestehaus+Bismarckallee+31+48151+Muenster+Deutschland' target='_blank'>Navigation</a>");
                var hotel3 = L.marker([51.96802, 7.61045], {icon: L.AwesomeMarkers.icon({icon: 'bed', prefix: 'fa', markerColor: 'cadetblue', iconColor: '#ffffff'}) }).bindPopup("<b>Hotel am Schlosspark</b><br/>N&auml;here Informationen gibt es <a href='http://www.hotel-am-schlosspark-muenster.de/' target='_blank'>hier</a>!<br/><a href='https://maps.google.com?daddr=Hotel+am+Schlosspark+Schmale+Strasse+2+48149+Muenster+Deutschland' target='_blank'>Navigation</a>");

                var social1 = L.marker([51.96461, 7.61013], {icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'lightgreen', iconColor: '#ffffff'}) }).bindPopup("<a href='https://www.schlossgarten.com/' target='_blank'><b>Schlossgartencaf&eacute;</b></a><br/>Dinner der FOSSGIS am Mittwoch, 11. März 2015 von 19:00 bis 23:00 Uhr<br/><a href='https://maps.google.com?daddr=schlossgarten+cafe+48149+muenster+deutschland' target='_blank'>Navigation</a>");
                var social2 = L.marker([51.96556, 7.62162], {icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'lightgreen', iconColor: '#ffffff'}) }).bindPopup("<a href='http://pinkus.de/gaststaette/altbierkueche/' target='_blank'><b>Pinkus M&uuml;ller</b></a><br/>Inoffizieller Start der FOSSGIS am Dienstag, 10. März 2015 ab 19:30 Uhr<br/><a href='https://maps.google.com?daddr=Brauerei+Pinkus+M&uuml;ller+Kreuzstra&szlig;e+4-10+48143+M&uuml;nster+Deutschland' target='_blank'>Navigation</a>");

                var conference1 = L.marker([51.96943, 7.59574], {zIndexOffset: 100, icon: L.AwesomeMarkers.icon({icon: 'graduation-cap', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).bindPopup("<b>FOSSGIS 2015</b><br/>Workshops der FOSSGIS im GEO1<br/><br/><a id='foot1' onClick='showFoot()'>Fußweg zwischen den Tagungsorten</a><br/><a id='bike1' onClick='showBike()'>Fahrradroute zwischen den Tagungsorten</a><br/><br/><a href='https://maps.google.com?daddr=GEO+1+Heisenbergstrasse+2+48149+Muenster+Deutschland' target='_blank'>Navigation</a>");
                var conference2 = L.marker([51.963772, 7.613425], {zIndexOffset: 100, icon: L.AwesomeMarkers.icon({icon: 'graduation-cap', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).bindPopup("<b>FOSSGIS 2015</b><br/>Vortr&auml;ge der FOSSGIS im Schloss der WWU M&uuml;nster<br/><br/><a id='foot2' onClick='showFoot()'>Fußweg zwischen den Tagungsorten</a><br/><a id='bike2' onClick='showBike()'>Fahrradroute zwischen den Tagungsorten</a><br/><br/><a href='https://maps.google.com?daddr=Westfaelische+Wilhelms-Universitaet+Muenster+Schlossplatz+2+48149+Muenster+Deutschland' target='_blank'>Navigation</a>");

                var conference = L.layerGroup([conference1, conference2]).addTo(map);
                var hotels = L.layerGroup([hotel1, hotel2, hotel3]).addTo(map);
                var gastronomy = L.layerGroup([social1, social2]).addTo(map);
                var transportation = L.layerGroup([bus1, bus2, bus3, bus4, bus5, bus6, parking1, parking2]).addTo(map);

                var bike = L.polyline([[51.96356000, 7.612850000],
                  [51.96310000,7.612820000],
                  [51.96306000,7.612810000],
                  [51.96300000,7.612810000],
                  [51.96248000,7.612780000],
                  [51.96233000,7.612770000],
                  [51.96210000,7.612730000],
                  [51.96208000,7.612730000],
                  [51.96204000,7.612730000],
                  [51.96203000,7.612730000],
                  [51.96178000,7.612700000],
                  [51.96182000,7.612380000],
                  [51.96183000,7.612220000],
                  [51.96189000,7.611710000],
                  [51.96191000,7.611499999],
                  [51.96193000,7.611369999],
                  [51.96193000,7.611290000],
                  [51.96193000,7.611190000],
                  [51.96193000,7.611100000],
                  [51.96192000,7.610980000],
                  [51.96191000,7.610870000],
                  [51.96189000,7.610750000],
                  [51.96186000,7.610590000],
                  [51.96181000,7.610450000],
                  [51.96178000,7.610340000],
                  [51.96176000,7.610270000],
                  [51.96172000,7.610160000],
                  [51.96169000,7.610090000],
                  [51.96164000,7.609980000],
                  [51.96159000,7.609890000],
                  [51.96156000,7.609790000],
                  [51.96147000,7.609570000],
                  [51.96129000,7.609040000],
                  [51.96124000,7.608980000],
                  [51.96120000,7.608840000],
                  [51.96116000,7.608610000],
                  [51.96118000,7.608170000],
                  [51.96120000,7.607810000],
                  [51.96122000,7.607199999],
                  [51.96122000,7.607129999],
                  [51.96122000,7.607040000],
                  [51.96122000,7.606950000],
                  [51.96121000,7.606890000],
                  [51.96121000,7.606850000],
                  [51.96120000,7.606790000],
                  [51.96118000,7.606690000],
                  [51.96115000,7.606570000],
                  [51.96105000,7.606310000],
                  [51.96084000,7.605780000],
                  [51.96075000,7.605560000],
                  [51.96041000,7.604670000],
                  [51.96029000,7.604399999],
                  [51.96023000,7.604250000],
                  [51.96022000,7.604160000],
                  [51.96021000,7.604129999],
                  [51.96006000,7.603720000],
                  [51.95989000,7.603270000],
                  [51.95989000,7.603110000],
                  [51.95990000,7.602970000],
                  [51.95992000,7.602840000],
                  [51.95994000,7.602740000],
                  [51.95997000,7.602670000],
                  [51.96000000,7.602629999],
                  [51.96002000,7.602629999],
                  [51.96051000,7.602620000],
                  [51.96075000,7.602610000],
                  [51.96110000,7.602590000],
                  [51.96147000,7.602560000],
                  [51.96153000,7.602560000],
                  [51.96171000,7.602540000],
                  [51.96187000,7.602499999],
                  [51.96199000,7.602470000],
                  [51.96224000,7.602410000],
                  [51.96252000,7.602320000],
                  [51.96285000,7.602200000],
                  [51.96298000,7.602150000],
                  [51.96360000,7.601930000],
                  [51.96384000,7.601840000],
                  [51.96405000,7.601800000],
                  [51.96416000,7.601770000],
                  [51.96427000,7.601760000],
                  [51.96438000,7.601740000],
                  [51.96445000,7.601740000],
                  [51.96459000,7.601730000],
                  [51.96479000,7.601730000],
                  [51.96504000,7.601740000],
                  [51.96518000,7.601740000],
                  [51.96514000,7.601529999],
                  [51.96512000,7.601370000],
                  [51.96509000,7.601220000],
                  [51.96500000,7.600840000],
                  [51.96498000,7.600650000],
                  [51.96494000,7.600429999],
                  [51.96492000,7.600219999],
                  [51.96490000,7.599830000],
                  [51.96490000,7.599750000],
                  [51.96493000,7.599660000],
                  [51.96497000,7.599350000],
                  [51.96500000,7.599150000],
                  [51.96504000,7.598979999],
                  [51.96507000,7.598910000],
                  [51.96510000,7.598810000],
                  [51.96515000,7.598710000],
                  [51.96521000,7.598590000],
                  [51.96529000,7.598529999],
                  [51.96535000,7.598480000],
                  [51.96539000,7.598450000],
                  [51.96546000,7.598410000],
                  [51.96557000,7.598350000],
                  [51.96570000,7.598329999],
                  [51.96582000,7.598310000],
                  [51.96591000,7.598290000],
                  [51.96599000,7.598259999],
                  [51.96604000,7.598240000],
                  [51.96609000,7.598210000],
                  [51.96611000,7.598200000],
                  [51.96617000,7.598149999],
                  [51.96623000,7.598100000],
                  [51.96629000,7.598040000],
                  [51.96635000,7.597970000],
                  [51.96644000,7.597860000],
                  [51.96648000,7.597780000],
                  [51.96655000,7.597660000],
                  [51.96655000,7.597640000],
                  [51.96663000,7.597480000],
                  [51.96675000,7.597229999],
                  [51.96684000,7.597040000],
                  [51.96689000,7.596970000],
                  [51.96695000,7.596880000],
                  [51.96700000,7.596820000],
                  [51.96702000,7.596810000],
                  [51.96707000,7.596760000],
                  [51.96712000,7.596709999],
                  [51.96718000,7.596680000],
                  [51.96724000,7.596650000],
                  [51.96731000,7.596620000],
                  [51.96740000,7.596600000],
                  [51.96744000,7.596590000],
                  [51.96757000,7.596550000],
                  [51.96791000,7.596540000],
                  [51.96809000,7.596530000],
                  [51.96822000,7.596540000],
                  [51.96838000,7.596540000],
                  [51.96864000,7.596560000],
                  [51.96874000,7.596569999],
                  [51.96876000,7.596480000],
                  [51.96879000,7.596400000],
                  [51.96880000,7.596170000],
                  [51.96882000,7.595850000],
                  [51.96884000,7.595650000]], {
                    color: '#89cff0',
                    opacity: 0.75,
                    weight: 8
                  }).bindPopup('Fahrradroute zwischen den Tagungsorten');
                  
                var foot = L.polyline([[51.96356000,7.612850000],
                  [51.96360000,7.612770000],
                  [51.96364000,7.612679999],
                  [51.96371000,7.612520000],
                  [51.96376000,7.612380000],
                  [51.96388000,7.611980000],
                  [51.96397000,7.611780000],
                  [51.96404000,7.611600000],
                  [51.96406000,7.611580000],
                  [51.96410000,7.611530000],
                  [51.96415000,7.611470000],
                  [51.96418000,7.611410000],
                  [51.96418000,7.611400000],
                  [51.96438000,7.611010000],
                  [51.96457000,7.610660000],
                  [51.96460000,7.610620000],
                  [51.96464000,7.610560000],
                  [51.96467000,7.610520000],
                  [51.96470000,7.610490000],
                  [51.96474000,7.610440000],
                  [51.96482000,7.610380000],
                  [51.96480000,7.609630000],
                  [51.96479000,7.609500000],
                  [51.96476000,7.609310000],
                  [51.96479000,7.609270000],
                  [51.96481000,7.609140000],
                  [51.96481000,7.608790000],
                  [51.96479000,7.608660000],
                  [51.96478000,7.608470000],
                  [51.96476000,7.608350000],
                  [51.96478000,7.608350000],
                  [51.96489000,7.608380000],
                  [51.96484000,7.608340000],
                  [51.96466000,7.608180000],
                  [51.96466000,7.608170000],
                  [51.96464000,7.608150000],
                  [51.96461000,7.608110000],
                  [51.96459000,7.608080000],
                  [51.96457000,7.608010000],
                  [51.96442000,7.607660000],
                  [51.96443000,7.607640000],
                  [51.96459000,7.607430000],
                  [51.96460000,7.607410000],
                  [51.96462000,7.607380000],
                  [51.96472000,7.607510000],
                  [51.96478000,7.607560000],
                  [51.96485000,7.607579999],
                  [51.96491000,7.607620000],
                  [51.96516000,7.607840000],
                  [51.96532000,7.607940000],
                  [51.96548000,7.608000000],
                  [51.96559000,7.608020000],
                  [51.96568000,7.607860000],
                  [51.96574000,7.607730000],
                  [51.96580000,7.607620000],
                  [51.96587000,7.607540000],
                  [51.96594000,7.607470000],
                  [51.96601000,7.607410000],
                  [51.96609000,7.607340000],
                  [51.96622000,7.607230000],
                  [51.96631000,7.607150000],
                  [51.96641000,7.607070000],
                  [51.96653000,7.606980000],
                  [51.96644000,7.606730000],
                  [51.96659000,7.606660000],
                  [51.96667000,7.606630000],
                  [51.96675000,7.606600000],
                  [51.96685000,7.606560000],
                  [51.96693000,7.606539999],
                  [51.96763000,7.606360000],
                  [51.96818000,7.606230000],
                  [51.96820000,7.606230000],
                  [51.96829000,7.606219999],
                  [51.96834000,7.606210000],
                  [51.96837000,7.605840000],
                  [51.96839000,7.605670000],
                  [51.96842000,7.605450000],
                  [51.96844000,7.605280000],
                  [51.96846000,7.605130000],
                  [51.96852000,7.604800000],
                  [51.96870000,7.604000000],
                  [51.96869000,7.603809999],
                  [51.96874000,7.603380000],
                  [51.96887000,7.602800000],
                  [51.96889000,7.602700000],
                  [51.96891000,7.602610000],
                  [51.96854000,7.602430000],
                  [51.96848000,7.602390000],
                  [51.96846000,7.602390000],
                  [51.96842000,7.602360000],
                  [51.96844000,7.602240000],
                  [51.96846000,7.602150000],
                  [51.96846000,7.602030000],
                  [51.96846000,7.602020000],
                  [51.96845000,7.601860000],
                  [51.96850000,7.601830000],
                  [51.96852000,7.601830000],
                  [51.96853000,7.601810000],
                  [51.96853000,7.601770000],
                  [51.96853000,7.601730000],
                  [51.96848000,7.601150000],
                  [51.96844000,7.601010000],
                  [51.96844000,7.600500000],
                  [51.96842000,7.600300000],
                  [51.96841000,7.600000000],
                  [51.96840000,7.599670000],
                  [51.96840000,7.599410000],
                  [51.96840000,7.599150000],
                  [51.96841000,7.599100000],
                  [51.96840000,7.599010000],
                  [51.96840000,7.598800000],
                  [51.96840000,7.598650000],
                  [51.96841000,7.598580000],
                  [51.96842000,7.598380000],
                  [51.96841000,7.598259999],
                  [51.96841000,7.598170000],
                  [51.96847000,7.597720000],
                  [51.96855000,7.597300000],
                  [51.96867000,7.596750000],
                  [51.96874000,7.596569999],
                  [51.96876000,7.596480000],
                  [51.96879000,7.596400000],
                  [51.96880000,7.596170000],
                  [51.96882000,7.595919999]], {
                    color: '#89cff0',
                    opacity: 0.75,
                    weight: 8
                  }).bindPopup('Fußweg zwischen den Tagungsorten');

                //functions to show/hide the routes
                var iFoot = false;

                function showFoot () {

                if (iFoot == false) {

                map.addLayer(foot);

                iFoot = true;

                } else {

                  map.removeLayer(foot);

                  iFoot = false;

                }

                }

                var iBike = false;

                function showBike () {

                if (iBike == false) {

                map.addLayer(bike);;

                iBike = true;

                } else {

                  map.removeLayer(bike);

                  iBike = false;

                }

                }

                // crate a baseLayer-variable in which all the basemap-tile-layers are stored
                var baseLayers = {
                  //"FOSSGIS MapBox": mapboxTiles,
                  "OSM MapBox": mapBox,
                  "ESRI Aerial": aerial,
                  "OSM Standard": OSM
                };

                // create a overlayMaps-variable in which all overlays are stored
                var overlayMaps = {
                  "Tagungsorte": conference,
                  "Hotels": hotels,
                  "Social Events": gastronomy,
                  "Verkehr": transportation
                };

                // initialize the layer-control toolbar
                L.control.layers(baseLayers, overlayMaps).addTo(map);

                // initialize the location toolbar
                L.control.locate({follow: true}).addTo(map);
                
                //recenter map on tab active
                function navigation() {
		              map.invalidateSize(true);
                }