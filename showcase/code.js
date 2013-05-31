//Vignoli B.G. 428590 GameBoy Nintendo Classic with Suber Mario Land

var domain1 = INTERVALS(1)(60);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);
function knots (points) {
  var m = points.length;
  var k = 2; //grado della curva, per ora pari a 2 (sempre)
  var n = (m + k + 1);
  var l = n - 3; //numeo da cui si parte per terminare la sequenza
  var j = 1; // primo elemento della sequenza
  var knots = [];
  for (var i = 0; i < 3; i++) {
    knots[i] = 0;
  };
  for (var i = 3; i < l; i++, j++) {
    knots[i] = j;
  };
  for (var i = l; i < n; i++) {
    knots[i] = j;
};
 return knots;
};

//Colors
var Color_Grey_Case = [190/255,190/255,200/255];
var col_screen = [93/255,109/255,0/255];
var col_screen_edge = [97/255,106/255,123/255];
var col_joypad = [40/255,49/255,48/255];
var col_buttonAB = [118/255,39/255,87/255];
var col_buttonSS = [113/255,120/255,130/255];
var color_audio_strips = [140/255,142/255,141/255]
var color_edges = [174/255,174/255,176/255]
var color_blocks=[214/255,53/255,9/255];
var color_Tube=[4/255,141/255,2/255];
var color_SBL=[159/255,154/255,160/255];


//case grigio chiaro
function Greycase(){
    var p1 = [[7,0,0],[9,0,0],[9,2,0],[9,14.5,0],[9,15,0],[8.9,15,0]];
    var p2 = [[0.1,0,0],[0,0,0],[0,2,0],[0,14.5,0],[0,15,0],[0.1,15,0]];
    var p3 = [[7,0,-2.18],[9,0,-2.18],[9,2,-2.18],[9,14.5,-2.18],[9,15,-2.18],[8.9,15,-2.18]];
    var p4 = [[0.1,0,-2.18],[0,0,-2.18],[0,2,-2.18],[0,14.5,-2.18],[0,15,-2.18],[0.1,15,-2.18]];

    var c_1 = BEZIER(S0)(p1);
    var c_2 = BEZIER(S0)(p2);
    var c_3 = BEZIER(S0)(p3);
    var c_4 = BEZIER(S0)(p4);

    var fsup_front = BEZIER(S1)([c_1,c_2]);
    var sup_front = MAP(fsup_front)(domain2);

    var fsup_back = BEZIER(S1)([c_3,c_4]);
    var sup_back = MAP(fsup_back)(domain2);

    var fGreyCase=BEZIER(S2)([fsup_front,fsup_back]); 
    var Greycase_solid=MAP(fGreyCase)(domain3)
    return COLOR(Color_Grey_Case)(Greycase_solid);
   
}

//bordo grigio scuro
function gameBoyscreen(){
    var p3 = [[0.5,10.5,0.05],[0.5,9,0.05],[0.5,8,0.05],[8.5,8,0.05],[8.5,9,0.05],[8.5,10.5,0.05]];
    var p3_2 = [[0.5,10.5,0.05],[0.5,12,0.05],[0.5,13,0.05],[8.5,13,0.05],[8.5,12,0.05],[8.5,10.5,0.05]];
    var knots3 = knots(p3);
    var knots3_2 = knots(p3_2);
    var curva_spline3 = NUBS(S0)(2)(knots3)(p3);
    var curva_spline3_2 = NUBS(S0)(2)(knots3_2)(p3_2);
    /*
    var bordo_grigio_inf=MAP(curva_spline3)(domain1);
    var bordo_grigio_sup=MAP(curva_spline3_2)(domain1);
    var bordo_grigio_TOT=STRUCT([bordo_grigio_sup,bordo_grigio_inf]);
    var col_bordo_grigio_TOT=COLOR(col_screen_edge)(bordo_grigio_TOT);
    */
    var fsup_bordo = BEZIER(S1)([curva_spline3,curva_spline3_2]);
    var sup_bordo = MAP(fsup_bordo)(domain2);
    var col_sup_bordo=COLOR(col_screen_edge)(sup_bordo);

    //schermo
    var p4 = [[1,8.5,0.1],[1,12.5,0.1]];
    var p5 =  [[8,8.5,0.1],[8,12.5,0.1]];
    var c_4 = BEZIER(S0)(p4);
    var c_5 = BEZIER(S0)(p5);


    var fschermo = BEZIER(S1)([c_4,c_5]);
    var schermo = MAP(fschermo)(domain2);
    var col_schermo=COLOR(col_screen)(schermo);



    return  STRUCT([col_schermo,col_sup_bordo]);
    
}

