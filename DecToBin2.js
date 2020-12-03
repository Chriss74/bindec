 //Αρνητικός δεκαδικός σε δυαδικό
 function Clean2(){
     console.log("clean")
    document.getElementById("solutionList2").innerHTML=""
    document.getElementById("solutionDiv2").innerHTML=""
    document.getElementById("solutionDiv2a").innerHTML=""
    document.getElementById("Dec2").value=""
    document.getElementById("Bin2").value=""  
 }


 function DecToBin2(){   
     //Καθαρισμός οθόνης
    document.getElementById("solutionList2").innerHTML=""
    document.getElementById("solutionDiv2").innerHTML=""
    document.getElementById("solutionDiv2a").innerHTML=""
    
    //Βασικά Δεδομένα
    let dec= document.getElementById("Dec2").value;  
    dec=dec*-1
    
    //Ελεγχοι
    let bit=parseInt(document.getElementById("bits2").value);
    if (dec==0){
    document.getElementById("Bin2").value= bit+" μηδενικά"
    return
    }
    if (dec<0){
        document.getElementById("Dec2").value=null
        alert("Ο αριθμός πρέπει να είναι μικρότερος από το 0")   
        return
    }else if (bit==64 & dec>9223372036854775808){
        document.getElementById("Dec2").value=null
        alert("Για 64-bit αριθμός πρέπει να είναι μεγαλύτερος ή ίσος με -9.223.372.036.854.775.808")
        return;
    }else if (bit==32 & dec>2147483648){
        document.getElementById("Dec2").value=null
        alert("Για 32-bit αριθμός πρέπει να είναι μεγαλύτερος ή ίσος με -2.147.483.648")
        return;
    }else if (bit==16 & dec>32768){
        document.getElementById("Dec2").value=null
        alert("Για 16-bit ο αριθμός πρέπει να είναι μεγαλύτερος η ίσος με -32.768.")
        return
    }else if (bit==8 & dec>128){
        document.getElementById("Dec2").value=null
        alert("Για 8-bit ο αριθμός πρέπει να είναι μεγαλύτερος η ίσος με -128.")
        return
    }else if (bit==4 & dec>8){
        document.getElementById("Dec2").value=null
        alert("Για 4-bit ο αριθμός πρέπει να είναι μεγαλύτερος η ίσος με -8.")
        return    
    }else if (parseInt(dec).toFixed(0)!=dec){
        alert("Τo πλαίσιο πρέπει να συμπληρωθεί με ακέραιο αριθμό")   
        return;
    }
    
  
    
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
    document.getElementById("solutionList2").appendChild(Tr)

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
    document.getElementById("solutionList2").appendChild(newTr)
    arr.unshift(dec%2)
    dec=Math.floor(dec/2)
    count=dec/2
   }
   let solution=arr.join("");
   let length=parseInt(solution.length);
   
 

   //Μετατροπή σε θετικό δυαδικό
   var newptitle1=document.createElement("h3")
   var newp1=document.createElement("p")
   var newp2=document.createElement("p")
   var newp3=document.createElement("p")
   
   var newPTitle1Text=document.createTextNode("Πρώτο Βήμα-Μετατροπή στον θετικό προσημασμένο δυαδικό")
   var newP1Text=document.createTextNode("Ο αριθμός προκύπτει από τα ανωτέρω υπόλοιπα σε αντίστροφη σειρά.")
   var newP2Text=document.createTextNode("Οι προσημασμένοι δυαδικοί αριθμοί απεικονίζονται με ένα πλήθος ψηφιών που αντιπροσωπεύουν τον ίδιο τον αριθμό συν ένα τουλάχιστον ψηφίο στην αρχή που αντιπροσωπεύει το πρόσημο. Το πρόσημο είναι 0 για τους θετικούς και 1 για τους αρνητικούς. Κάθε ψηφίο κωδικοποιείται σε ένα bit. Ο μεγαλύτερος αριθμός που μπορούν να κωδικοποιήσουν Ν bits είναι ο [2^(Ν-1)]-1 για θετικούς και (2^Ν)-1 για αρνητικούς αριθμούς. Οι αριθμοί συχνά κωδικοποιουνται με σταθερό αριθμό bits, που συνήθως είναι δύναμη του 2, οπότε όλα τα επιπλέον ψηφία απλά παίρνουν την τιμή του προσήμου. Στην περίπτωσή μας επιλέξατε να μετατρέψουμε τους αριθμούς σε "+ bit+"-bits.  Συνεπώς, αν κάτα τη μετατροπή διαπιστώσουμε ότι το πλήθος των ψηφίων είναι μικρότερο από "+bit+" τα υπόλοιπα τα συμπληρώνουμε ανάλογα με το πρόσημο")
   var newP3Text=document.createTextNode("Στην προκείμενη περίπτωση ο αριθμός "+solution+" έχει "+length+" ψηφία. O αριθμός αυτός θα πρέπει να απεικονιστεί με "+bit+ " ψηφία. Δεδομένου δε ότι   στο παρόν βήμα μετατρέπουμε σε θετικό αριθμό οι επιπλέον "+(bit-length) +" θέσεις, θα πρέπει να συμπληρωθούν με 0.") 
   
   newptitle1.appendChild(newPTitle1Text)
   newp1.appendChild(newP1Text)
   newp2.appendChild(newP2Text)
   newp3.appendChild(newP3Text)

   document.getElementById("solutionDiv2").appendChild(newptitle1)
   document.getElementById("solutionDiv2").appendChild(newp1)
   document.getElementById("solutionDiv2").appendChild(newp2)
   document.getElementById("solutionDiv2").appendChild(newp3)
  
   //Μετατροπή σε αρνητικό δυαδικό (συμπλήρωμα)  
   for (i=0;i<bit-length;i++){
    solution="0" +solution;
    }
  var newptitle2=document.createElement("h3")
  var newp21=document.createElement("p")
  var newp22=document.createElement("p")
  var newPTitle2Text=document.createTextNode("Δεύτερο Βήμα-Μετατροπή του θετικού προσημασμένου δυαδικού στον αρνητικό προσημασμένο δυαδικό")
  var newP21Text=document.createTextNode("Προκειμένου να μετατρέψουμε τον θετικό αριθμό σε αρνητικό αντιστρέφουμε όλα τα στοιχεία του και στον αριθμό που θα προκύψει προσθέτουμε 1. Αυτό ονομάζεται συμπλήρωμα του 2.")
  var newP22Text=document.createTextNode("Αντί να κάνουμε αυστηρά τις πράξεις (αντιστροφή και προσθήκη ένα), μπορούμε να ακολουθήσουμε μια απλή μέθοδο που δίνει το ίδιο αποτέλεσμα: Διαβάζοντας τον αριθμό από δεξία προς αριστερά, κρατάμε τα ψηφία ίδια, μέχρι να συναντήσουμε το πρώτο 1. Το πρώτο 1 το κρατάμε ως έχει και ακολούθως αντιστρέφουμε όλα τα επόμενα.")
  newptitle2.appendChild(newPTitle2Text)
  newp21.appendChild(newP21Text)
  newp22.appendChild(newP22Text)
  document.getElementById("solutionDiv2a").appendChild(newptitle2)
  document.getElementById("solutionDiv2a").appendChild(newp21)
  document.getElementById("solutionDiv2a").appendChild(newp22)
  solution=solution.split("")
  
  //αποτύπωση λύσης
  var responsiveDiv=document.createElement("div")
  responsiveDiv.setAttribute("class","responsiveDiv")
  var Table1=document.createElement("table")
  var Tr1=document.createElement("tr")
  var Tr2=document.createElement("tr")
  
  var TrText1=document.createTextNode("Θετικός")
  var TrText2=document.createTextNode("Αρνητικός")

  Tr1.appendChild(TrText1);
  Tr2.appendChild(TrText2);

  Table1.appendChild(Tr1)
  Table1.appendChild(Tr2) 
  responsiveDiv.appendChild(Table1)
  document.getElementById("solutionDiv2a").appendChild(responsiveDiv)
  
  let solutionFin=[]
  count=0
 
  for (i=bit-1;i>=0;i--){

var Td1=document.createElement("td")
var Td1Text=document.createTextNode(solution[i])
Td1.appendChild(Td1Text)
Tr1.insertBefore(Td1, Tr1.firstChild)
Td1.setAttribute("class","myList")
var Td2=document.createElement("td")
Td2.setAttribute("class","myList")
if (solution[i]==1){
    count++
}
if (solution[i]==0 & count>0){
var Td2Text=document.createTextNode("1")
}else if(solution[i]==0){
var Td2Text=document.createTextNode("0")   
}else if (solution[i]==1 & count==1){
var Td2Text=document.createTextNode("1")      
}else{
var Td2Text=document.createTextNode("0")   
}
Td2.appendChild(Td2Text)
Tr2.insertBefore(Td2, Tr2.firstChild) 
solutionFin.unshift(Td2Text.data)

  }


solutionFin=solutionFin.join("")
let solutionFinFin=solutionFin.substr(0,4)+" "+solutionFin.substr(4,4)+" "+solutionFin.substr(8,4)+" "+solutionFin.substr(12,4)+" "+
solutionFin.substr(16,4)+" "+solutionFin.substr(20,4)+" "+solutionFin.substr(24,4)+" "+solutionFin.substr(28,4)   
document.getElementById("Bin2").value= solutionFinFin   

}