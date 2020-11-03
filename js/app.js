var category = [ "History", "Comedy", "Horror", "Romance", "Supernatural"  ];





Anime.all =[];

function Anime (name){
    this.kind=kind;
    this.name = name;
    this.season=0;
    Anime.all.push(this);


   


}
localStorage.setItem(this.name,this.season);


Anime.prototype.RandomSeason = function (){
    for ( var i=0;i<7;i++ ){
        this.season[i] = generateRandomNumber (1,7);

    }


}

var SubmitBtn = document.getElementById('Submit');
SubmitBtn.addEventListener('click', handleClick );
function handleclick (event){




}
var table = document.getElementById('mytable');

function addheader(){
var DataRow = document.createElement('tr')
table.appendChild(DataRow);
var title = document.createElement('th');
title.textContent="Anime Title";




}

Anime.prototype.render = function (){
   var table = document.getElementById('mytable');

 DataRow =document.createElement('tr');
 table.appendChild(DataRow);
    list.appendChild(ul1);
    for(var i =0 ; i<Anime.all.length; i++ ){
   var li1 = document.createElement('li');
   li1.textContent= this.name[i],this.kind[i]  ,this.season[i] ;
   DataRow.appendChild(li1);

   


    }




}
var RanNum = [];
var animeName = [];
var kinds = [];


var formData = function () {
    




}

// helper function
function generateRandomNumber(){


var random;
random= Math.random();
random=  (random * (max - min) ) + min;
random= Math.floor(random);
return random ;
}