function identity(n) {

var stringa='';
 for (var i = 0; i < n; i++) {
 	for (var j= 0; j < n;j++) {
 	
 	switch(j){
 		case i: {stringa+='1'+' ';} break;
 		default: {stringa+="0"+' ';}
    }

}

stringa+='\n';
}

console.log(stringa);


}




