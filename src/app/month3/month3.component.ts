import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { stringify } from '@angular/core/src/render3/util';
@Component({
  selector: 'app-month3',
  templateUrl: './month3.component.html',
  styleUrls: ['./month3.component.css']
})
export class Month3Component implements OnInit {

  datas;
datas2:Array<any>=[];
keys:Array<string> =[];
month:string;
year:string;
b=0;
c=0;
d=0;
e=0;
f=0;
g=0;
h=0;
i=0;
j=0;
k=0;
l=0;
m=0;
xx=0;
n=0;
o=0;
p=0;
aa=0;
bb=0;
cc=0;
dd=0;
ee=0;
ff=0;
gg=0;
hh=0;
ii=0;
jj=0;
kk=0;
ll=0;
mm=0;
nn=0;
oo=0;
constructor(private authService:AuthService) {}
    public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true }
    public barChartLabels = ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: '' }
  ];

  ngOnInit() {



    this.authService.getData().subscribe(x => {

      this.datas = x;

  })

  }
chart(){
  let aux:Array<any> = [];
  this.b=0;
  this.c=0;
  this.d=0;
  this.e=0;
  this.f=0;
  this.g=0;
  this.h=0;
  this.i=0;
  this.j=0;
  this.k=0;
  this.l=0;
  this.m=0;
  this.xx=0;
  this.n=0;
  this.o=0;
  this.p=0;
  this.aa=0;
  this.bb=0;
  this.cc=0;
  this.dd=0;
  this.ee=0;
  this.ff=0;
  this.gg=0;
  this.hh=0;
  this.ii=0;
  this.jj=0;
  this.kk=0;
  this.ll=0;
  this.mm=0;
  this.nn=0;
  this.oo=0;
  this.datas2=[];
  this.keys = [];
  console.log(this.datas)
  for( let i=0;i<this.datas.length;i++){
    this.keys.push(this.datas[i].key)
  }
console.log(this.keys);
this.keys = this.keys.filter(k => k.slice(5,7) === this.month );
aux =  this.keys.filter(k => k.slice(0,4) === this.year.toString() );
console.log(this.year.toString() );
for(let i=0;i<this.datas.length;i++){
  for(let j = 0 ;j< aux.length;j++){
    if(this.datas[i].key === aux[j]){
      this.datas2.push(this.datas[i]);
    }
  }


}
console.log(this.datas2[3]);
if( this.datas2[0] === undefined){
  this.b=0

}else{
  this.b= (this.datas2[0].h14.ligne5[1] *100* this.datas2[0].h14.ligne6[1])/360
 }
 if( this.datas2[1]=== undefined){
  this.c=0

}else{
  this.c= (this.datas2[1].h14.ligne5[1] *100* this.datas2[1].h14.ligne6[1])/360
 }
 if( this.datas2[2]=== undefined){
  this.d=0

}else{
  this.d=(this.datas2[2].h14.ligne5[1] *100* this.datas2[2].h14.ligne6[1])/360
 }
 if( this.datas2[3]=== undefined){
  this.e=0

}else{
  this.e=(this.datas2[3].h14.ligne5[1] *100* this.datas2[3].h14.ligne6[1])/360
 }
 if( this.datas2[4]=== undefined){
  this.f=0

}else{
  this.f=(this.datas2[4].h14.ligne5[1] *100* this.datas2[4].h14.ligne6[1])/360
 }
 if( this.datas2[5] === undefined){
  this.g=0

}else{
  this.g=(this.datas2[5].h14.ligne5[1] *100* this.datas2[5].h14.ligne6[1])/360
}

if( this.datas2[6] === undefined){
    this.h=0

}else{
    this.h=(this.datas2[6].h14.ligne5[1] *100* this.datas2[6].h14.ligne6[1])/360 }
if( this.datas2[7]=== undefined){
    this.i=0

}else{
this.i=(this.datas2[7].h14.ligne5[1] *100* this.datas2[7].h14.ligne6[1])/360 }
if( this.datas2[8] === undefined){
  this.j=0

}else{
this.j=(this.datas2[8].h14.ligne5[1] *100* this.datas2[8].h14.ligne6[1])/360
}
if( this.datas2[9]=== undefined){
  this.k=0

}else{
  this.k=(this.datas2[9].h14.ligne5[1] *100* this.datas2[9].h14.ligne6[1])/360
 }
 if( this.datas2[10]=== undefined){
  this.l=0

}else{
  this.l=(this.datas2[10].h14.ligne5[1] *100* this.datas2[10].h14.ligne6[1])/360
 }
 if( this.datas2[11] === undefined){
  this.m=0

}else{
  this.m=(this.datas2[11].h14.ligne5[1] *100* this.datas2[11].h14.ligne6[1])/360
 }
 if( this.datas2[12] === undefined){
  this.xx=0

}else{
  this.xx=(this.datas2[12].h14.ligne5[1] *100* this.datas2[12].h14.ligne6[1])/360
 }
 if( this.datas2[13] === undefined){
  this.n=0

}else{
  this.n=(this.datas2[13].h14.ligne5[1] *100* this.datas2[13].h14.ligne6[1])/360
 }
 if( this.datas2[14] === undefined){
  this.o=0

}else{
  this.o=(this.datas2[14].h14.ligne5[1] *100* this.datas2[14].h14.ligne6[1])/360
 }
 if( this.datas2[15] === undefined){
  this.p=0

}else{
  this.p=(this.datas2[15].h14.ligne5[1] *100* this.datas2[15].h14.ligne6[1])/360
 }
 if( this.datas2[16] === undefined){
  this.aa=0

}else{
  this.aa=(this.datas2[16].h14.ligne5[1] *100* this.datas2[16].h14.ligne6[1])/360
 }
 if( this.datas2[17]=== undefined){
  this.bb=0

}else{
  this.bb=(this.datas2[17].h14.ligne5[1] *100* this.datas2[17].h14.ligne6[1])/360
 }
 if( this.datas2[18]=== undefined){
  this.cc=0

}else{
  this.cc=(this.datas2[18].h14.ligne5[1] *100* this.datas2[18].h14.ligne6[1])/360
 }
 if( this.datas2[19]=== undefined){
  this.dd=0

}else{
  this.dd=(this.datas2[19].h14.ligne5[1] *100* this.datas2[19].h14.ligne6[1])/360
 }
 if( this.datas2[20] === undefined){
  this.ee=0

}else{
  this.ee=(this.datas2[20].h14.ligne5[1] *100* this.datas2[20].h14.ligne6[1])/360
 }
 if( this.datas2[21]=== undefined){
  this.ff=0

}else{
  this.ff=(this.datas2[21].h14.ligne5[1] *100* this.datas2[21].h14.ligne6[1])/360
 }
 if( this.datas2[22]=== undefined){
  this.gg=0

}else{
  this.gg=(this.datas2[22].h14.ligne5[1] *100* this.datas2[22].h14.ligne6[1])/360
 }
 if( this.datas2[23] === undefined){
  this.hh=0

}else{
  this.hh=(this.datas2[23].h14.ligne5[1] *100* this.datas2[23].h14.ligne6[1])/360
 }
 if( this.datas2[24] === undefined){
  this.ii=0

}else{
  this.ii=(this.datas2[24].h14.ligne5[1] *100* this.datas2[24].h14.ligne6[1])/360
 }
 if( this.datas2[25]=== undefined){
  this.jj=0

}else{
  this.jj=(this.datas2[25].h14.ligne5[1] *100* this.datas2[25].h14.ligne6[1])/360
 }
 if( this.datas2[26]=== undefined){
  this.kk=0

}else{
  this.kk=(this.datas2[26].h14.ligne5[1] *100* this.datas2[26].h14.ligne6[1])/360
 }
 if( this.datas2[27] === undefined){
  this.ll=0

}else{
  this.ll=(this.datas2[27].h14.ligne5[1] *100* this.datas2[27].h14.ligne6[1])/360
 }
 if( this.datas2[28]=== undefined){
  this.mm=0

}else{
  this.mm=(this.datas2[28].h14.ligne5[1] *100* this.datas2[28].h14.ligne6[1])/360
 }
 if( this.datas2[29]=== undefined){
  this.nn=0

}else{
  this.nn=(this.datas2[29].h14.ligne5[1] *100* this.datas2[29].h14.ligne6[1])/360
 }
 if( this.datas2[30] === undefined){
  this.oo=0

}else{
  this.oo=(this.datas2[30].h14.ligne5[1] *100* this.datas2[30].h14.ligne6[1])/360
 }
console.log(this.datas2);
this.barChartData = [
  { data: [this.b,this.c,this.d,this.e,this.f,this.g,this.h,this.i,this.j,this.k,this.l,this.m,this.xx,this.n,this.o,this.p,this.aa,this.bb,this.cc,this.dd,this.ee,this.ff,this.gg,this.hh,this.ii,this.jj,this.kk,this.ll,this.mm,this.nn,this.oo,0], label: 'efficiency by  '+this.month },]
}
}

