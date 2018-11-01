				// *************display weather app info*****************		

						$(document).ready(function(){

						$('#submitWeather').click(function(){

							var city = $('#city').val();

							if(city != ''){

								$.ajax({

					url: 'http://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=imperial' + '&APPID=d2032e58f9c4ad9419826cd0fe298077',
					type:"GET",
					dataType:"jsonp",
					success: function(data){
						console.log(data);

							var widget = show(data);

							$("#show").html(widget);

							$('#city').val('');

					}
				});

		} else {
			$("#error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>You must enter a city name</div");

		}
	});

});
						/***********display weather data from api*********/

	function show(data){

		return "<h3>Current Weather for: "+data.name+", "+data.sys.country+"		</h3>"+
				"<h4><strong>Weather</strong>: "+data.weather[0].main+"</h4>"+
				"<h4><strong>Description</strong>: "+data.weather[0].description+"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" + "</h4>"+
				"<h4><strong>Temperature</strong>: "+data.main.temp+"&#8457</h4>"+
				/*"<h3><strong>Pressure</strong>: "+data.main.pressure+"</h3>"+*/
				"<h4><strong>High</strong>: "+data.main.temp_max+"&#8457</h4>"+
				"<h4><strong>Low</strong>: "+data.main.temp_min+"&#8457</h4>"+
				"<h4><strong>Wind Speed</strong>: "+data.wind.speed+" MPH</h4>"+
				"<h4><strong>Humidity</strong>: "+data.main.humidity+"%"+"</h4>";
				/*"<h3><strong>Wind Direction</strong>: "+data.wind.deg+"&deg</h3>"*/;


	}

			//Smooth scroll animation

			$(function(){
			// smooth scrolling effect
			$('a[href*="#"]:not([href="#"])').click(function(){
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
					}, 1000);
						return false;
				}
			}
		});
	});


			//Display contact info box
			function displayContactInfo(){
				document.getElementById('contact-info').style.display="block";
			}

			//Close contact info box
			function closeContactBox(){
				document.getElementById('contact-info').style.display='none';
			}

			function hideWeather(){
				document.getElementById('show').style.display = 'none';
						}

			function hideError(){
				document.getElementById('error').style.display = 'none';
						}
