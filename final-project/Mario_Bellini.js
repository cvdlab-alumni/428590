// Vignoli W.g 428590

var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([17,17,3]);
var Domain_wheel = DOMAIN([[0,1],[0,2*PI]])([15,15]);

var Color_whiteYY = [270/255,270/255,270/255];
var Color_metalYY = [230/255,230/255,230/255,0.7];
var Color_ruota = [152/255,155/255,162/255];
var Color_ruota_est = [16/255,20/255,32/255];
var Color_blackYY = [37/255,38/255,40/255];
var Color_sofa = [200/255,30/255,43/255];
var Color_sofablack = [37/255,35/255,40/255];
var Color_armChair = [200/255,30/255,43/255];
var Color_armChairblack = [37/255,35/255,40/255];
var Color_Floor = [88/255,43/255,26/255,1];
var Color_cloud = [2,2,2,0.94];
var Color_cordLamp = [37/255,35/255,40/255,0.3];

var r_disk=0.05
var h_disk=2;



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

//table Ying Yang
function YingYangTable () {
      var thicknessYY= 0.25;
      var puntiControllo = [[0,0,0],[0.05,-0.002,0],[0.6,0.05,0],[0.8,0.38,0],[1.2,1.25,0],[1.2,2.25,0],[0.8,3,0],[-0.5,4,0],[-1,3.6,0],[-0.4,3,0],[-0.65,2,0],[-1.4,1.18,0],[-1,0.15,0],[-0.05,-0.01,0],[0,0,0]];
      var d=knots(puntiControllo);

      var b3 = BEZIER(S0)([[0,1.5,0]]);

      var b4 = BEZIER(S0)([[0,1.5,thicknessYY]]);
      var f_Ying_Yang_NUBS= NUBS(S0)(2)(d)(puntiControllo);

      var puntiControllo2 = [[0,0,thicknessYY],[0.05,-0.002,thicknessYY],[0.6,0.05,thicknessYY],[0.8,0.38,thicknessYY],[1.2,1.25,thicknessYY],[1.2,2.25,thicknessYY],[0.8,3,thicknessYY],[-0.5,4,thicknessYY],[-1,3.6,thicknessYY],[-0.4,3,thicknessYY],[-0.65,2,thicknessYY],[-1.4,1.18,thicknessYY],[-1,0.15,thicknessYY],[-0.05,-0.01,thicknessYY],[0,0,thicknessYY]];
      var d2=knots(puntiControllo2);

      var f_Ying_Yang_NUBS2= NUBS(S0)(2)(d2)(puntiControllo2);


      var out = BEZIER(S1)([f_Ying_Yang_NUBS,b3]);
      var x = MAP(out)(domain2);

      var out2 = BEZIER(S1)([f_Ying_Yang_NUBS2,b4]);
           
      var s10 =CUBIC_HERMITE(S2)([out,out2,[0.2,0,0],[-0.2,0,0]]);

      var whiteY=COLOR(Color_whiteYY)(MAP(s10)(domain3));
      var whiteY_up=T([2])([h_disk-0.01])(whiteY)
      var blackY=COLOR(Color_blackYY)(MAP(s10)(domain3));
      var blackY_up=T([2])([h_disk-0.01])(blackY)
      //-------------------Wheels  
      var metal_cylinder = DISK([r_disk])();

      var metal_cylinderE = EXTRUDE([h_disk])(metal_cylinder);
      var metal_cylinderEC = T([0,1,2])([0.4,0.55,thicknessYY])(COLOR(Color_metalYY)(metal_cylinderE));
      var metal_cylinderEC2=T([0,1,2])([-1,0,0])(metal_cylinderEC)
      var metal_cylinderEC3= T([0,1,2])([-0.78,2.8,0])(metal_cylinderEC)


      var punti_rotazione_CV =  [[0.56,0,0],[0.4,0,0.06], [0.3,0,0.06], [0,0,0.081]];
      var curva_centro_volante = BEZIER(S0)(punti_rotazione_CV)

      var funz_rot_centro_volante = ROTATIONAL_SURFACE(curva_centro_volante)
      var meta_centro_volante = MAP(funz_rot_centro_volante)(Domain_wheel)
      var meta_centro_volante2=T([2])([-0.3])(S([2])([-1])(meta_centro_volante))
      var ruota=COLOR(Color_ruota)(STRUCT([meta_centro_volante,meta_centro_volante2]))

      var disk_black = DISK([0.6])();
       
      var disk_blackE = EXTRUDE([0.3])(disk_black);
      var disk_blackEC = T([0,1,2])([0,0,-0.3])(COLOR(Color_ruota_est)(disk_blackE));

      var ruotaTOT=STRUCT([disk_blackEC,ruota])

      var ruotaTOT2=R([1,2])(PI/2)(ruotaTOT);

      var ruotaTOT3=T([0,1,2])([0.45,0.9,-0.3])(S([0,1,2])([0.28,0.28,0.28])(R([0,1])(PI/2)(ruotaTOT2)))
      //-------------wheels
      var C=BEZIER(S1)
      var SPF=BEZIER(S2)
      var pp1 = [ [ 0, 1, 0 ], [ 2, 1, 0 ],  [ 2.5, 2.6, 0 ] ];
      var pp2 = [ [ 0, -1, 0 ], [ 3, -1, 0 ],  [ 4.5, 2, 0 ] ];
      var c1 = C(pp1);
      var cc1 = MAP(c1)(domain2);
      var c2 = C(pp2);
      var cc2 = MAP(c2)(domain2);

      var s1 = CUBIC_HERMITE(S2)([ c1, c2, [ 0, 0, 3.6 ], [ 0, 0, -3.6 ] ]);
      var ss1 = MAP(s1)(domain3);
      var s2 = CUBIC_HERMITE(S2)([ c1, c2, [ 0, 0, -3.6 ], [ 0, 0, 3.6 ] ]);
      var ss2 = MAP(s2)(domain3);
      var tubo = STRUCT([ ss1, ss2 ]);
      var tuboT=R([0,2])(-PI/2)(tubo)
      var tuboT2=R([0,2])(-PI)(S([0,1,2])([0.08,0.08,0.08])(tuboT))
      var tuboT3=COLOR(Color_metalYY)(S([0,1,2])([0.9,0.9,0.9])(T([0,1,2])([0.47,0.64,0])(tuboT2)))

      var tube_wheel=STRUCT([ruotaTOT3,tuboT3]);
      var tube_wheel2=T([0,1,2])([-1,0,0])(tube_wheel);

      var tube_wheel3=T([0,1,2])([-0.78,2.8,0])(tube_wheel);
      //------------
      var YingYangTableWhitetemp=STRUCT([whiteY,metal_cylinderEC,metal_cylinderEC2,metal_cylinderEC3,whiteY_up]);
      var YingYangTableWhite=R([0,1])(-PI/22)(STRUCT([YingYangTableWhitetemp,tube_wheel,tube_wheel2,tube_wheel3]));
      var YingYangTableWlack=T([0,1,2])([-1.8,4,0])(R([0,1])(-PI-(PI/22))(STRUCT([blackY,blackY_up,metal_cylinderEC,metal_cylinderEC2,metal_cylinderEC3,tube_wheel,tube_wheel2,tube_wheel3])))
      var YingYangTable=T([0,1,2])([20,-20,1.2])(S([0,1,2])([2.6,2.6,2.6])(STRUCT([YingYangTableWhite,YingYangTableWlack])))
      DRAW(YingYangTable);

}


