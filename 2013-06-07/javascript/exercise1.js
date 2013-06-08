
// Vignoli B.g 428590

var domain1 = INTERVALS(1)(60);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var domain3 = DOMAIN([[1,20],[1,20],[1,5]])([14,14,14]);
var domain_tree_base = DOMAIN([[0,2*PI]])([36]);
var domain_tree_leafes = DOMAIN([[0,1],[0,2*PI]])([22,22]);

var Color_lake = [28/255,116/255,197/255];
var Color_mountain = [149/255,93/255,67/255];
var Color_leaf = [77/255,184/255,73/255];
var Color_tree = [131/255,35/255,8/255];
var Color_grass = [88/255,169/255,41/255];
var Color_street = [165/255,168/255,173/255];
// annulus sector (settore di corona circolare)




var High_Quote = {};



function map_mountain(v){
	var x = v[0]; 
    var y = v[1];
    var z = (((x/y)*Math.random())/100*40)*COS(Math.random())/x*y*Math.random()*20
   if (z==0)
    	z = Math.random();
    this.High_Quote[''+Math.floor(x)+','+Math.floor(y)] = z;
    return [x,y,z];

}

var mountain=COLOR(Color_mountain)(MAP(map_mountain)(domain3));
