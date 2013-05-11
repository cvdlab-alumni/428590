from pyplasm import *
import scipy
from scipy import *
from pyplasm import *

# exercise 1

domain = INTERVALS(1)(40);
domain2 = PROD([INTERVALS(1)(40), INTERVALS(1)(1)]);
domain3= PROD([INTERVALS(1)(40),domain2]);


def genKnots2(controls):
	n = len(controls) + 3
	a = []
	a.append(0)
	a.append(0)
	a.append(0)
	i = 3
	while i <= (n-4):
		a.append(i-2)
		i = i +1 
	a.append(n-5)
	a.append(n-5)
	a.append(n-5)
	return a;


def DOMAIN2D(domains1D):
	def aux(q):
		a = q[0]
		b = q[1]
		c = q[2]
		d = q[3]
		return [ [ a, b, d ], [ d, b, c ] ]
	dd = PROD([ domains1D[0], domains1D[1] ])
	complex = UKPOL(dd)
	points = complex[0]
	cells = CAT(AA(aux)(complex[1]))
	return MKPOL([ points, cells, None ])

ld = INTERVALS(1)(40)
rd = INTERVALS(2 * PI)(32)

dd1 = DOMAIN2D([ ld, rd ])
dd2 = PROD([ ld, rd ])




#lato
puntiControllo = [[0,2.4,0],[2,0,0],[3.5,1,0],[5,2.2,0],[6.5,1,0],[7.5,0,0],[17,0,0],[18,1,0],[19.5,2,0],[21,1,0],[22,0.2,0],[24,0.6,0],[24.5,1.4,0],[25.1,2.3,0],[24.5,3,0],[24,3.5,0],[23.9,4.7,0],[22,4.8,0],[16.5,4.9,0],[8,5.3,0],[2.5,4.2,0],[2,3.6,0],[0.5,3,0],[0,2.4,0]]
d=genKnots2(puntiControllo)
curva = NUBSPLINE(2)(d)(puntiControllo)
curva_R=R([2,3])(PI/2)(curva)
curva_R_T=T([2,3])([6,-2.5])(curva_R)


#retro
puntiControllo_retro= [[6,5,0],[12,5,0],[12,2,0],[10.5,1,0],[1.5,1,0],[0,2,0],[0,5,0],[6,5,0]];

d3=genKnots2(puntiControllo_retro)
curva3 = NUBSPLINE(2)(d3)(puntiControllo_retro)
curva3_R=R([2,3])(PI/2)(curva3)
curva3_R2=R([1,2])(PI/2)(curva3_R)
curva3_R2_T=T([1,3])([12.5,-2.5])(curva3_R2)

#alto
puntiControllo_alto=  [[25,6,0],[24.9,1,0],[24.7,0.3,0],[12.5,0,0],[5,0.3,0],[0.5,2,0],[0,6,0],[0.5,10,0],[5,11.7,0],[12.5,12,0],[24.7,11.7,0],[24.9,11,0],[25,6,0]];

d4=genKnots2(puntiControllo_alto)
curva4 = NUBSPLINE(2)(d4)(puntiControllo_alto)



scheletro_Spider=STRUCT([curva_R_T,curva3_R2_T,curva4])
scheletro_Spider_scalato=S([1,2,3])([3,3,3])(scheletro_Spider);
scheletro_Spider_scalato_T=T([1,2,3])([-15,-1.5,6])(scheletro_Spider_scalato)
#corona ruota !
