

function fibonacci(i){
fibonacci[0]=0;
	fibonacci[1]=1;
	fibonacci[2]=1;
	 if(i in fibonacci){
	 	return fibonacci[i];
}
			return fibonacci(i-1)+fibonacci(i-2);
}


