        function trackLocation(){
			if (navigator.geolocation){
				navigator.geolocation.watchPosition(showPosition);
				alert("Current Position Loading");
				showPosition();
			} 
			else {
				document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";}
		}

         function showPosition(position){
	         L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
	         document.getElementById('showLocation').innerHTML = 'Latitude:' + position.coords.latitude + '<br>Longitude:' + position.coords.longitude;}

            