# exercise 2

# -piece glevel

slice01 = INSR(PROD)(AA(QUOTE)([[20],[-71,20],[4]]))
slice02 = INSR(PROD)(AA(QUOTE)([[-20,112],[-29,62],[4]])) 
slice03 = INSR(PROD)(AA(QUOTE)([[-20,17],[-22,7],[4]])) 
slice04 = INSR(PROD)(AA(QUOTE)([[-132,15],[-54,37],[4]])) 
slice05 = CYLINDER([18.5,4])(12) 
slice06 = CYLINDER([8.5,4])(12) 
slice07 = INSR(PROD)(AA(QUOTE)([[-132,5],[-49,10],[4]]))

slice07c = T([1,2])([28.5,22])(slice06) 
slice08c = T([1,2])([147,72.5])(slice05)

floor0 = STRUCT([slice01,slice02,slice03,slice04,slice07c,slice08c,slice07])

# SLICE 1level

slice10 = INSR(PROD)(AA(QUOTE)([[17],[91],[-4,-33,5]]))
slice11 = INSR(PROD)(AA(QUOTE)([[-17,144],[-87,4],[-4,-33,5]]))
slice12 = INSR(PROD)(AA(QUOTE)([[-17,144],[73],[-4,-33,5]]))
slice13 = INSR(PROD)(AA(QUOTE)([[-17,-70,74],[-73,14],[-4,-33,5]]))
slice14 = INSR(PROD)(AA(QUOTE)([[16],[-72,15],[-4,-33,5]])) #balcone
slice14_transl = T([1,2])([-16,3])(slice14)

floor1 = STRUCT([slice10,slice11,slice12,slice13,slice14_transl])


# SLICE 2 LEVEL
slice20 = INSR(PROD)(AA(QUOTE)([[17],[91],[-4,-33,-5,-33,5]]))
slice21 = INSR(PROD)(AA(QUOTE)([[-17,144],[-87,4],[-4,-33,-5,-33,5]]))
slice22 = INSR(PROD)(AA(QUOTE)([[-17,144],[73],[-4,-33,-5,-33,5]]))
slice23 = INSR(PROD)(AA(QUOTE)([[-17,-70,74],[-73,14],[-4,-33,-5,-33,5]]))

floor2 = STRUCT([slice20,slice21,slice22,slice23])

# -SLICE 3 LEVEL

slice30 = INSR(PROD)(AA(QUOTE)([[83],[95],[-4,-33,-5,-33,-5,-33,5]]))
slice31 = INSR(PROD)(AA(QUOTE)([[-83,77],[-91,4],[-4,-33,-5,-33,-5,-33,5]]))
slice32 = INSR(PROD)(AA(QUOTE)([[-83,77],[77],[-4,-33,-5,-33,-5,-33,5]]))
slice33 = INSR(PROD)(AA(QUOTE)([[-83,-44,33],[-77,14],[-4,-33,-5,-33,-5,-33,5]]))

floor3 = STRUCT([slice30,slice31,slice32,slice33])

# -SLICE ROOF LEVEL

slice0R = INSR(PROD)(AA(QUOTE)([[160],[-72,23],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice1R = INSR(PROD)(AA(QUOTE)([[-72,88],[72],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice2R = INSR(PROD)(AA(QUOTE)([[160],[4],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))
slice3R = INSR(PROD)(AA(QUOTE)([[4],[72],[-4,-33,-5,-33,-5,-33,-5,-33,7]]))

floor4 = STRUCT([slice0R,slice1R,slice2R,slice3R])


terrain = COLOR(BLACK)(T([1,2,3])([-20,-20,-5])(INSR(PROD)(AA(QUOTE)([[205],[135],[5]]))))

