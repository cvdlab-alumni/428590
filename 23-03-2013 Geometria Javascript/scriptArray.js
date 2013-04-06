var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data, key, values){
	filterResult = [];
	for (i=0;i<values.length;i++){

		s = data.filter(function(item, index, array){
 			return item[key] === values[i];});

		filterResult = filterResult.concat(s);
	}
	return filterResult;
}

console.log(select(data,key,values));