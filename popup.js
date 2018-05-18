// function storeUserPrefs() {
//     var key = "myKey",

//         testPrefs = JSON.stringify({
//             'val': 10
//         });

//     var jsonfile = {};
//     jsonfile[key] = testPrefs;
//     chrome.storage.sync.set(jsonfile, function () {
//         alert('Saved'+ key+testPrefs);
//     });

// }
// storeUserPrefs();


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

time_table = JSON.stringify(time_table);
var key = 'time_table';
var newjson ={};

newjson[key] = time_table;
chrome.storage.sync.set(newjson,function () {});

chrome.storage.sync.get('time_table', function(data) {
    var table  = JSON.parse(data.time_table)
    alert(table.name+" "+table.author);
});

// try{

// 	chrome.storage.sync.get('time_table',function (time_table) {

// 		if(time_table.logs!= null)	{
// 			// var time_table = JSON.parse();	
// 			alert("this works")
// 		}
// 	})
	

// }
// catch(e){
// 	alert(e.message);
// }


// //alert("this works")
// chrome.tabs.query({
//     active: true,
//     currentWindow: true
// 	},

//  		function(tabs) {

//  			var tabURL = tabs[0].url;
//     		var current_tab = [];
// 			current_tab = tabURL.split('/');
// 			//alert("You are switched to : " + current_tab[2]);
// 			// chrome.windows.onFocusChanged.removeListener(this);
// 			 //setInterval(function (){show_time(current_tab[2]);} , 1000);
						
// });

// function show_time(tabURL) {

// 	//document.getElementById('hname').innerHTML = "You spent :"+time_table.data[tabURL].today;
// 	alert("You spent :");
// }


