





function Point2D (x,y){

this.x=x;
this.y=y;
}



function Edge (x,y){

this.estremo1=x;
this.estremo2=y;
}

function Triangle(x,y,z){

this.edge1=x;
this.edge2=y;
this.edge3=z;
}

function PerimTri (x){

return x.edge1+x.edge2+x.edge3;
}
