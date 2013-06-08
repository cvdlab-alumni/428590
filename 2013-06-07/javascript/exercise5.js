
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


//es2

var lake1=COLOR(Color_lake)(SIMPLEX_GRID([[-1,19],[-1,19],[1,2.9]]));
var lake2=COLOR(Color_lake)(SIMPLEX_GRID([[-1,-9,3],[-1,17],[1,2.9]]));
var lake3=COLOR(Color_lake)(SIMPLEX_GRID([[-1,-2,8,-2,3],[-1,-13,4],[1,2.9]]));
var landscape=STRUCT([mountain,lake1,lake2,lake3])



//es3

function TreeRand(startx,end_x,starty,end_y){
	for (var w=startx; w<end_x; w++){



			for (var m=starty; m<end_y; m++){

				if ((this.High_Quote[[w,m]]>3) && (this.High_Quote[[w,m]] != undefined)) {

					var r = Math.random();
					var t = creaAlbero(0.15,1.9,0.4);
					 console.log(r);

					t = T([0,1,2])([w,m,this.High_Quote[[w,m]]])(t);
					//var nem=nem+2;
					
					landscape=STRUCT([landscape,t])
				}
			}
		}
}


function creaAlbero(r,h, l){
	var BZ= BEZIER(S0);
	
	var altezzaTronco = (h/2.2)+(Math.random()/5*2.1);
	var wood = DISK([r])();
	var wood_exxtr = EXTRUDE([altezzaTronco])(wood);
	var troncoAlberoColor = COLOR(Color_tree)(wood_exxtr);
	var hights = h - altezzaTronco;
	var raggioCoronaFoglieMod = l + (Math.random()/5*2.1);
	 console.log(l+h);
	var bf = DISK([raggioCoronaFoglieMod])();
	var bf_T = T([2])([altezzaTronco])(bf);
	var points = [[-raggioCoronaFoglieMod,raggioCoronaFoglieMod,-hights],[0,0,0]];
	var edge_Tree = BZ(points);


	var cFoglie = ROTATIONAL_SURFACE(edge_Tree);
	var superficieFoglie = MAP(cFoglie)(domain_tree_leafes);

	var superficieFoglieTrasl = T([2])([hights-0.02+ altezzaTronco])(superficieFoglie);
	var leaf_colored = COLOR(Color_leaf)(STRUCT([bf_T,superficieFoglieTrasl]));
	

	var tree_out = STRUCT([troncoAlberoColor,leaf_colored]);
	return tree_out;
} 




// es 4

var hill=COLOR(Color_grass)(SIMPLEX_GRID([[-20,60],[-1,19],[1,2.3]]));
var landscape=STRUCT([landscape,hill])

function Human_settlement(h, w, l){
  return CUBOID([l,h,w]);
}

function Matrix_Settlement(m,n){
  var offsetY = 0;
  var H_settlement = null;
  var offsetX = 0;
  
  for(i=0;  i<m;  i++){
    		var house_Matrixrows=null;
			    for(j=0;j<n;j++){
			      var h = Math.random()+4.7*Math.random()/100*80;
			      console.log(h);
			      var l = Math.random()+1*Math.random()/100*30;
			       console.log(l);
			      var w = Math.random()+1*Math.random()/100*50;
			      
			     
			      console.log(w+l*0.1);
			      var House =COLOR([Math.random()+2/255,Math.random()+3/255,Math.random()+7/255]) (Human_settlement(h, w, l));
			     



			      if(house_Matrixrows===null){
			        house_Matrixrows=House;
			      }
			      else {
				        offsetX = offsetX + 2.3;
				        console.log(offsetX);
				        House = T([0])([offsetX])(House);
				        house_Matrixrows = STRUCT([House,house_Matrixrows]);  
			      } 
			    }

			    //reset
    offsetX = 0;
    if(H_settlement===null){
        H_settlement=house_Matrixrows;
    }

    else{
      offsetY = offsetY + Math.random()+2.11;
      house_Matrixrows = T([1])([offsetY+0.2])(house_Matrixrows);
      H_settlement = STRUCT([H_settlement, house_Matrixrows]); 
    } 
  }
  return H_settlement;
}

var settlement1 = T([0,1,2])([23,2,3])(Matrix_Settlement(6,7));
landscape = STRUCT([settlement1,landscape]);


var settlement2 = T([0,1,2])([47,2,3])(Matrix_Settlement(5,8));
landscape = STRUCT([settlement2,landscape]);



//es5



var street_matrix=COLOR(Color_street)(SIMPLEX_GRID([[-22,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15],[-1,19],[-2.9,0.55]]));

var street_matrix2=COLOR(Color_street)(SIMPLEX_GRID([[-22,21],[-1,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15,-3,0.15],[-2.9,0.55]]));
var street_matrixTOT=STRUCT([street_matrix,street_matrix2])
var street_matrixTOT2=T([0,1,2])([24,0,0])(street_matrixTOT)
landscape = STRUCT([street_matrixTOT,landscape,street_matrixTOT2]);



this.TreeRand(10,19,10,18);
this.TreeRand(3,11,6,11);
this.TreeRand(6,12,7,10);

DRAW(landscape);