//--------------------------BIB sofa


function Sofas(){

         function curves_union( curves ){
              function isin( u, a, b ){
              return (u >= a && u < b) ;}
              function aux0( domains ){
              function aux1(u){
              n = curves.length
              i = 0
              j = 0
              k = 0
              while ( i < n ){
              k += domains[i][1] - domains[i][0]
              i += 1}
              i = 0;
              while ( i < n && !(isin(u[0] * k, j, j + domains[i][1] - domains[i][0])) ){
              j += domains[i][1] - domains[i][0]
              i += 1}

              if ( i < n ){
              return curves[i]([ domains[i][0] + u[0] * k - j ])}
              else{
              return curves[n-1]([ domains[n-1][1] ])}}
              return aux1;}
              return aux0;
        }



        var controlpoints = [[3,0,0],[3,0,6],[ 0,-0.7,0.5],[ 0,0.7,0.5]];
        var curveMapping = CUBIC_HERMITE(S0)(controlpoints);

        var controlpoints2 = [[3,0,6],[3,6,6],[ 1,0.2,0.5],[ -1,0.2,-0.5]];
        var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints2);

        var controlpoints3 = [[11,0,0],[11,0,6],[ 0,-0.7,0.5],[ 0,0.7,0.5]];
        var curveMapping3 = CUBIC_HERMITE(S0)(controlpoints3);

        var controlpoints4 = [[11,0,6],[11,6,6],[ 0,0.7,0.5],[ 0,0.7,-0.5]];
        var curveMapping4 = CUBIC_HERMITE(S0)(controlpoints4);

        //sopra e sotto


        var curveMapping12U = CUBIC_HERMITE(S1)( [[3,6,6],[11,6,6],[ 0.5,0,2.6],[ 0.5,0,-2.6]] );

        var curveMapping12D = CUBIC_HERMITE(S1)( [[3,0,0],[11,0,0],[ 0.5,-0.3,0],[ 0.5,0.3,0]] );

        var curveDL_front = CUBIC_HERMITE(S1)( [[0,0,0],[3,0,0],[ 0.5,-0.9,0],[ 0.5,0.3,0]] );

        var curveU_edgeFront = CUBIC_HERMITE(S1)( [[0,0,12],[3,0,6],[ 3.5,0,2],[ -3.5,0,-2]] );

        var curve_edgeLeft=CUBIC_HERMITE(S0)( [[0,0,0],[0,0,12],[ -2,0,0.8],[ 2,0,0.8]] );

        var c_pillow5=CUBIC_HERMITE(S0)( [[0,0,12],[0,10,12],[ 5,1,-5],[ -5,1,5]] );
        var c_pillow6=CUBIC_HERMITE(S1)( [[0,10,12],[3,6,6],[ 2,-2,-2],[ -2,2,-2]] );


        var c_pillow7=CUBIC_HERMITE(S0)( [[0,10,12],[3,6,6],[ 2,-2,-2],[ -2,2,-2]] );
        var c_pcentral8=CUBIC_HERMITE(S0)( [[11,10,12],[11,6,6],[ 0,-6,3],[0,4,-2]] );
        var c_pillow9=CUBIC_HERMITE(S1)( [[0,10,12],[11,10,12],[ 1,-4,-5.5],[ 1,4,5.5]] );


        //BACK
        var c_baseL=CUBIC_HERMITE(S0)( [[0,0,0],[0,10,0],[-4,4,0],[4,4,0]] );
        var c_baseBACK=CUBIC_HERMITE(S0)( [[0,10,0],[11,10,0],[4,4,0],[0,0,0]] );
       
        var c_edgeRight=CUBIC_HERMITE(S1)([[11,10,0],[11,10,12],[0,0,0],[0,0,0]]);

        

        var curve_edgeLeft2=CUBIC_HERMITE(S1)( [[0,0,0],[0,0,12],[ -2,0,0.8],[ 2,0,0.8]] );
        var c_BACK2=CUBIC_HERMITE(S0)( [[0,10,12],[11,10,12],[ 1,-4,-5.5],[ 1,4,5.5]] );



        var f56 = curves_union([ c_baseL, c_baseBACK ])([ [ 0, 1 ], [ 0, 1 ] ]);
        var f78 = curves_union([ c_pillow5, c_BACK2 ])([ [ 0, 1 ], [ 0, 1 ] ]);



        var fr1 = CUBIC_HERMITE(S0)( [[3,0,0],[11,0,0],[ 0.5,-0.3,0],[ 0.5,0.3,0]] );

        var fr2 = CUBIC_HERMITE(S0)( [[0,0,0],[3,0,0],[ 0.5,-0.9,0],[ 0.5,0.3,0]] );



        var f9Front = curves_union([ fr1, fr2 ])([ [ 0, 1 ], [ 0, 1 ] ]);

        var c_I=CUBIC_HERMITE(S1)([[0,10,0],[0,10,12],[-4,4,4],[4,-4,4]]);

        var C_I2 = CUBIC_HERMITE(S0)( [[11,0,0],[11,10,0],[ 0,0,0],[ 0,0,0]] );


        var fseatDL  = CUBIC_HERMITE(S1)([curveMapping,curveMapping2,[0,0,0],[0,0,0]]);

        var fseatUL  = CUBIC_HERMITE(S1)([curveMapping3,curveMapping4,[0,0,0],[0,0,0]]);

        var seatK  = CUBIC_HERMITE(S2)([fseatUL,fseatDL,[0,0,0],[0,0,0]]);



        var f12 = curves_union([ curveMapping, curveMapping2 ])([ [ 0, 1 ], [ 0, 1 ] ]);

        var f34 = curves_union([ curveMapping3, curveMapping4 ])([ [ 0, 1 ], [ 0, 1 ] ]);


        // left seat
        var seatL = MAP(COONS_PATCH([f12,f34,curveMapping12D,curveMapping12U,]))(domain2);
        var EdgeFrontL = MAP(COONS_PATCH([curve_edgeLeft,curveMapping,curveDL_front,curveU_edgeFront]))(domain2);
        var pillowL = MAP(COONS_PATCH([c_pillow5,curveMapping2,curveU_edgeFront,c_pillow6]))(domain2);
        var pillowC = MAP(COONS_PATCH([c_pillow7,c_pcentral8,c_pillow9,curveMapping12U]))(domain2);

      


        var backSofa2 = MAP(COONS_PATCH([c_baseL,c_pillow5,curve_edgeLeft2,c_I]))(domain2);
        var backSofa3 = MAP(COONS_PATCH([c_baseBACK,c_BACK2,c_I,c_edgeRight]))(domain2);

        var sofaLeft=STRUCT([seatL,EdgeFrontL,pillowL,pillowC,backSofa2,backSofa3]);
        var sofaRight=T([0])([22])(S([0])([-1])(sofaLeft))

        var sofaTOT=T([0,1,2])([40,-10,0])(R([0,1])([-PI/2])(COLOR(Color_sofa)(STRUCT([sofaLeft,sofaRight]))))
        var sofaBlack= T([0,1,2])([10,-40,0])(R([0,1])([-PI])(COLOR(Color_sofablack)(sofaTOT)))


        DRAW(sofaTOT);
        DRAW(sofaBlack);
        //-----------Armchairs

        var c_pillow9=CUBIC_HERMITE(S1)( [[0,10,12],[11,10,12],[ 0,0,0],[ 0,0,0]] );
        var c_BACK2=CUBIC_HERMITE(S0)( [[0,10,12],[11,10,12],[ 0,0,0],[ 0,0,0]] );
        

        var curveMapping12U = CUBIC_HERMITE(S1)( [[3,6,6],[11,6,6],[ 0.5,0,2.6],[ 0.5,0,-2.6]] );

        var backSofa2 = MAP(COONS_PATCH([c_baseL,c_pillow5,curve_edgeLeft2,c_I]))(domain2);
        var backSofa3 = MAP(COONS_PATCH([c_baseBACK,c_BACK2,c_I,c_edgeRight]))(domain2);
        var seatL = MAP(COONS_PATCH([f12,f34,curveMapping12D,curveMapping12U,]))(domain2);
        var EdgeFrontL = MAP(COONS_PATCH([curve_edgeLeft,curveMapping,curveDL_front,curveU_edgeFront]))(domain2);
        var pillowL = MAP(COONS_PATCH([c_pillow5,curveMapping2,curveU_edgeFront,c_pillow6]))(domain2);
        var pillowC = MAP(COONS_PATCH([c_pillow7,c_pcentral8,c_pillow9,curveMapping12U]))(domain2);


        var armChairLeft=S([0,1,2])([0.65,1,1])(STRUCT([seatL,EdgeFrontL,pillowL,pillowC,backSofa2,backSofa3]));
        var armChairRight=T([0])([9])(S([0])([-1])(armChairLeft))

        var armChairTOT=R([0,1])([0])(COLOR(Color_armChair)(STRUCT([armChairLeft,armChairRight])))
        var armChairBlack= T([1])([-45])(R([0,1])([-PI])(COLOR(Color_armChairblack)(armChairTOT)))


        DRAW(armChairTOT);
        DRAW(armChairBlack);

}

