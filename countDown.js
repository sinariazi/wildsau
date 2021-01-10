
//Homepage

function makeTimer() {

    //		var endTime = new Date("22 August 2020 9:56:00 GMT+01:00");	
        var endTime = new Date("22 August 2020 9:00:00 GMT+01:00");			
            endTime = (Date.parse(endTime) / 1000);

            var now = new Date();
            now = (Date.parse(now) / 1000);

            var timeLeft = endTime - now;

            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }

            $("#days").html(days + "<span>Tage</span>");
            $("#hours").html(hoursOOE + "<span>Stunden</span>");
            $("#minutes").html(minutesOOE + "<span>Minuten</span>");
            $("#seconds").html(secondsOOE + "<span>Sekunden</span>");		

    }

    setInterval(function() { makeTimerNIE20(); }, 1000);
//Wien

function makeTimerWien() {

	//		var endTimeWien = new Date("01 August 2020 9:56:00 GMT+01:00");	
		var endTimeWien = new Date("01 August 2020 9:00:00 GMT+01:00");			
			endTimeWien = (Date.parse(endTimeWien) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeftWien = endTimeWien - now;

			var daysWien = Math.floor(timeLeftWien / 86400); 
			var hoursWien = Math.floor((timeLeftWien - (daysWien * 86400)) / 3600);
			var minutesWien = Math.floor((timeLeftWien - (daysWien * 86400) - (hoursWien * 3600 )) / 60);
			var secondsWien = Math.floor((timeLeftWien - (daysWien * 86400) - (hoursWien * 3600) - (minutesWien * 60)));
  
			if (hoursWien < "10") { hoursWien = "0" + hoursWien; }
			if (minutesWien < "10") { minutesWien = "0" + minutesWien; }
			if (secondsWien < "10") { secondsWien = "0" + secondsWien; }

			$("#daysWien").html(daysWien + "<span> Tage</span>");
			$("#hoursWien").html(hoursWien + "<span> Stunden</span>");
			$("#minutesWien").html(minutesWien + "<span> Minuten</span>");
			$("#secondsWien").html(secondsWien + "<span> Sekunden</span>");		

	}

	setInterval(function() { makeTimerWien(); }, 1000);



//OOE

         function makeTimerOOE() {

                    //		var endTimeOOE = new Date("22 August 2020 9:56:00 GMT+01:00");	
                        var endTimeOOE = new Date("22 August 2020 9:00:00 GMT+01:00");			
                            endTimeOOE = (Date.parse(endTimeOOE) / 1000);
                
                            var now = new Date();
                            now = (Date.parse(now) / 1000);
                
                            var timeLeftOOE = endTimeOOE - now;
                
                            var daysOOE = Math.floor(timeLeftOOE / 86400); 
                            var hoursOOE = Math.floor((timeLeftOOE - (daysOOE * 86400)) / 3600);
                            var minutesOOE = Math.floor((timeLeftOOE - (daysOOE * 86400) - (hoursOOE * 3600 )) / 60);
                            var secondsOOE = Math.floor((timeLeftOOE - (daysOOE * 86400) - (hoursOOE * 3600) - (minutesOOE * 60)));
                  
                            if (hoursOOE < "10") { hoursOOE = "0" + hoursOOE; }
                            if (minutesOOE < "10") { minutesOOE = "0" + minutesOOE; }
                            if (secondsOOE < "10") { secondsOOE = "0" + secondsOOE; }
                
                            $("#daysOOE").html(daysOOE + "<span>Tage</span>");
                            $("#hoursOOE").html(hoursOOE + "<span>Stunden</span>");
                            $("#minutesOOE").html(minutesOOE + "<span>Minuten</span>");
                            $("#secondsOOE").html(secondsOOE + "<span>Sekunden</span>");		
                
                    }
                
                    setInterval(function() { makeTimerOOE(); }, 1000);
                

        
//Salzburg

            

         function makeTimerSalzburg() {

            //		var endTimeSalzburg = new Date("05 September 2020 9:00:00 GMT+01:00");	
                var endTimeSalzburg= new Date("05 September 2020 9:00:00 GMT+01:00");			
                    endTimeSalzburg = (Date.parse(endTimeSalzburg) / 1000);
        
                    var now = new Date();
                    now = (Date.parse(now) / 1000);
        
                    var timeLeftSalzburg = endTimeSalzburg - now;
        
                    var daysSalzburg = Math.floor(timeLeftSalzburg / 86400); 
                    var hoursSalzburg = Math.floor((timeLeftSalzburg - (daysSalzburg * 86400)) / 3600);
                    var minutesSalzburg = Math.floor((timeLeftSalzburg - (daysSalzburg * 86400) - (hoursSalzburg * 3600 )) / 60);
                    var secondsSalzburg = Math.floor((timeLeftSalzburg - (daysSalzburg * 86400) - (hoursSalzburg * 3600) - (minutesSalzburg * 60)));
          
                    if (hoursSalzburg < "10") { hoursSalzburg = "0" + hoursSalzburg; }
                    if (minutesSalzburg < "10") { minutesSalzburg = "0" + minutesSalzburg; }
                    if (secondsSalzburg < "10") { secondsSalzburg = "0" + secondsSalzburg; }
        
                    $("#daysSalzburg").html(daysSalzburg + "<span>Tage</span>");
                    $("#hoursSalzburg").html(hoursSalzburg + "<span>Stunden</span>");
                    $("#minutesSalzburg").html(minutesSalzburg + "<span>Minuten</span>");
                    $("#secondsSalzburg").html(secondsSalzburg + "<span>Sekunden</span>");		
        
            }
        
            setInterval(function() { makeTimerSalzburg(); }, 1000);

//Steiermark

        function makeTimerSteiermark() {

            //		var endTime = new Date("26 September 2020 9:56:00 GMT+01:00");	
                var endTimeSteiermark = new Date("26 September 2020 9:56:00 GMT+01:00");			
                    endTimeSteiermark = (Date.parse(endTimeSteiermark) / 1000);

                    var now = new Date();
                    now = (Date.parse(now) / 1000);

                    var timeLeftSteiermark = endTimeSteiermark - now;

                    var daysSteiermark = Math.floor(timeLeftSteiermark / 86400); 
                    var hoursSteiermark = Math.floor((timeLeftSteiermark - (daysSteiermark * 86400)) / 3600);
                    var minutesSteiermark = Math.floor((timeLeftSteiermark - (daysSteiermark * 86400) - (hoursSteiermark * 3600 )) / 60);
                    var secondsSteiermark = Math.floor((timeLeftSteiermark - (daysSteiermark * 86400) - (hoursSteiermark * 3600) - (minutesSteiermark * 60)));
        
                    if (hoursSteiermark < "10") { hoursSteiermark = "0" + hoursSteiermark; }
                    if (minutesSteiermark < "10") { minutesSteiermark = "0" + minutesSteiermark; }
                    if (secondsSteiermark < "10") { secondsSteiermark = "0" + secondsSteiermark; }

                    $("#days").html(daysSteiermark + "<span>Tage</span>");
                    $("#hours").html(hoursSteiermark + "<span>Stunden</span>");
                    $("#minutes").html(minutesSteiermark + "<span>Minuten</span>");
                    $("#seconds").html(secondsSteiermark + "<span>Sekunden</span>");		

            }

            setInterval(function() { makeTimerSteiermark(); }, 1000);

//NIE


            function makeTimerNIE() {

                //		var endTime = new Date("17 October 2020 9:00:00 GMT+01:00");	
                    var endTimeNIE = new Date("18 October 2020 9:00:00 GMT+01:00");			
                        endTimeNIE = (Date.parse(endTimeNIE) / 1000);
            
                        var now = new Date();
                        now = (Date.parse(now) / 1000);
            
                        var timeLeftNIE = endTimeNIE - now;
            
                        var daysNIE = Math.floor(timeLeftNIE / 86400); 
                        var hoursNIE = Math.floor((timeLeftNIE - (daysNIE * 86400)) / 3600);
                        var minutesNIE = Math.floor((timeLeftNIE - (daysNIE * 86400) - (hoursNIE * 3600 )) / 60);
                        var secondsNIE = Math.floor((timeLeftNIE - (daysNIE * 86400) - (hoursNIE * 3600) - (minutesNIE * 60)));
              
                        if (hoursNIE < "10") { hoursNIE = "0" + hoursNIE; }
                        if (minutesNIE < "10") { minutesNIE = "0" + minutesNIE; }
                        if (secondsNIE < "10") { secondsNIE = "0" + secondsNIE; }
            
                        $("#daysNIE").html(daysNIE + "<span>Tage</span>");
                        $("#hoursNIE").html(hoursNIE + "<span>Stunden</span>");
                        $("#minutesNIE").html(minutesNIE + "<span>Minuten</span>");
                        $("#secondsNIE").html(secondsNIE + "<span>Sekunden</span>");		
            
                }
            
                setInterval(function() { makeTimerNIE(); }, 1000);
            