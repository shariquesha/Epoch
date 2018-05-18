 var time_table = 
{
  "name": "EPOCH",
  "description": "Chrome Extension for measuring time",
  "made": 2018,
  "author": "Md Sharique Shahab",
  "email": "shariqueshahab@gmail.com",
  "github": "shariquesha@github.com",
  
  "data": {}
};


try{
	chrome.storage.sync.get('time_table',function () {
	if(data == null)
	{
		chrome.storage.sync.set({'time_table':JSON.stringify(time_table)});
	}
	})
}
catch(e)
{
	alert(e.messsage);
}




chrome.windows.onFocusChanged.addListener(function() {
try
{
	chrome.tabs.query({
    active: true,
    currentWindow: true
	},

 		function(tabs) {

 			var tabURL = tabs[0].url;
    		var current_tab = [];
			current_tab = tabURL.split('/');
			//alert("You are switched to : " + current_tab[2]);
			// chrome.windows.onFocusChanged.removeListener(this);
			//setInterval(function() {make_entry(current_tab[2]);} , 1000);			
});
}
catch(e)
{
	alert(e.messsage);
}
 

});



chrome.tabs.onActivated.addListener(function() {
try
{
	chrome.tabs.query(  
	{
    active: true,
    currentWindow: true
	},

 		function(tabs)
 		{

 			
 			var tabURL = tabs[0].url;
    		var current_tab = [];
			current_tab = tabURL.split('/');
			//alert("switched to : " + current_tab[2]);
			// getElementById('hname').innerHTML = current_tab[2]
			//setInterval(function() {make_entry(current_tab[2]);} , 1000);
		}
);
}
catch(e)
{
	alert(e.messsage);
}



});

function make_entry(tabURL)
{
	//alert("switched to : " + tabURL);
	try
	{
		var time_table = JSON.parse(chrome.storage.sync.get(time_table));
	//alert(time_table.data[tabURL].today)
	if(time_table.data[tabURL] == null)
	{
		var today = 1;
		var thisweek = 1;
		var thismonth = 1;
		var thisyear = 1;
		var total = 1;
		time_table.data[tabURL] = {'today':today,'thisweek':thisweek,'thismonth':thismonth
			,'thisyear':thisyear,'total':total};
	}
	else
	{
		time_table.data[tabURL].today++;
		time_table.data[tabURL].thisweek++;
		time_table.data[tabURL].thismonth++;
		time_table.data[tabURL].thisyear++;
		time_table.data[tabURL].total++;
	}
		chrome.storage.sync.set(JSON.stringify(time_table));
	}
	catch(e)
	{
		alert(e.messsage);
	}
	
}
