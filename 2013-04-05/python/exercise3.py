# --- exercise 3

# wallLeft parts

Wall0L = INSR(PROD)(AA(QUOTE)([[160],[4],[-144,14]]))
Wall1L = INSR(PROD)(AA(QUOTE)([[76],[4],[-33,94]]))
Wall2L = INSR(PROD)(AA(QUOTE)([[-72,4],[4],[-33,125]]))
Wall3L = INSR(PROD)(AA(QUOTE)([[84],[4],[20]]))
Wall4L = INSR(PROD)(AA(QUOTE)([[-111,49],[4],[-33,125]]))



Wall4L pr = CONS(AA(T([1,3]))([[76,33],[76,70],[76,107]]))
Wall4L pr2 = STRUCT(Wall4L pr(Wall3L))


Left_wall = STRUCT([Wall0L,Wall1L,Wall2L,Wall4L pr2,Wall4L])

# Leftwall

wall5l = INSR(PROD)(AA(QUOTE)([[160],[-4,-87,4],[-107,51]]))
wall6l = INSR(PROD)(AA(QUOTE)([[160],[-4,-87,4],[20]]))


wall6lrr = CONS(AA(T([3]))([[33],[70]]))
wall6lrrw = STRUCT(wall6lrr(wall6l))

wall7vl = INSR(PROD)(AA(QUOTE)([[135],[-4,-87,4],[22]]))
wall8vl = INSR(PROD)(AA(QUOTE)([[103],[-4,-87,4],[-22,7]]))
wall9vl = INSR(PROD)(AA(QUOTE)([[-103,-7,25],[-4,-87,4],[-22,7]]))
wall10vl = INSR(PROD)(AA(QUOTE)([[135],[-4,-87,4],[-22,-7,4]]))
wall11vl = INSR(PROD)(AA(QUOTE)([[90],[-4,-87,4],[-22,-7,-4,-20,17]]))
wall12vl = INSR(PROD)(AA(QUOTE)([[-90,-35,35],[-4,-87,4],[-22,-7,-4,-20,17]]))
wall13vl = INSR(PROD)(AA(QUOTE)([[129],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))
wall14vl = INSR(PROD)(AA(QUOTE)([[-129,-2,7],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))
wall15vl = INSR(PROD)(AA(QUOTE)([[-129,-2,-7,-2,20],[-4,-87,4],[-22,-7,-4,-20,-17,-20,17]]))

Left_rightWall = STRUCT([wall5l,wall6lrrw,wall7vl,wall8vl,wall9vl,wall10vl,wall11vl,wall12vl,wall13vl,wall14vl,wall15vl])



# NORTH SIDE WALL

Wall00n = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[87],[-33,-20,-17,-20,-17,-20,-17,14]]))
Wall01n = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[87],[20]]))

Wall01n rr = CONS(AA(T([3]))([[33],[33+20+17],[33+20+17+20+17]]))
Wall01n rrw = STRUCT(Wall01n rr(Wall01n))

Wall10n  = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[4],[-33,158-33]]))
Wall11n  = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[95],[-33,4]]))
Wall12n  = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[95],[5]]))


Wall12n rr = CONS(AA(T([3]))([[33+4+37],[33+4+33+5+36]]))
Wall12n rrw = STRUCT(Wall12n rr(Wall12n ))

Wall14n  = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[95],[-33,-20,-17,-20,-17,-20,-17,-7,7]]))
Wall15n  = INSR(PROD)(AA(QUOTE)([[-4,-152,4],[-95+7+13,13],[-33,158-33]]))

NorthWall = STRUCT([Wall00n,Wall01n rrw,Wall10n ,Wall11n ,Wall12n rrw,Wall14n ,Wall15n ])
NorthWall = T([1])([1])(NorthWall)


# south side wall


Wall00s = INSR(PROD)(AA(QUOTE)([[4],[95],[-33,-4,-30,-5,-30,-25,-17,14]]))
Wall01s = INSR(PROD)(AA(QUOTE)([[4],[95],[-33,-4,-30,-5,-30,25]]))
Wall02s = INSR(PROD)(AA(QUOTE)([[4],[95],[-33,-4,-30,5]]))
Wall03s = INSR(PROD)(AA(QUOTE)([[4],[95],[-33,4]]))
Wall04s = INSR(PROD)(AA(QUOTE)([[4],[2],[-33,158-33]]))
Wall05s = INSR(PROD)(AA(QUOTE)([[4],[-95+4+4,4],[-33-4,158-33-14-17-4]]))
Wall06s = INSR(PROD)(AA(QUOTE)([[4],[-95+4+2+2+20,10],[-33-4,158-33-4-30-2]]))
Wall07s = INSR(PROD)(AA(QUOTE)([[4],[-95+4+2+2+20,20],[-33-4-5-30,158-33-4-30-2-25-17-14]]))
Wall08s = INSR(PROD)(AA(QUOTE)([[4],[95],[-33-4-30,10]]))


SouthWall = STRUCT([Wall00s,Wall01s,Wall02s,Wall03s,Wall04s,Wall05s,Wall06s,Wall07s,Wall08s])

