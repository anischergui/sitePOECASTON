
var f,x;
var z=3;
alert("Bonjour On commence le jeu !!!")
do
{
	x =Number(prompt("Donner un nombre paire"));
	f=x % 2
	if (f == 1)  
                      {z = z-1;
                      	alert("il te reste "+ z + "chances")}
		
                 
		else 
		{alert ("bravo") ;
        break;}
      

}while(z>0);
if (z==0) {
	alert("tu perd");
}
