
var input = document.getElementById("myFile");

var output = document.getElementById("output");
var angelica=5;
// var zdania =length(output);


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const loop = async () => {

 var date = new Date();
 var n = date.toDateString();
 var czas = date.toLocaleTimeString();
 document.getElementById('andrzej').innerHTML=n +" "+czas;
 document.getElementById('andrzej').style.color='yellow';
 

for(let i=0;i<angelica;i++){ 
input.addEventListener("keyup", function tom() {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    
    var reader = new FileReader();
    

    reader.addEventListener("load", function ewa(e) {
      output.textContent = e.target.result.split('.')[i];
      var Mangelica = e.target.result.split('.');
      angelica = Mangelica.length;
    });
    
    reader.readAsText(myFile);
    
  }

})
if(i==(angelica-1)){
  document.getElementById("marcin").innerHTML="KONIEC, DZIĘKUJEMY !";
  document.getElementById("marcin").style.backgroundColor='white';
}
else{
  document.getElementById("marcin").innerHTML="Czekamy na nowe zdanie = : " + (i+1);
}

await wait(15000);
document.getElementById("marcin").innerHTML="Jest już nowe zdanie";
await wait(1000);



}

}

loop()

// document.getElementById("angelica").innerHTML=toString(angelica);


