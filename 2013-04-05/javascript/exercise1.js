//convenient method used for translation from pyplasm
T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;

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
 
//GROUND ELEMENTS
circular_pillar_base = EXTRUDE([4+33])(circle([2]))
squared_pillar_base = CUBOID([4,4,33])
little_squared_pillar_base = CUBOID([2,2,33])

//FIRST FLOOR
squared_pillar_0 = GRID(([[-4,-35,4,-35,4,-35,4],[-4,-71,4],[4+33]]))
squared_pillar_0_row = CONS(AA(T([1,2]))([[0,0],[39,0],[78,0],[117,0],[156,0],[0,75]]))
circle_pillar_0_row = STRUCT(squared_pillar_0_row(circular_pillar_base))

pillars0 = STRUCT([squared_pillar_0,T([1,2])([2,2])(circle_pillar_0_row)])

// SECOND FLOOR
squared_pillar_0 = GRID(([[4,-35,4,-35,4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,33]]))
squared_pillar_0_translated = T([1,3])([117,44])(squared_pillar_base)
circle_pillar_1_translated = T([1,2,3])([117,75,44])(circular_pillar_base)
pillars1 = STRUCT([squared_pillar_0,squared_pillar_0_translated,T([1,2])([2,2])(circle_pillar_1_translated)])
pillars1 = T([3])([-2])(pillars1)


// THIRD FLOOR
squared_pillar_2 = GRID(([[4,-35,4,-35,-4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,-33,-7,33]]))
squared_pillar_2_row = CONS(AA(T([1,2,3]))([[78,75,84],[117,75,84]]))
all_squared_pillar_2_row = STRUCT(squared_pillar_2_row(squared_pillar_base))
pillars2 = STRUCT([squared_pillar_2,all_squared_pillar_2_row])
pillars2 = T([3])([-4])(pillars2)

//ROOF LEVEL
squared_pillar_3 = GRID(([[-4,-35,-4,-35,4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,-33,-7,-33,-7,33]]))
squared_pillar_3_row = CONS(AA(T([1,2,3]))([[0,75,124],[39,75,124]]))
little_squared_pillar_3_row = STRUCT(squared_pillar_3_row(little_squared_pillar_base))
pillars3 = STRUCT([squared_pillar_3,T([1,2,3])([117,75,124])(squared_pillar_base),little_squared_pillar_3_row])
pillars3 = T([3])([-6])(pillars3)

 // ALL
building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building)



building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building)

