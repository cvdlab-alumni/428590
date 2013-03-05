var s =0;
var t = ''
for (var i = 0; i < 101; i++) {
	
	if(s<10){
		t+=i+" ";
		s++
	}
	else {

		console.log(t);
		s=0;
		t="";
		t+=i+" ";
		s++;
	}

};

console.log("bellaaaaaa");
