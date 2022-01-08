var zahl_tick;
zahl_tick=0;


function change_zahl(){
    vergleich= document.getElementById("imgzahl").src;
    console.log(vergleich);
    if (vergleich=="file:///F:/02_aprocessing/NDR/static/1x/Zahlen_1Artboard%2010.png"){
        document.getElementById("imgzahl").src="static/1x/Zahlen_2Artboard%2010.png"
        console.log("yes");
        return;
    }
    if (vergleich=="file:///F:/02_aprocessing/NDR/static/1x/Zahlen_2Artboard%2010.png"){
        document.getElementById("imgzahl").src="static/1x/Zahlen_3Artboard%2010.png"
        console.log("yes2");
        return;  
    }
    if (vergleich=="file:///F:/02_aprocessing/NDR/static/1x/Zahlen_3Artboard%2010.png"){
        document.getElementById("imgzahl").src="static/1x/Zahlen_1Artboard%2010.png"
        console.log("yes2");
        return;  
    }
    
}