//ButtonA
function buttonA(){
    var domain = DOMAIN([[0,1],[0,2*PI]])([20,20]);
    var profile = BEZIER(S0)([[0.6,0,0],[0.48,0,0.1],[0.46,0,0.3],[0,0,0.3]]);
    var mapping = ROTATIONAL_SURFACE(profile);
    var surface = MAP(mapping)(domain);
    var col_BottoneA=COLOR(col_buttonAB)(surface);
    return T([0,1])([7.5,5.5])(col_BottoneA);
}
//Button B

function buttonB(){
    return  T([0,1])([-1.5,-0.8])(buttonA());
}
//Button Select
function buttonSelect(){

    var ps1=[[3,1,0],[2.9,0.9,0],[3.1,0.9,0]];
    var ps2=[[4,2,0],[4.1,2,0],[4.1,1.9,0]];
    var c_s1 = BEZIER(S0)(ps1);
    var c_s2 = BEZIER(S0)(ps2);
    return S([0,1,2])([1.5,1.5,1.5])(COLOR(col_buttonSS)(MAP(CUBIC_HERMITE(S1)([c_s1,c_s2,[0,0,0.2],[0,0,0.2]]))(domain2)));
}

//Button Start
function buttonStart(){
    return T([0,1])([-1.3,0])(buttonSelect());

}

//button Structure
function buttonsA_B_Select_Start(){
    return STRUCT([buttonA(),buttonB(),buttonStart(),buttonSelect()]);
}

//Joypad


function knots_cross(pp) {
        var i;
        var max = 2 + 1 + pp.length - 3 - 3;
        var kkknots = [ 0, 0, 0 ];
        for (i = 1; i <= max; i++) {
                kkknots.push(i);
        };
        return kkknots.concat([ max + 1, max + 1, max + 1 ]);
};
 
function cross() {
        function piece() {
                var pp1 = [ [ - 1, 0 ], [ - 1, 3 ], [ - 1, 3 ], [ - 1, 4 ], [ 1, 4 ], [ 1, 3 ], [ 1, 3 ], [ 1, 0 ] ];
                var c1 = NUBS(S0)(2)(knots_cross(pp1))(pp1);
                var pp2 = [ [ - 1, 0 ], [ 1, 0 ] ];
                var c2 = BEZIER(S0)(pp2);
                var surface_mapping = BEZIER(S1)([ c1, c2 ]);
                return MAP(surface_mapping)(DOMAIN([ [ 0, 1 ], [ 0, 1 ] ])([ 64, 1 ]))
        };
 
        var p1 = piece();
        var p2 = T([1])([ - 2 ])( S([1])([ -1  ])(p1) );
        var p12 = T([1])([ 1 ])( STRUCT([ p1, p2 ]) );
        var p34 = R([ 0, 1 ])(PI/2)( p12 );
 
        var c = T([ 0, 1 ])([ - 1, - 1 ])( CUBOID([ 2, 2 ]) );
 
        var big_cross= COLOR(col_joypad)( STRUCT([
                EXTRUDE([ 1 ])( p12 ),
                EXTRUDE([ 1 ])( p34 ),
                EXTRUDE([ 1 ])( c )
        ]) );

        return T([0,1])([2,5.5])(S([0,1,2])([0.28,0.28,0.28])(big_cross));
};
 


