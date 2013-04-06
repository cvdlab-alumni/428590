//-------------------------------es2-----------------------------------------------



 function circle (R) {
  var domain = DOMAIN([[0,2*PI],[0,R]])([36,1]);
  var mapping = function (v) {
    var raiser = v[0];
    var r = v[1];
    
    return [r*COS(raiser), r*SIN(raiser)];
  }
  var model = MAP(mapping)(domain);
  return model;
}

// ---SLICE FIRST LEVEL
slice10 = GRID(([[20],[-71,20],[4]]))
slice20 = GRID(([[-20,112],[-29,62],[4]])) 
slice30 = GRID(([[-20,17],[-22,7],[4]])) 
slice40 = GRID(([[-132,15],[-54,37],[4]])) 
slice50 = EXTRUDE([4])(circle([18.5])) 
slice60 = EXTRUDE([4])(circle([8.5])) 
slice70 = GRID(([[-132,5],[-49,10],[4]]))

circularlittle_slice10 = T([1,2])([28.5,22])(slice60) 
circularlittle_slice20 = T([1,2])([147,72.5])(slice50)

floor0 = STRUCT([slice10,slice20,slice30,slice40,circularlittle_slice10,circularlittle_slice20,slice70])


//SLICE SECOND LEVEL
slice11 = GRID(([[17],[91],[-4,-33,5]]))
slice21 = GRID(([[-17,144],[-87,4],[-4,-33,5]]))
slice31 = GRID(([[-17,144],[73],[-4,-33,5]]))
slice41 = GRID(([[-17,-70,74],[-73,14],[-4,-33,5]]))
slice51 = GRID(([[16],[-72,15],[-4,-33,5]])) //balcone
slice51_translated = T([1,2])([-16,3])(slice51)

floor1 = STRUCT([slice11,slice21,slice31,slice41,slice51_translated])

//  SLICE THIRD LEVEL
slice13 = GRID(([[17],[91],[-4,-33,-5,-33,5]]))
slice23 = GRID(([[-17,144],[-87,4],[-4,-33,-5,-33,5]]))
slice33 = GRID(([[-17,144],[73],[-4,-33,-5,-33,5]]))
slice43 = GRID(([[-17,-70,74],[-73,14],[-4,-33,-5,-33,5]]))

floor2 = STRUCT([slice13,slice23,slice33,slice43])

//  SLICE FOURTH
slice14 = GRID(([[83],[95],[-4,-33,-5,-33,-5,-33,5]]))
slice24 = GRID(([[-83,77],[-91,4],[-4,-33,-5,-33,-5,-33,5]]))
slice34 = GRID(([[-83,77],[77],[-4,-33,-5,-33,-5,-33,5]]))
slice44 = GRID(([[-83,-44,33],[-77,14],[-4,-33,-5,-33,-5,-33,5]]))

floor3 = STRUCT([slice14,slice24,slice34,slice44])

//ROOF SLICES
slice1R = GRID(([[160],[-72,23],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice2R = GRID(([[-72,88],[72],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice3R = GRID(([[160],[4],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice4R = GRID(([[4],[72],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))

floor4 = STRUCT([slice1R,slice2R,slice3R,slice4R])

// BASEGROUND
terrain = COLOR([0,168,107])(T([1,2,3])([-20,-20,-5])(GRID([[205],[135],[5]])))


building = STRUCT([floor0,floor1,floor2,floor3,floor4,terrain])
VIEW(building)
