

function push(n){


var array = [];
for (var i = 0; i <= n; i++) {
	 array[i]=i;
};

return array;

}

function filtraDispari(a){

return a.filter(function (item,index) {return item %2!==0;});

}

function raddoppia(a){

	return a.map(function (item) {return item*2; }) ;
}


function filtraidiv4(a){
	return a.filter(function (item) { return item %4 ==0;});

}
function riduci(a){
return a.reduce(function (x,y) { return x+y ;});

}

var l= push(10);
console.log(l);
console.log(filtraDispari(l));
console.log(raddoppia(l));
console.log(filtraidiv4(l));
console.log(riduci(l));