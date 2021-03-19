<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

# Teknologi 1, Kea forår 2021
<div style="text-align:right"><small>
Undervisning: Dat20C onsdage 12:30 - 15:45 <br>    
Undervisning: Dat20B fredage 12:30 - 15:45 <br>    
Underviser: Claus Bove, clbo@kea.dk <br>
Benjamin Hughes behu@kea.dk
<br><br>
</small>  
</div>

| Dat20C | Dat20B | Emne | 
|:---:|:---:| --- |
||| [Introduktion til Teknologifaget og Computer Arkitektur](1.md)|
||| [Operativsystemer og Unix File System](2.md)|
||| [Obligatorisk opgave (Operativsstemer - Webserver)](3.md)|
||| [Peer review af Obligatorisk opgave](4.md)|
||| [Client / Server arkitektur](5.md)|
||| [Database Management Systems, DBMS](6.md)|
||| [<small><i>Ingen Undervisning</i></small>]()|
||| [Cloud Computing Basics & Amazon Web Services](8.md)|
||| <small><i>Påskeferie</i></small>|
||| [Amazon Web Services - WAR & MySQL Deployment](9.md)|
||| [Miniprojekt](11.md) |
||| [PaaS - Elastic Beanstalk (kun dat20B)](10.md)|
||| [PaaS - Elastic Beanstalk (kun dat20C)](10.md)|
||| [Eksamensprojekt](14.md)|
||| [Eksamensprojekt](15.md)|
||| [Eksamensprojekt](16.md)|
||| [Eksamensprojekt](17.md)|

<div style='text-align:right'><i><small>&copy; clbo@kea.dk, Forår 2021</small></i></div>

<script>  

$().ready(function() {
	$("h1:first").css("display", "none");
});


var dates = [
	{dat20c: '3/2', dat20b: '5/2'},
	{dat20c: '10/2', dat20b:'12/2' },
	{dat20c: '17/2', dat20b:'19/2' },
	{dat20c: '24/2', dat20b:'26/2' 	},
	{dat20c: '3/3', dat20b:	'5/3' 	 },
	{dat20c: '10/3', dat20b:'12/3' 	 },
	{dat20c: '17/3', dat20b:'19/3' 	 },
	{dat20c: '24/3', dat20b:'26/3' },

	{dat20c:' - ', dat20b:	' - ' },

	{dat20c:'7/4', dat20b:'9/4'},
	{dat20c:'14/4', dat20b:	'16/4'},
	{dat20c:'21/4 <small><i>(ingen undervisning)</i></small>', dat20b:	'23/4'},
	{dat20c:'28/4', dat20b:	'St.bededag'},
	{dat20c:'5/5', dat20b:	'7/5'},
	{dat20c:'12/5', dat20b:	'Kr.Him' },
	{dat20c:'19/5', dat20b:	'21/5'},
	{dat20c:'26/5', dat20b:	'28/5'	 },

]
var table = document.getElementsByTagName("table");  
var tbody = document.getElementsByTagName("tbody")
var rows = document.getElementsByTagName("tr");  
for(i = 1; i < rows.length; i++){  
  var tds = rows[i].getElementsByTagName("td"); 
  tds[0].innerHTML= dates[i-1].dat20c; 
  tds[1].innerHTML= dates[i-1].dat20b;
}
/*
var section = document.getElementById('downloads');
console.log(section)
var ar = section.getElementsByTagName("a");

for (i = 0; i < ar.length; ++i)
   ar[i].style.display = "none";
*/

</script>
