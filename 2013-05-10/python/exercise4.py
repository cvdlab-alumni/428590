


#volante
manubrio=COLOR(BROWN)(R([2,3])(PI/2)(TORUS([5,7])([50,50])));


punti_volante1 =  [[0.5,0.8,-0.5],[0.2,0.8,-0.5], [0.2,0.2,-0.5], [0.8,0.2,-0.5],[0.8,0.8,-0.5],[0.5,0.8,-0.5]];

b = BEZIER(S1)(punti_volante1);
out = MAP(b)(domain);
  


#prova cerchio interno piccolo
punti_volante2 = [[0.5,0.8,0],[0.2,0.8,0], [0.2,0.2,0], [0.8,0.2,0],[0.8,0.8,0],[0.5,0.8,0]];
punti_volante3 = [[0.5,0.8,0.5],[0.2,0.8,0.5], [0.2,0.2,0.5], [0.8,0.2,0.5],[0.8,0.8,0.5],[0.5,0.8,0.5]];
c= BEZIER(S1)(punti_volante2);
out2 = MAP(c)(domain);


e= BEZIER(S1)(punti_volante3);
out3 = MAP(e)(domain);

assi_manubrio1 = MAP(CUBICHERMITE(S2)([b,c,[10,0,0],[0,0,0]]))(domain3);

assi_manubrio2 = MAP(CUBICHERMITE(S2)([c,e,[10,0,1],[0,0,0]]))(domain3);
assi_manubrio=STRUCT([assi_manubrio1,assi_manubrio2])

assi_manubrio_specchio=S([1])([-1])(assi_manubrio);
assi_manubrio_specchio_sotto=R([1,3])(3*PI/2)(assi_manubrio);

assi_manubrio_Totale=COLOR(BLACK)(T([1,2,3])([0,-1.7,0])(S([1,2,3])([2.6,2.6,2.6])(STRUCT([assi_manubrio,assi_manubrio_specchio,assi_manubrio_specchio_sotto]))))
#VIEW(assi_manubrio_Totale)


#centro volante

punti_rotazione_CV =  [[0.5,0,0],[0.4,0,0.3], [0.3,0,0.25], [0,0,0.1]];
curva_centro_volante = C(punti_rotazione_CV)

funz_rot_centro_volante = ROTATIONALSURFACE(curva_centro_volante)
meta_centro_volante = MAP(funz_rot_centro_volante)(dd1)
meta_centro_volante2=S([3])([-1])(meta_centro_volante)
centro_volante_Totale=COLOR(GRAY)(R([2,3])(PI/2)(S([1,2,3])([4.5,4.5,4.5])(STRUCT([meta_centro_volante,meta_centro_volante2]))))
Volante_sportivo=STRUCT([centro_volante_Totale,manubrio,assi_manubrio_Totale])

#ganci volante


punti_rotazione_gancio =  [[0.5,0,0],[0.4,0,0.3],[0,0,0.3]];
curva_gancio = C(punti_rotazione_gancio)

funz_rot_gancio = ROTATIONALSURFACE(curva_gancio)
meta_gancio = MAP(funz_rot_gancio)(dd1)
meta_gancio2=S([3])([-1])(meta_gancio)
gancio_Totale=COLOR(BLACK)(T([1,2,3])([-6,0,0])(S([1,2,3])([3,3,3])(STRUCT([meta_gancio,meta_gancio2]))))
gancio_Totale2=COLOR(BLACK)(T([1])(12)(gancio_Totale))
gancio_Totale3=R([1,3])(-PI/2)(gancio_Totale2)

Volante_sportivo=STRUCT([centro_volante_Totale,manubrio,assi_manubrio_Totale,gancio_Totale,gancio_Totale2,gancio_Totale3])
#VIEW(Volante_sportivo)
Volante_sportivo_S=S([1,2,3])([-0.5,-0.5,-0.5])(Volante_sportivo)
Volante_sportivo_ST=T([1,2,3])([14.5,17,6])(R([1,2])(3*PI/2)(Volante_sportivo_S));

Spider_ALFA_ROMEO=STRUCT([scheletro_Spider_scalato_T,ruote_finali,Volante_sportivo_ST]);


#VIEW(STRUCT([scheletro_Spider_scalato_T,ruote_finali,Volante_sportivo_ST]) );