//audio channel
function audioCH(){
   var strip=S([0,1,2])([0.8,0.8,0.8])(T([0,1])([4.5,5])(COLOR(color_audio_strips)(R([0,1])(-PI/2)(buttonSelect()))));
   
   var strip2=T([0,1,2])([2,2.2,0.1])(strip);
   var strip3=T([0,1,2])([0.2,0.2,0])(strip2);
   var strip4=T([0,1,2])([-0.2,-0.2,0])(strip2);
   var strip5=T([0,1,2])([-0.2,-0.2,0])(strip4);
   var strip6=T([0,1,2])([-0.2,-0.2,0])(strip5);
   var strip7=T([0,1,2])([-0.2,-0.2,0])(strip6);
   var strips=STRUCT([strip2,strip3,strip4,strip5,strip6,strip7])
   return strips;

}

function edges(){
  var edges_frontal=COLOR(color_edges)(SIMPLEX_GRID([[0,9],[-14.1,0.1],[0,0.01]]));
  var edges_frontal2=COLOR(color_edges)(SIMPLEX_GRID([[-0.4,0.1,-8,0.1],[-14.2,0.8],[0,0.01]]))
  var edgesTot=STRUCT([edges_frontal,edges_frontal2]);
  return edgesTot;
}

// Super_mario escapes from His World !!!!! Go,MarioGo ! Mamma Mia !
function super_Mario(){
/**
 * @author Alessio De Angelis
 * 
 * SUPER MARIO PIXEL ART FUN
 * Inspired by this render: http://art.ngfiles.com/images/130/petelavadigger_super-mario-pixel.png
 */
var red = [209/255, 35/255, 26/255, 1];
var pink = [238/255, 191/255, 139/255, 1];
var black = [0, 0, 0, 1];
var blue = [71/255, 78/255, 208/255, 1];
var yellow = [1, 237/255, 31/255, 1];
var brown = [130/255, 66/255, 38/255, 1];
var face = [];
face.push(COLOR(pink)(SIMPLEX_GRID([[-5, 7], [-7, 1], [1]]))); //row7
face.push(COLOR(red)(SIMPLEX_GRID([[-12, 2], [-7, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 2], [-8, 1], [1]])));//row8
face.push(COLOR(pink)(SIMPLEX_GRID([[-5, 4], [-8, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-9, 4], [-8, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-13, 1], [-8, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 1, -1, 2], [-9, 1], [1]])));//row9
face.push(COLOR(pink)(SIMPLEX_GRID([[-4, 1, -2, 3, -1, 3], [-9, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-10, 1], [-9, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-14, 1], [-9, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 1, -1, 1], [-10, 1], [1]])));//row10
face.push(COLOR(pink)(SIMPLEX_GRID([[-4, 1, -1, 3, -1, 3], [-10, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-13, 2], [-10, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-9, 1], [-10, 2], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-4, 3], [-11, 1], [1]])));//row11
face.push(COLOR(pink)(SIMPLEX_GRID([[-7, 2, -1, 1], [-11, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-12, 3], [-11, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-4, 9], [-12, 1], [1]])));//row12
face.push(COLOR(pink)(SIMPLEX_GRID([[-13, 2], [-12, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-5, 5], [-13, 1], [1]])));//row13
face.push(COLOR(pink)(SIMPLEX_GRID([[-12, 3], [-13, 1], [1]])));
var body = [];
body.push(COLOR(brown)(SIMPLEX_GRID([[-1, 2], [1], [1]]))); //row0
body.push(COLOR(brown)(SIMPLEX_GRID([[-1, 3], [-1, 1], [1]]))); //row1
body.push(COLOR(blue)(SIMPLEX_GRID([[-4, 6], [-1, 1], [1]]))); 
body.push(COLOR(brown)(SIMPLEX_GRID([[-2, 3], [-2, 1], [1]]))); //row2
body.push(COLOR(brown)(SIMPLEX_GRID([[-14, 2], [-2, 4], [1]]))); 
body.push(COLOR(blue)(SIMPLEX_GRID([[-5, 9], [-2, 1], [1]]))); 
body.push(COLOR(blue)(SIMPLEX_GRID([[-4, 1, -1, 2, -1, 5], [-3, 1], [1]]))); //row3
body.push(COLOR(pink)(SIMPLEX_GRID([[-1, 1], [-3, 1], [1]])));
body.push(COLOR(yellow)(SIMPLEX_GRID([[-8, 1], [-3, 1], [1]])));
body.push(COLOR(red)(SIMPLEX_GRID([[-5, 1], [-3, 1], [1]])));
body.push(COLOR(pink)(SIMPLEX_GRID([[3], [-4, 1], [1]])));//row4
body.push(COLOR(red)(SIMPLEX_GRID([[-3, 4], [-4, 1], [1]])));
body.push(COLOR(blue)(SIMPLEX_GRID([[-7, 4, -1, 2], [-4, 1], [1]])));
body.push(COLOR(yellow)(SIMPLEX_GRID([[-11, 1], [-4, 1], [1]])));
body.push(COLOR(pink)(SIMPLEX_GRID([[2], [-5, 1], [1]])));//row5
body.push(COLOR(red)(SIMPLEX_GRID([[-2, 5, -1 , 3], [-5, 1], [1]])));
body.push(COLOR(blue)(SIMPLEX_GRID([[-7, 1, -3, 1], [-5, 1], [1]])));
body.push(COLOR(red)(SIMPLEX_GRID([[-2, 4, -1 , 3, -1, 2], [-6, 1], [1]])));//row6
body.push(COLOR(blue)(SIMPLEX_GRID([[-6, 1, -3, 1], [-6, 1], [1]])));
body.push(COLOR(brown)(SIMPLEX_GRID([[-15, 1], [-6, 1], [1]])));
scmodel = STRUCT(face.concat(body));
var mario_scaled= T([0,1,2])([5,10,0])(S([0,1,2])([0.15,0.15,0.15])(scmodel));
return mario_scaled;
}



