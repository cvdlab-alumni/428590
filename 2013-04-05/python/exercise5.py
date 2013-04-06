# ---exercise 5
groheith = 4.0
raiser = 35.0/steps 
Width = 50.0
steps = 13.0
ftp = Width/steps

vertex = [[0,0],[0,groheith+raiser/2.0],[ftp,raiser/2.0],[ftp,groheith+raiser/2.0]]
cells = [[1,2,3,4]]


step2D = MKPOL([vertex,cells,None])


step3D = PROD([step2D,Q(15)])
step3D = MAP([S1,S3,S2])(step3D)


ramp = STRUCT(NN(steps)([step3D,T([1,3])([ftp,raiser])]))


stair1 = T([1,2])([35,72])(ramp)

stair2 = T([1,2,3])([17.5,72,38])(ramp)

stair3 = T([1,2,3])([75,77,74])(ramp)


building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,stair1,stair2,stair3,windowssud,windowssud2,NorthWall,SouthWall,Left_rightWall,Left_wall,terrain])
VIEW(building)