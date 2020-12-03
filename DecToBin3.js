function Clean3(){
    document.getElementById("solutionDiv3").innerHTML=""
    document.getElementById("solutionDiv3a").innerHTML=""
    document.getElementById("solutionDiv3b").innerHTML=""
    document.getElementById("solutionDiv3c").innerHTML=""
    document.getElementById("solutionDiv3d").innerHTML=""
    document.getElementById("Dec3").value=""
    document.getElementById("Float3").value=""
    document.getElementById("Bin3sign").value=""
    document.getElementById("Bin3exp").value=""  
    document.getElementById("Bin3mant").value=""  
 }

 function DecToBin3(){
//Καθαρισμός οθόνης
 document.getElementById("solutionDiv3").innerHTML=""
 document.getElementById("solutionDiv3a").innerHTML=""
 document.getElementById("solutionDiv3b").innerHTML=""
 document.getElementById("solutionDiv3c").innerHTML=""
 document.getElementById("solutionDiv3d").innerHTML=""

 //Βασικά Δεδομένα
    let dec= document.getElementById("Dec3").value; 
    let float=document.getElementById("Float3").value; 
    let bit=parseInt(document.getElementById("bits3").value);
    let proshmo;
    if (dec>=0){
    proshmo=0
    }else{
        proshmo=1
    }
    dec=Math.abs(dec)

//Ελεγχοι
 if (bit==32 & dec==0 & float==0){
    document.getElementById("Bin3sign").value="0"
    document.getElementById("Bin3exp").value="8 μηδενικά"  
    document.getElementById("Bin3mant").value="23 μηδενικά"
    return
 }else if (bit==64 & dec==0 & float==0){
    document.getElementById("Bin3sign").value="0"  
    document.getElementById("Bin3exp").value="11 μηδενικά" 
    document.getElementById("Bin3mant").value="52 μηδενικά"
    return 
    //προσωρινό μέχρι να κανονίσω τα -1 έως 1
//}else if (dec==0 & float!=0){
  //  alert("Μη αποδεκτός αριθμός")
}else if (float<0){
    alert("Το δεκαδικό μέρος πρέπει να είναι θετικός αριθμός")
}

 let size=dec+float/Math.pow(10,float.length)
 if (bit==32 & size>Math.pow(2,127)){
    document.getElementById("Dec3").value=null
    document.getElementById("Float3").value=null
    alert("Για 32-bit αριθμός πρέπει να είναι μικρότερος ή ίσος με "+Math.pow(2,127))
    return;
 }else if (bit==32 & size<Math.pow(2,-127)){
    document.getElementById("Dec3").value=null
    document.getElementById("Float3").value=null
    alert("Για 32-bit αριθμός πρέπει να είναι μεγαλύτερος ή ίσος με "+Math.pow(2,-127))
    return;
 }else if (bit==64 & size>Math.pow(2,1023)){
    document.getElementById("Dec3").value=null
    document.getElementById("Float3").value=null
    alert("Για 64-bit αριθμός πρέπει να είναι μικρότερος ή ίσος με "+Math.pow(2,1023))
    return;
 }else if(bit==32 & size>Math.pow(2,1023)){
    document.getElementById("Dec3").value=null
    document.getElementById("Float3").value=null
    alert("Για 64-bit αριθμός πρέπει να είναι μεγαλύτερος ή ίσος με "+Math.pow(2,-1023))
    return;
 }else if (parseInt(dec).toFixed(0)!=dec || parseInt(float).toFixed(0)!=float){
    alert("Τα πλαίσια πρέπει να συμπληρωθούν με ακέραιους αριθμούς")   
    return;
}

 //Υπολογισμός Βασικά μεγέθη
let expLength;
let mantLength;
if(bit==32){
    expLength=8
    mantLength=23
}else{
    expLength=11
    mantLength=52
}
//Υπολογισμός ακέραιου μέρους

  
    //Εισαγωγή και τίτλος
   var Intro=document.createElement("p")
   var Intro1=document.createElement("p")
   var Intro2=document.createElement("p")
   var Intro3=document.createElement("p")
   var Intro4=document.createElement("p")
   var Intro5=document.createElement("p")
   var IntroText=document.createTextNode("Ο αριθμός θα αποτελείται από τρία μέρη. Το πρώτο, μήκους 1 bit αντιπροσωπεύει το πρόσημο, 0 για θετικό και 1 για αρνητικό αριθμό. Το δεύτερο μέρος, μήκους 8 bit για 32-bit και 11 bit για 64-bit είναι ο εκθέτης. Το τρίτο, μήκους 23 bit για 32-bit και 52 bit για 64-bit είναι η mantissa. Η mantissa αποτελείται από ολόκληρο το ακέραιο μέρος πλην του πρώτου ψηφίου του και ολόκληρο ή τμήμα του δεκαδικού μέρους του αριθμού. Η λογική του αριθμού αυτού είναι ότι ορίζουμε το πρόσημο (πρώτο ψηφίο, ενώνουμε το ακέραιο και το δεκαδικό μέρος (mantissa), μεταθέτουμε την υποδιαστολή ανάμεσα στο πρώτο και το δεύτερο ψηφίο και φτιάχνουμε έναν αριθμό (exponent) που μας λέει πόσες θέσεις δεξιά ή αριστερά μεταφέραμε την υποδιαστολή.")
   var Intro1Text=document.createTextNode("Πρώτο Βήμα: Τοποθετούμε το ψηφίο που απεικονίζει το πρόσημο (0 για θετικό και 1 για αρνητικό)")
   var Intro2Text=document.createTextNode(" Δεύτερο Βήμα: Μετατρέπουμε το ακέραιο μέρος σε δυαδικό αριθμό με τον κλασσικό τρόπο, σα να ήταν θετικός.  Όλα τα ψηφία του ακέραιου πλην του πρώτου, θα θεωρηθούν δεκαδικά όταν θα φτιάξουμε την mantisssa, οπότε το πρώτο ψηφίο αφαιρείται.")
   var Intro3Text=document.createTextNode(" Τρίτο Βήμα: Μετατρέπουμε το δεκαδικό μέρος σε δυαδικό. Για να το κάνουμε αυτό, πολλαπλασιάζουμε το δεκαδικό μέρος με το 2 και στη συνέχεια αφαιρούμε και κρατάμε στην άρκη το ακέραιο που θα προκύψει (1 ή 0) και πολλαπλασιάζουμε ξανά το δεκαδικό με το 2. Τη διαδικασία αυτή τη συνεχίζουμε μέχρι το δεκαδικό μέρος να γίνει 0 Ο αριθμός προκύπτει εάν διαβάσουμε από επάνω προς τα κάτω τα ψηφία από το ακέραιο μέρος που αφαιρέσαμε και κρατήσαμε στην άκρη. Σε πολλές περιπτώσεις όμως δεν αρκούν τα διαθέσιμα bit της mantissa για να χωρέσουν και το ακέραιο και το δεκαδικό μέρος κι έτσι το δεκαδικό μέρος στρογγυλοποιείται. Συνεπώς, πολλές φορές σταματάμε τη διαδικασία πριν το δεκαδικό μέρος γίνει μηδέν, όταν φτάσουμε στον επιθυμητό αριθμό ψηφίων.")
   var Intro4Text=document.createTextNode("Τέταρτο Βήμα: Υπολογίζουμε τον εκθέτη. Ο εκθέτης υπολογίζεται ως εξής. Εάν το ακέραιο μέρος είναι διαφορετικό από το μηδέν υπολογίζουμε το κανονικοποιημένο μήκος του ακέραιου μέρους (ισούται με το μήκος του ακέραιου μέρους -1). Εάν το ακέραιο μέρος είναι μήδεν, υπολογίζουμε το κανονικοποιημένο μήκος του δεκαδικού μέρους και μετράμε τα 0 που υπάρχουν έως το πρώτο 1. Στη συνέχεια, αφαιρούμε ένα και τέλος προσθέτουμε τον αριθμό 127 για 32-bit και 1023 για 64-bit. Μετατρέπουμε τον αριθμό που θα βρούμε σε δυαδικό.")
   var Intro5Text=document.createTextNode("Πέμπτο Βήμα: Ξεκινάμε να δημιουργούμε την mantissa, ενώνοντας το ακέραιο με το δεκαδικό μέρος. Κάνουμε στρογγυλοποίηση του αριθμού εφόσον απαιτείται. Η στρογγυλοποίηση γίνεται με αλγόριθμους που περιγράφονται στο ΙΕΕΕ 754. Εμείς επιλέξαμε την στρογγυλοποίηση προς τα κάτω, με κόψιμο όλων των ψηφίων που περισσεύουν. Αυτή η μέθοδος είναι πολύ απλοϊκή και όχι πολύ ακριβής. Υπάρχουν και πιο περίπλοκοι και ακριβείς μέθοδοι όπου η στρογγυλοποίηση εξαρτάται από τα στοιχεία που περισσεύουν. Εάν υπάρχει ακέραιο μέρος, η υποδιαστολή θα μεταφερθεί μεταξύ του πρώτου και του δεύτερου ψηφίου και το πρώτο ψηφίο θα απορριφθεί. Εάν υπάρχει μόνο δεκαδικό μέρος θα απορριφθεί το πρώτο ψηφίο καθώς και όλα τα μηδενικά μέχρι το πρώτο 1. Τέλος, εάν ο αριθμός που θα προκύψει έχει ψηφία λιγότερα από 23 στο 32-bit και 52 στο 64-bit, συμπληρώνουμε με 0")

   Intro.appendChild(IntroText)
   Intro1.appendChild(Intro1Text)
   Intro2.appendChild(Intro2Text)
   Intro3.appendChild(Intro3Text)
   Intro4.appendChild(Intro4Text)
   Intro5.appendChild(Intro5Text)
   document.getElementById("solutionDiv3").appendChild(Intro)
   document.getElementById("solutionDiv3").appendChild(Intro1)
   document.getElementById("solutionDiv3").appendChild(Intro2)
   document.getElementById("solutionDiv3").appendChild(Intro3)
   document.getElementById("solutionDiv3").appendChild(Intro4)
   document.getElementById("solutionDiv3").appendChild(Intro5)
    var Div3Title=document.createElement("h3")
    var Div3TitleText=document.createTextNode("Υπολογισμός ακέραιου μέρους")
    Div3Title.appendChild(Div3TitleText)
    document.getElementById("solutionDiv3").appendChild(Div3Title)
    //κεφαλίδες πίνακα
    
    function MyDecToBin(number, place){  
    var arr=[];
    var tbl=document.createElement("table")
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
    tbl.appendChild(Tr)
    //συμπλήρωση πίνακα
    var count=number/2;
    while (count>0){ 
    var newTr=document.createElement('tr')
    var newTd1=document.createElement('td')
    var newTd2=document.createElement('td')
    var newTd3=document.createElement('td')
    var newText1=document.createTextNode(number+"/2") 
    var newText2=document.createTextNode(Math.floor(number/2)) 
    var newText3=document.createTextNode (number%2)
    newTd1.appendChild(newText1)
    newTd2.appendChild(newText2)
    newTd3.appendChild(newText3)
    newTr.appendChild(newTd1)
    newTr.appendChild(newTd2)
    newTr.appendChild(newTd3)
    tbl.appendChild(newTr)
    document.getElementById(place).appendChild(tbl)
    arr.unshift(number%2)
    number=Math.floor(number/2)
    count=number/2
   }
   solutionDec=arr.join("");
   return solutionDec;
}
let solutionDec
MyDecToBin(dec, "solutionDiv3");
let solutionDecFin=solutionDec;
   //καταγραφή αποτελέσματος
   let DecRes=document.createElement("p")
   let DecResText=document.createTextNode("Δυαδικός Ακέραιο Μέρος= "+solutionDec+" Μήκος= "+solutionDec.length+". Εάν το ακέραιο μέρος είναι διαφορετικό από το 0, προκειμένου να κανονικοποιηθεί ο αριθμός αυτός και να δημιουργηθεί η mantissa θα πρέπει να αφαιρεθεί το πρώτο ψηφίο.")
   DecRes.appendChild(DecResText)
   document.getElementById("solutionDiv3").appendChild(DecRes)

//Υπολογισμός δεκαδικού μέρους
    arr=[];
    float=float/Math.pow(10,float.length);
   

    //τίτλος
    var Div3aTitle=document.createElement("h3")
    var Div3aTitleText=document.createTextNode("Υπολογισμός δεκαδικού μέρους")
    Div3aTitle.appendChild(Div3aTitleText)
    document.getElementById("solutionDiv3a").appendChild(Div3aTitle)
    //κεφαλίδες πίνακα
    var tbla=document.createElement("table")
    var Tra=document.createElement('tr')
    var Th1a=document.createElement("th")
    var Th2a=document.createElement("th")
    var Th3a=document.createElement("th")
    var Text1a=document.createTextNode("Πολλαπλασιασμός")
    var Text2a=document.createTextNode("Ακέραιο Μέρος")
    var Text3a=document.createTextNode("Δεκαδικό Μέρος")
    Th1a.appendChild(Text1a)
    Th2a.appendChild(Text2a)
    Th3a.appendChild(Text3a)
    Tra.appendChild(Th1a)
    Tra.appendChild(Th2a)
    Tra.appendChild(Th3a)
    tbla.appendChild(Tra)
    //συμπλήρωση πίνακα
    count=1;
    count2=0;
    while (count>0 & count2<mantLength-solutionDec.length+1){ 
    var newTra=document.createElement('tr')
    var newTd1a=document.createElement('td')
    var newTd2a=document.createElement('td')
    var newTd3a=document.createElement('td')
    var newText1a=document.createTextNode(float+"*2") 
    var newText2a=document.createTextNode(Math.floor(float*2))
    var newText3a=document.createTextNode (float*2-Math.floor(float*2))
    newTd1a.appendChild(newText1a)
    newTd2a.appendChild(newText2a)
    newTd3a.appendChild(newText3a)
    newTra.appendChild(newTd1a)
    newTra.appendChild(newTd2a)
    newTra.appendChild(newTd3a)
    tbla.appendChild(newTra)
    document.getElementById("solutionDiv3a").appendChild(tbla)
    arr.push(Math.floor(float*2))
    count=float*2-Math.floor(float*2) 
    count2++
    float=float*2-Math.floor(float*2)
   }
   let solutionFloat=arr.join("");
   //καταγραφή αποτελέσματος
   let FloatRes=document.createElement("p")
   let FloatResText=document.createTextNode("Δυαδικός Δεκαδικό Μέρος= "+solutionFloat+" Μήκος= "+solutionFloat.length+". Το δεκαδικό μέρος θα προστεθεί στο ακέραιο μέρος και θα δημιουργηθεί η mantissa. Συνεπώς, υπολογίσαμε μόνο όσα ψηφία υπολοίπονται, λαμβάνοντας υπόψη το μήκος του κανονικοποιημένου ακέραιου μέρους")
   FloatRes.appendChild(FloatResText)
   document.getElementById("solutionDiv3a").appendChild(FloatRes)


//Υπολογισμός Exponend
var Div3bTitle=document.createElement("h3")
    var Div3bTitleText=document.createTextNode("Υπολογισμός εκθέτη")
    Div3bTitle.appendChild(Div3bTitleText)
    document.getElementById("solutionDiv3b").appendChild(Div3bTitle)
    let bias;
    if(bit==32){
        bias=127
    }else{
        bias=1023
    }

    //για αριθμούς έως -1 και πάνω από 1
    let exp
    let solutionFloatFin;
    if (dec!=0){
        exp=solutionDecFin.length-1+bias;
        solutionFloatFin=solutionFloat;
    }else{
       let indexFloatOne=solutionFloat.indexOf("1")
       solutionFloatFin=solutionFloat.substring(indexFloatOne)
       console.log(solutionFloatFin) 
       exp=solutionFloatFin.length-1-solutionFloat.length+bias
    }
    
    var ExpP=document.createElement("p")
    if(dec!=0){
    var ExpPText=document.createTextNode("Το ακέραιο μέρος είναι διαφορετικό από το μηδέν. Άρα ο εκθέτης είναι ίσος με το πληθος των ψηφίων του κανονικοποιημένου ακέραιου μέρους (δηλαδή στην περίπτωσή μας "+solutionDecFin.length+" μείον 1) συν το bias μήκους 127 για 32 bit ακρίβειας και 1023 για 64 bit ακρίβειας. Στην περίπτωσή μας έχετε επιλέξει "+bit+" bits ακρίβειας και συνεπώς το bias είναι ίσο με "+ bias+". Επομένως, ο εκθέτης είναι ίσος με "+solutionDecFin.length+"-"+"1+"+bias+"="+exp+" δηλαδή θετικός αριθμός και πρέπει να μετατραπεί σε δυαδικό αριθμό. Συμπληρώνουμε τον αριθμό που θα βρούμε με 0 στην αρχή, μέχρι να έχει μήκος 8 ψηφίων.")
    }else{
    var ExpPText=document.createTextNode("Το δεκαδικό μέρος είναι ίσο με μηδέν. Άρα, θα χρησιμοποιήσουμε μόνο το δεκαδικό μέρος " +solutionFloat+". Κανονικοποιούμε, δηλαδή αφαιρούμε το πρώτο ψηφίο και μετράμε πόσα μηδενικά υπάρχουν μέχρι το επόμενο 1. Στην περίπτωσή μας είναι" + solutionFloat.length-solutionFloat.length+". Στη συνέχεια, αφαιρούμε τον αριθμό αυτόν από το bias στην περίπτωσή μας "+  bias+ "και αφαιρούμε 1 για το πρώτο ψηφίο που αφαιρέσαμε")  
    }
    ExpP.appendChild(ExpPText)
    document.getElementById("solutionDiv3b").appendChild(ExpP)

    MyDecToBin(exp, "solutionDiv3b")
    let solutionExp=solutionDec;
    
    while(solutionExp.length<expLength){
        solutionExp="0"+solutionExp
    }
 
   //καταγραφή αποτελέσματος
   let ExpRes=document.createElement("p")
   let ExpResText=document.createTextNode("Δυαδικός Εκθέτης= "+solutionExp+" Μήκος= "+solutionExp.length)
   ExpRes.appendChild(ExpResText)
   document.getElementById("solutionDiv3b").appendChild(ExpRes)

   



//Υπολογισμός mantissa
   //τίτλος
  var Div3cTitle=document.createElement("h3")
  var Div3cTitleText=document.createTextNode("Υπολογισμός mantissa")
  Div3cTitle.appendChild(Div3cTitleText)
  document.getElementById("solutionDiv3c").appendChild(Div3cTitle)
   
 // if(dec==0){
   //   solutionFloatFin=solutionFloatFin.substring(1)
    //} 

   let solutionMant=solutionDecFin.concat(solutionFloatFin)
   solutionMant=solutionMant.substring(1)
 
   while (solutionMant.length<mantLength){
       solutionMant=solutionMant+"0"
   }

   let MantRes=document.createElement("p")
   let MantResText=document.createTextNode("Ενώνουμε το Δυαδικό Ακέραιο Μέρος με το Δυαδικό Δεκαδικό Μέρος και παίρνουμε την Mantissa= "+solutionMant+"  Μήκος= "+solutionMant.length)
   MantRes.appendChild(MantResText)
   document.getElementById("solutionDiv3c").appendChild(MantRes)
 //Τοποθέτηση στα κουτάκια
 document.getElementById("Bin3sign").value=proshmo
 document.getElementById("Bin3exp").value=solutionExp
 document.getElementById("Bin3mant").value=solutionMant
 }

