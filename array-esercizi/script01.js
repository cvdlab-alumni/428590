//Esercizio3a
function capitalize(word){
	var c = word.charAt(0).toUpperCase();
return c + word.slice(1);
}

//Esercizio3b
function capitalize_testo(testo){
	//split ritorna una lista di oggetti ottenuti scandendo testo con il separatore ' '
	//map mappa la funzione su tutti gli elementi della lista e ne ritorna la lista risultante
	//join restituisce un elemento ottenuto dalla concatenazione degli elemneti in lista con ' '
	var words = testo.split(' ').map(capitalize);

console.log(words.join(' '));
return null;
}