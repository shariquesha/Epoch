//  var time_table = 
// {
//   "name": "EPOCH",
//   "description": "Chrome Extension for measuring time",
//   "made": 2018,
//   "author": "Md Sharique Shahab",
//   "email": "shariqueshahab@gmail.com",
//   "github": "shariquesha@github.com",
  
//   "data": {}
// };

// if(localStorage.getItem('time_table') == null)
// {
// 	localStorage.setItem('time_table',JSON.stringify(time_table));
// }


// var url = window.location.href

// var current_tab =  [];

// current_tab = url.split('/')

// setInterval(function() {make_entry(current_tab[2]);} , 1000);	


// function make_entry(tabURL)
// {
// 	var time_table = JSON.parse(localStorage.getItem('time_table'));
	
// 	if(time_table.data[tabURL] == null)
// 	{
// 		var today = 1;
// 		var thisweek = 1;
// 		var thismonth = 1;
// 		var thisyear = 1;
// 		var total = 1;
// 		time_table.data[tabURL] = {'today':today,'thisweek':thisweek,'thismonth':thismonth
// 			,'thisyear':thisyear,'total':total};
// 	}
// 	else
// 	{
// 		time_table.data[tabURL].today++;
// 		time_table.data[tabURL].thisweek++;
// 		time_table.data[tabURL].thismonth++;
// 		time_table.data[tabURL].thisyear++;
// 		time_table.data[tabURL].total++;
// 	}

// 	localStorage.setItem('time_table',JSON.stringify(time_table));
// }
