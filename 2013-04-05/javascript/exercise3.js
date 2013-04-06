//-----------------------es3-------------------------------------



// RIGHT WALL
wall1R = GRID(([[160],[4],[-144,14]]))
wall2R = GRID(([[76],[4],[-33,94]]))
wall3R = GRID(([[-72,4],[4],[-33,125]]))
wall4R = GRID(([[84],[4],[20]]))
wall5R = GRID(([[-111,49],[4],[-33,125]]))

wall_R = CONS(AA(T([1,3]))([[76,33],[76,70],[76,107]]))
wall_pR = STRUCT(wall_R(wall4R))


Right_wall = STRUCT([wall1R,wall2R,wall3R,wall_pR,wall5R])

//LEFT WALL
wall1L = GRID(([[160],[-4,-87,4],[-107,51]]))
wall2L = GRID(([[160],[-4,-87,4],[20]]))


wallpL = CONS(AA(T([3]))([[33],[70]]))
wallp2L = STRUCT(wallpL(wall2L))

wall3L = GRID(([[135],[-4,-87,4],[22]]))
wall4L = GRID(([[103],[-4,-87,4],[-22,7]]))
wall5L = GRID(([[-103,-7,25],[-4,-87,4],[-22,7]]))
wall6L = GRID(([[135],[-4,-87,4],[-22,-7,4]]))
wall7L = GRID(([[90],[-4,-87,4],[-22,-7,-4,-20,17]]))
wall8L = GRID(([[-90,-35,35],[-4,-87,4],[-22,-7,-4,-20,17]]))
wall9L = GRID(([[129],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))
wall10L = GRID(([[-129,-2,7],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))
wall11L = GRID(([[-129,-2,-7,-2,20],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))

Left_wall = STRUCT([wall1L,wallp2L,wall3L,wall4L,wall5L,wall6L,wall7L,wall8L,wall9L,wall10L,wall11L])

// NORTH WALL
wall1N = GRID(([[-4,-152,4],[87],[-33,-20,-17,-20,-17,-20,-17,14]]))
wall2N = GRID(([[-4,-152,4],[87],[20]]))

wallpN = CONS(AA(T([3]))([[33],[33+20+17],[33+20+17+20+17]]))
wallp2N = STRUCT(wallpN(wall2N))

wall3N = GRID(([[-4,-152,4],[4],[-33,158-33]]))
wall4N = GRID(([[-4,-152,4],[95],[-33,4]]))
wall5N = GRID(([[-4,-152,4],[95],[5]]))

-
wall5pN = CONS(AA(T([3]))([[33+4+37],[33+4+33+5+36]]))
wall6pN = STRUCT(wall5pN(wall5N))

wall6N = GRID(([[-4,-152,4],[95],[-33,-20,-17,-20,-17,-20,-17,-7,7]]))
wall7N = GRID(([[-4,-152,4],[-95+7+13,13],[-33,158-33]]))

North_wall = STRUCT([wall1N,wallp2N,wall3N,wall4N,wall6pN,wall6N,wall7N])
North_wall = T([1])([1])(North_wall)

// SOUTH WALL
wall1S = GRID(([[4],[95],[-33,-4,-30,-5,-30,-25,-17,14]]))
wall2S = GRID(([[4],[95],[-33,-4,-30,-5,-30,25]]))
wall3S = GRID(([[4],[95],[-33,-4,-30,5]]))
wall4S = GRID(([[4],[95],[-33,4]]))
wall5S = GRID(([[4],[2],[-33,158-33]]))
wall6S = GRID(([[4],[-95+4+4,4],[-33-4,158-33-14-17-4]]))
wall7S = GRID(([[4],[-95+4+2+2+20,10],[-33-4,158-33-4-30-2]]))
wall8S = GRID(([[4],[-95+4+2+2+20,20],[-33-4-5-30,158-33-4-30-2-25-17-14]]))
wall9S = GRID(([[4],[95],[-33-4-30,10]]))


South_wall = STRUCT([wall1S,wall2S,wall3S,wall4S,wall5S,wall6S,wall7S,wall8S,wall9S])



building = STRUCT([Right_wall,Left_wall,North_wall,South_wall])
VIEW(building)