//-------------------------------


//sfera----------------CLOUD LAMP 
function CloudLamp(){
        var SPHERE = function (arg){
          var a = arg[0];
          var b = arg[1];
          var u = SIN(a) * COS(b);
          var v = SIN(a) * SIN(b);
          var w = COS(a);
          return [u,v,w];
        };


        

    



        function cloud(size,x,y,z) {

        var CloudDomain = DOMAIN([[0,PI*2.0],[0,2*PI]])([48,48]);
        var LittleCloud = S([0,1,2])([size+Math.random()*1.4,size+Math.random()*1.8,size+Math.random()*1.9])(MAP(SPHERE)(CloudDomain));

          return T([0,1,2])([x,y,z])(LittleCloud);
        }

        var cloud1= COLOR(Color_cloud)(STRUCT( [


        cloud(3,0,0,0),
        cloud(4,2,2.5,1),
        cloud(4,2,-2.5,1),
        cloud(2,3,3,1),
        cloud(2,4,-3,2),
        cloud(3,5.5,3,-2),
        cloud(3,7,-3,2.2),

        cloud(2.3,7.5,3,2.4),
        cloud(3.3,8,-3.4,-2.9),
        cloud(4.4,7,3.7,3),
        cloud(4.2,9,-4,-3.2),
        cloud(6.2,11,3,4),
        cloud(5.3,13,-2,2),

        cloud(4.3,15,5,8),
        cloud(4.9,16.4,-5,-4.6),
        cloud(6,18.3,9,5),
        cloud(7,20,-9,-8),
        cloud(5,23,8.4,6),
        cloud(8,26,-10,5),

        cloud(5,15,13,13),
        cloud(4.4,28,-12.4,-7),
        cloud(6,32,7,7),
        cloud(7,35,-7,-10),
        cloud(7,37,13,7),
        cloud(8,39,-14,-5),
        cloud(10,29,0,0)


        ]) ) ;

        var cloud2= T([0,1,2])([51,0,0])(S([0])([-1])(cloud1));

        var r_lamp=0.3;
        var h_lamp=1500;

        var lamp_cylinder = DISK([r_lamp])();

        var lamp_cylinderE = EXTRUDE([h_lamp])(lamp_cylinder);
        var lamp_cylinderEC = T([0,1,2])([5,0,-8]) (COLOR(Color_cordLamp)(lamp_cylinderE));
        var lamp_cylinderEC2=T([0,1,2])([25,0,0])(lamp_cylinderEC)

        var diskLamp = DISK([30])();

        var diskLampE = EXTRUDE([0.4])(diskLamp);
        var diskLampEC = T([0,1,2])([22.5,2,-3]) (COLOR(Color_cloud)(diskLampE));

        var cord_lamp= T([0,1,2])([10,0,10])(STRUCT([lamp_cylinderEC,lamp_cylinderEC2]))
        var LampTot= T([0,1,2])([0,-30,30]) (S([0,1,2])([0.1,0.1,0.1]) (STRUCT([cord_lamp,cloud1,cloud2,diskLampEC])))
        DRAW(LampTot)
        

}


