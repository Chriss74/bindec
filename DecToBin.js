 //Δεκαδικός σε Δυαδικό μη προσημασμένος
 function Clean(){
    document.getElementById("solutionList").innerHTML=""
    document.getElementById("Dec").value=""
    document.getElementById("Bin").value=""
 }

 function DecToBin(){  
    let dec= document.getElementById("Dec").value; 
    if (dec>2147483647 || dec<0){
        document.getElementById("Dec").value=null
        alert("Ο αριθμός πρέπει να είναι από 0 έως 2.147.483.647")   
        return;
    }else if (parseInt(dec).toFixed(0)!=dec){
        alert("Τo πλαίσιο πρέπει να συμπληρωθεί με ακέραιο αριθμό")   
        return;
    }

    if (dec==0){
    document.getElementById("Bin").value= "0"   
    return
    }
    document.getElementById("solutionList").innerHTML=""
    var arr=[];
    var Tr=document.createElement('tr')
    var Th1=document.createElement("th")
    var Th2=document.createElement("th")
    var Th3=document.createElement("th")
    var Text1=document.createTextNode("Διαίρεση")
    var Text2=document.createTextNode("Πηλίκο")
    var Text3=document.createTextNode("Υπόλοιπο")
    Th1.appendChild(Text1)
    Th2.appendChild(Text2)
    Th3.appendChild(Text3)
    Tr.appendChild(Th1)
    Tr.appendChild(Th2)
    Tr.appendChild(Th3)
    document.getElementById("solutionList").appendChild(Tr)

    var count=dec/2;
    while (count>0){ 
    var newTr=document.createElement('tr')
    var newTd1=document.createElement('td')
    var newTd2=document.createElement('td')
    var newTd3=document.createElement('td')
    var newText1=document.createTextNode(dec+"/2") 
    var newText2=document.createTextNode(Math.floor(dec/2)) 
    var newText3=document.createTextNode (dec%2)
    newTd1.appendChild(newText1)
    newTd2.appendChild(newText2)
    newTd3.appendChild(newText3)
    newTr.appendChild(newTd1)
    newTr.appendChild(newTd2)
    newTr.appendChild(newTd3)
    document.getElementById("solutionList").appendChild(newTr)
    arr.unshift(dec%2)
    dec=Math.floor(dec/2)
    count=dec/2
   }
   document.getElementById("Bin").value=arr.join("")
}