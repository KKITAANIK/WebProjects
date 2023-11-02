// this object is to keep track of narrative beats and unlocks

// each "beat" has a test function, a function which unlocks elements, and a report function

const narrativeManager = class {
	constructor(parentObject) {
		this.data = parentObject;
			console.log(parentObject, this.data)
			
		this.beats = [
			{
				triggered: false,
				test: function(data){return data.resource1 >= 10}, 
				unlock:function(){io.showElement("resource2Row")}, 
				report: function(){
					io.appendIntoElement("Purchase a Ticker to slow the march of time.", "reports");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 60}, 
				unlock:function(){game.unit = "m"; game.wagermultiplier = 60}, 
				report: function(){
					io.appendIntoElement("Excess time is now measured in minutes.", "reports");
					io.writeValueIntoClass("Minutes", "units");
					io.writeValueIntoClass("Minutes", "wagerunits");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 1800}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 3600}, 
				unlock:function(){game.unit = "h"; game.wagermultiplier = 3600; io.showElement("runoutRow")}, 
				report: function(){
					io.appendIntoElement("Excess time is now measured in hours.", "reports");
					io.writeValueIntoClass("Hours", "units");
					io.writeValueIntoClass("Hours", "wagerunits");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 43200}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 86400}, 
				unlock:function(){game.unit = "d"; game.wagermultiplier = 86400}, 
				report: function(){
					io.appendIntoElement("Excess time is now measured in days.", "reports");
					io.writeValueIntoClass("Days", "units");
					io.writeValueIntoClass("Days", "wagerunits");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 15768000}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 31536000}, 
				unlock:function(){game.unit = "y"; game.wagermultiplier = 31536000;}, 
				report: function(){
					io.appendIntoElement("Excess time is now measured in years.", "reports");
					io.writeValueIntoClass("Years", "units");
					io.writeValueIntoClass("Years", "wagerunits");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 31536000 * 36.3}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 2290000000}, 
				unlock:function(){game.unit = "l"; game.wagermultiplier = 2290000000;}, 
				report: function(){
					io.appendIntoElement("Congratulations, you will outlast a full human lifetime.", "reports");
					io.writeValueIntoClass("Humans outlived", "units");
					io.writeValueIntoClass("Human Lifetimes", "wagerunits");
				}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 45800000000}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 229000000000}, 
				unlock:function(){io.showElement("upgradeTickersRow")}, 
				report: function(){io.appendIntoElement("A Ticker upgrade is available.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 1000000 / 4.3}, 
				unlock:function(){io.showElement("birthsRow")}, 
				report: function(){}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 1000000 / 1.8}, 
				unlock:function(){io.showElement("deathsRow")}, 
				report: function(){}
			},
			{
				triggered: false,
				test: function(data){return data.resource1 >= 2290000000 * 7888000000}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("You have reached the combined lifespan of the planet's population.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 10}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Congratulations, you are no longer in danger of running out of time.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 11}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Please enjoy the fact that you are now always gaining more time.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 20}, 
				unlock:function(){
					io.showElement("resource3Row")
				},
				report: function(){io.appendIntoElement("Congratulations, you are now gaining time at a rate of<span class='sevenSegment' style='font-size:12px'>1</span> second per second.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 610}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Congratulations, you are now gaining time at a rate of<span class='sevenSegment' style='font-size:12px'>1</span> minute per second.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 3610}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Congratulations, you are now gaining time at a rate of<span class='sevenSegment' style='font-size:12px'>1</span> hour per second.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 86410}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Congratulations, you are now gaining time at a rate of<span class='sevenSegment' style='font-size:12px'>1</span> day per second.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 31536010}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("Congratulations, you are now gaining time at a rate of<span class='sevenSegment' style='font-size:12px'>1</span> year per second.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource2 * data.tickerStrength >= 100}, 
				unlock:function(){io.showElement("showPanel2")},
				report: function(){io.appendIntoElement("Your time is well-automated. Try other activities.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.resource3 >= 25}, 
				unlock:function(){io.showElement("autoManufactoriesRow")},
				report: function(){io.appendIntoElement("Consider automating your Manufactory purchase.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.wagerlosses > (Date.now() - starttime) / 1000}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("You have lost more in wagers than the time you have spent playing this game.", "reports");}
			},
			{
				triggered: false,
				test: function(data){return data.wagerlosses > 2290000000 * 7888000000}, 
				unlock:function(){},
				report: function(){io.appendIntoElement("You have lost more in wagers than the combined lifespan of the planet's population.", "reports");}
			},
		]
	}
	
	setup(){
		io.hideElement("resource2Row")
		io.hideElement("resource3Row")
		io.hideElement("upgradeTickersRow")
		io.hideElement("autoManufactoriesRow")
		io.hideElement("showPanel2")
		io.hideElement("runoutRow")
		io.hideElement("birthsRow")
		io.hideElement("deathsRow")
	}


// goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
	assess(){
		for (let b = 0; b < this.beats.length; b++){
			let beat = this.beats[b]
			if (!beat.triggered){
				if (beat.test(this.data)){
					beat.triggered = true;
					beat.unlock();
					beat.report();
				}
			}
		}
	}

}