//sudoku !!!!

function SudokuCupBoard()  {
      var deep=7;
      var largeStick=0.1;

      //base

      var baseW= COLOR(Color_blackYY)(SIMPLEX_GRID([[18],[7],[1.5]]) );

      var f1W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-6,6],[-6.9,0.1],[-1.5,-7,7]]) );

      var f2W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-12,6],[-6.9,0.1],[-1.5,-3.5,-10.5,3.5,-3.5,3.5 ]]) );

      var panel1W= COLOR(Color_blackYY)(SIMPLEX_GRID([[largeStick],[4],[-1.5,3.5,-7,3.5]]));
      var panel2W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-6,largeStick],[7],[-1.5,3.5]]));

      var panel3W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-12,largeStick],[7],[-1.5,17.5,-3.5,3.5]]));
      var panel4W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-18,largeStick],[-3,4],[-1.5,3.5,-7,3.5]]));

      //orizonatalWlack
      var panel5W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-6,12],[7],[-1.5,-3.5,largeStick]]));

      var panel6W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-12,6],[7],[-1.5,-10.5,largeStick]]));



      var panel7W= COLOR(Color_blackYY)(SIMPLEX_GRID([[6],[7],[-1.5,-14,largeStick]]));



      var panel8W= COLOR(Color_blackYY)(SIMPLEX_GRID([[-6,6],[7],[-1.5,-17.5,largeStick]]));


      var panel9W= COLOR(Color_blackYY)(SIMPLEX_GRID([[12],[7],[-1.5,-24.5,largeStick]]));

      var blackParts= STRUCT([f1W,f2W, baseW,panel9W,panel8W,panel7W,panel6W,panel5W,panel4W,panel3W,panel2W,panel1W]);

      //white

      var panel1W= COLOR(Color_cloud)(SIMPLEX_GRID([[largeStick],[4],[-1.5,-3.5,7,-3.5,10.5]]));
      var panel2W= COLOR(Color_cloud)(SIMPLEX_GRID([[-6,largeStick],[7],[-1.5,-3.5,21]]));

      var panel3W= COLOR(Color_cloud)(SIMPLEX_GRID([[-12,largeStick],[7],[-1.5,-17.5,3.5,-3.5]]));
      var panel4W= COLOR(Color_cloud)(SIMPLEX_GRID([[-18,largeStick],[-3,4],[-1.5,-3.5,7,-3.5,10.5]]));

      //orizonatalWHITE
      var panel5W= COLOR(Color_cloud)(SIMPLEX_GRID([[6],[7],[-1.5,-3.5,largeStick]]));

      var panel6W= COLOR(Color_cloud)(SIMPLEX_GRID([[18],[7],[-1.5,-3.5,-3.5,largeStick]]));

      var panel7W= COLOR(Color_cloud)(SIMPLEX_GRID([[12,-6],[7],[-1.5,-10.5,largeStick]]));



      var panel8W= COLOR(Color_cloud)(SIMPLEX_GRID([[-6,12],[7],[-1.5,-14,largeStick]]));



      var panel9W= COLOR(Color_cloud)(SIMPLEX_GRID([[6,-6,6],[7],[-1.5,-17.5,largeStick]]));

      var panel10W= COLOR(Color_cloud)(SIMPLEX_GRID([[18],[7],[-1.5,-21,largeStick]]));

      var panel11W= COLOR(Color_cloud)(SIMPLEX_GRID([[-12,6],[7],[-1.5,-24.5,largeStick]]));

      var whiteParts= STRUCT([panel11W, panel10W, panel9W,panel8W,panel7W,panel6W,panel5W,panel4W,panel3W,panel2W,panel1W]);


      var Sdk=T([0,1,2])([22,0,0]) (STRUCT([blackParts,whiteParts]) );
      DRAW(Sdk);
   
}

function FloorLivingRoom(){
  var street_matrix= T([0,1,2])([-100,-250,-1.5])(SIMPLEX_GRID([[-1,500],[-1,500],[-1,0.5]]));
        var floor=COLOR(Color_Floor)(street_matrix);

        DRAW(floor);
}

var model= STRUCT([SudokuCupBoard(),CloudLamp(),YingYangTable(),Sofas(),FloorLivingRoom()])
DRAW(model);
