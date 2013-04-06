from pyplasm import *

# exercise 1


circle_pillars = CYLINDER([2, 4+33])(24)
squared_pillars = CUBOID([4,4,33])
little_squared_pillars = CUBOID([2,2,33])

# GROUND FLOOR
squared_pillars row = INSR(PROD)(AA(QUOTE)([[-4,-35,4,-35,4,-35,4],[-4,-71,4],[4+33]]))
squared_pillars roww = CONS(AA(T([1,2]))([[0,0],[39,0],[78,0],[117,0],[156,0],[0,75],[156,75]]))
circle_pillars roww = STRUCT(squared_pillars roww(circle_pillars))

pillars0 = STRUCT([squared_pillars row,T([1,2])([2,2])(circle_pillars roww)])

# FIRST fLOOR

squared_pillars1 = INSR(PROD)(AA(QUOTE)([[4,-35,4,-35,4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,33]]))
squared_pillars1_translated = T([1,3])([117,44])(squared_pillars)
squared_pillars1_translated2 = T([1,2,3])([117,75,44])(circle_pillars)
pillars1 = STRUCT([squared_pillars1,squared_pillars1_translated,T([1,2])([2,2])(squared_pillars1_translated2)])
pillars1 = T([3])([-2])(pillars1)

# second floor

squared_pillars2 = INSR(PROD)(AA(QUOTE)([[4,-35,4,-35,-4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,-33,-7,33]]))
squared_pillars2rw = CONS(AA(T([1,2,3]))([[78,75,84],[117,75,84]]))
squared_pillars2rww = STRUCT(squared_pillars2rw(squared_pillars))
pillars2 = STRUCT([squared_pillars2,squared_pillars2rww])
pillars2 = T([3])([-4])(pillars2)


# roof level

squared_pillars3 = INSR(PROD)(AA(QUOTE)([[-4,-35,-4,-35,4,-35,-4,-35,4],[4,-71,4],[-4-33,-7,-33,-7,-33,-7,33]]))
squared_pillars3row = CONS(AA(T([1,2,3]))([[0,75,124],[39,75,124]]))
squared_pillars3roww = STRUCT(squared_pillars3row(little_squared_pillars))
pillars3 = STRUCT([squared_pillars3,T([1,2,3])([117,75,124])(squared_pillars),squared_pillars3roww])
pillars3 = T([3])([-6])(pillars3)
