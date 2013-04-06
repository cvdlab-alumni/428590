//---------------------es5-----------------------------------




stair_width = 50.0
stair_steps = 13.0
height = 4.0
raiser = 35.0/stair_steps 
ft = stair_width/stair_steps

// VERTEX AND CELLS
vertex = [[0,0],[0,height+raiser/2.0],[ft,raiser/2.0],[ft,height+raiser/2.0]]
cells = [[1,2,3,4]]
var step2D = SIMPLICIAL_COMPLEX(vertex)([[0,2,1],[1,2,3]]);


step3D = MAP([S1,S3,S2])(EXTRUDE([15])(step2D))
ramp = STRUCT(REPLICA(stair_steps)([step3D,T([1,3])([ft,raiser])]))

// --- traslate and multiplicate them to fit with the building
stair1 = T([1,2])([35,72])(ramp)

stair2 = T([1,2,3])([17.5,72,38])(ramp)

stair3 = T([1,2,3])([75,77,74])(ramp)


building = STRUCT([stair1,stair2,stair3])
VIEW(building)