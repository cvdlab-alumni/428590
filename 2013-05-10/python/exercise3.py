
#esce un quasi cerchio
punti =  [[0.5,0.8,0],[0.2,0.8,0], [0.2,0.2,0], [0.8,0.2,0],[0.8,0.8,0],[0.5,0.8,0]];

b = BEZIER(S1)(punti);
out = MAP(b)(domain);
  


#prova cerchio interno piccolo
punti2 = [[0.5,0.8,1],[0.2,0.8,1], [0.2,0.2,1], [0.8,0.2,1],[0.8,0.8,1],[0.5,0.8,1]];
c= BEZIER(S1)(punti2);
out2 = MAP(c)(domain);


troncoCono = MAP(CUBICHERMITE(S2)([b,c,[10,0,0],[0,0,0]]))(domain3);
assiRuota=[R([1,3])(PI/12),troncoCono];
x=STRUCT(NN(24)(assiRuota));
corona_stellata= COLOR(GRAY)(STRUCT([troncoCono,x]));


#ruota
C=BEZIER(S1)
SPF=BEZIER(S2)




domain=GRID([6,6])
punti_rotazione = [ [ 4, 0, 5 ], [ 6, 0, 0.5 ], [ 7, 7, 7 ],[3.1,4.1,5.1]]
c1 = C(punti_rotazione)

s = ROTATIONALSURFACE(c1)
surf1 = MAP(s)(dd1)
surf2 = MAP(s)(dd2)



cerchione =COLOR(WHITE)(OFFSET([0.1,0.2,0.1])(ELLIPSE([1,1])(8)))
cerchione_R=R([2,3])(PI/2)(cerchione)
cerchione_RT=(T(2)(1.5)(cerchione_R))
cerchione_RT2=S([1,2,3])([-0.3,-0.3,-0.3])(cerchione_RT)
cerchione_RT2T=(T(2)(0.9)(cerchione_RT2))
gomma=COLOR(BLACK)(R([2,3])(PI/2)(S([1,2,3])([0.6,0.6,0.7])(surf1)))
gomma_T=T(2)(4)(gomma)

ruota_completa=STRUCT([cerchione_RT, cerchione_RT2T, gomma_T,corona_stellata]);



#altre ruote

ruota_completa2=T([1,2,3])([0,32,0])(ruota_completa)
ruota_completa3=T([1,2,3])([42.5,32,0])(ruota_completa)
ruota_completa4=T([1,2,3])([42.5,0,0])(ruota_completa)

ruote_finali=STRUCT([ruota_completa,ruota_completa2,ruota_completa3,ruota_completa4])

#VIEW(STRUCT([scheletro_Spider_scalato_T,ruote_finali]) );
