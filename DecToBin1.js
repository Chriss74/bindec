//Δεκαδικός σε Δυαδικό θετικό προσημασμένο 32-bits

function Clean1(){
    document.getElementById("solutionList1").innerHTML=""
    document.getElementById("solutionDiv1").innerHTML=""
    document.getElementById("Dec1").value=""
    document.getElementById("Bin1").value=""
 }


function DecToBin1(){  
    let dec= document.getElementById("Dec1").value; 
    let bit=parseInt(document.getElementById("bits1").value);
    if (dec<0){
        document.getElementById("Dec1").value=null
        alert("Ο αριθμός πρέπει να είναι μεγαλύτερος από το 0")   
        return
    }else if (bit==64 & dec>9223372036854775807){
        document.getElementById("Dec2").value=null
        alert("Για 64-bit αριθμός πρέπει να είναι μικρότερος ή ίσος με 9.223.372.036.854.775.807")
        return;
    }else if (bit==32 & dec>2147483647){
        document.getElementById("Dec1").value=null
        alert("Για 32-bit αριθμός πρέπει να είναι μικρότερος ή ίσος με 2.147.483.647")
        return;
    }else if (bit==16 & dec>32767){
        document.getElementById("Dec1").value=null
        alert("Για 16-bit ο αριθμός πρέπει να είναι μικρότερος η ίσος με 32.767.")
        return
    }else if (bit==8 & dec>127){
        document.getElementById("Dec1").value=null
        alert("Για 8-bit ο αριθμός πρέπει να είναι μικρότερος η ίσος με 127.")
        return
    }else if (bit==4 & dec>7){
        document.getElementById("Dec1").value=null
        alert("Για 4-bit ο αριθμός πρέπει να είναι μικρότερος η ίσος με 7.")
        return    
    }else if (parseInt(dec).toFixed(0)!=dec){
        alert("Τo πλαίσιο πρέπει να συμπληρωθεί με ακέραιο αριθμό")   
        return;
    }

    if (dec==0){
    document.getElementById("Bin1").value= bit+" μηδενικά"
    return
    }
    document.getElementById("solutionList1").innerHTML=""
    document.getElementById("solutionDiv1").innerHTML=""
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
    document.getElementById("solutionList1").appendChild(Tr)

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
    document.getElementById("solutionList1").appendChild(newTr)
    arr.unshift(dec%2)
    dec=Math.floor(dec/2)
    count=dec/2
   }
   let solution=arr.join("");
   let length=parseInt(solution.length);
   var newp1=document.createElement("p")
   var newp2=document.createElement("p")
   var newp3=document.createElement("p")
   var newP1Text=document.createTextNode("Ο αριθμός προκύπτει από τα ανωτέρω υπόλοιπα σε αντίστροφη σειρά")
   var newP2Text=document.createTextNode("Οι προσημασμένοι δυαδικοί αριθμοί απεικονίζονται με ένα πλήθος ψηφιών που αντιπροσωπεύουν τον ίδιο τον αριθμό συν ένα τουλάχιστον ψηφίο στην αρχή που αντιπροσωπεύει το πρόσημο. Το πρόσημο είναι 0 για τους θετικούς και 1 για τους αρνητικούς. Κάθε ψηφίο κωδικοποιείται σε ένα bit. Ο μεγαλύτερος αριθμός που μπορούν να κωδικοποιήσουν Ν bits είναι ο [2^(Ν-1)]-1 για θετικούς και (2^Ν)-1 για αρνητικούς αριθμούς. Οι αριθμοί συχνά κωδικοποιουνται με σταθερό αριθμό bits, που συνήθως είναι δύναμη του 2, οπότε όλα τα επιπλέον ψηφία απλά παίρνουν την τιμή του προσήμου. Στην περίπτωσή μας επιλέξατε να μετατρέψουμε τον αριθμό σε "+bit+"-bits. Συνεπώς, αν κάτα τη μετατροπή διαπιστώσουμε ότι το πλήθος των ψηφίων είναι μικρότερο από "+bit+" τα υπόλοιπα τα συμπληρώνουμε ανάλογα με το πρόσημο")
   var newP3Text=document.createTextNode("Στην προκείμενη περίπτωση ο αριθμός "+solution+" έχει "+length+" ψηφία. O αριθμός αυτός θα πρέπει να απεικονιστεί με "+bit+ " ψηφία. Δεδομένου δε ότι είναι θετικός αριθμός, οι επιπλέον "+(bit-length) +" θέσεις, θα πρέπει να συμπληρωθούν με 0.") 
   newp1.appendChild(newP1Text)
   newp2.appendChild(newP2Text)
   newp3.appendChild(newP3Text)
   document.getElementById("solutionDiv1").appendChild(newp1)
   document.getElementById("solutionDiv1").appendChild(newp2)
   document.getElementById("solutionDiv1").appendChild(newp3)
   
   for (i=0;i<bit-length;i++){
   solution="0" +solution;
   }
   let solutionFin=solution.substr(0,4)+" "+solution.substr(4,4)+" "+solution.substr(8,4)+" "+solution.substr(12,4)+" "+
   solution.substr(16,4)+" "+solution.substr(20,4)+" "+solution.substr(24,4)+" "+solution.substr(28,4)   
   document.getElementById("Bin1").value= solutionFin
}