function marioland_blocks(){
 var blocks=COLOR(color_blocks)(SIMPLEX_GRID([[-1,4.5,-2,0.4],[-8.5,0.3],[0,0.2]]));
 return blocks;
}

function Green_Tube(){
  function circle(radius, z) {
        return function (selector) {
                return function (p) {
                        return [ radius * COS( selector(p) ), radius * SIN( selector(p) ), z ];
                };
        };
};
 
// DRAW( MAP( circle( 5, 2 )( S0 ) )( INTERVALS( 2 * PI )( 32 ) ) )
 
function cylinder(radius, height, resolution) {
        var c1 = circle(radius, 0)(S0);
        var c2 = circle(radius, height)(S0);
        var s1 = BEZIER(S1)([ c1, c2 ]);
        var s2 = BEZIER(S1)([ c1, [ 0, 0, 0 ] ]);
        var s3 = BEZIER(S1)([ c2, [ 0, 0, height ] ]);
        var d2d = DOMAIN([ [ 0, 2 * PI ], [ 0, 1 ] ])([ resolution, 1 ]);
        var ss1 = MAP(s1)(d2d);
        var ss2 = MAP(s2)(d2d);
        var ss3 = MAP(s3)(d2d);
        return STRUCT([ ss1, ss2, ss3 ]);
};
 
// DRAW( cylinder( 2, 10, 32 ) )
  var extruded=cylinder( 0.7,1, 44 )
  var extruded2=T([2])([0.8])(cylinder( 0.8,0.4, 44 ))
  var tube= R([1,2])([-PI/2])(COLOR(color_Tube)(STRUCT([extruded,extruded2])))

return T([0,1,2])([2.4,8.8,-0.3])(tube);
}


function cartdrige_SuperMarioLand(){
 var cart_sml=COLOR(color_SBL)(SIMPLEX_GRID([[-2,5],[-11.6,3],[-2.2,0.3]]));
 return T([2])([-4.4])(cart_sml);
}

function backStripes(){
  var s=COLOR(color_SBL)(SIMPLEX_GRID([[-0.1,8.1],[-2.5,0.3,-0,4,0.3,-0.4,0.3,-0.4,0.3,-0.4,0.3,-0.4,0.3,-0.4,0.3,-0.4,0.3,-0.4,0.3],[0.1]]));
 return T([2])([-2.3])(s);
}

function GAMEBOY(){
    return STRUCT([buttonsA_B_Select_Start(),cross(),gameBoyscreen(),Greycase(),audioCH(),edges(),super_Mario(),marioland_blocks(),Green_Tube(),cartdrige_SuperMarioLand(),backStripes()]);
}
var model=GAMEBOY();


