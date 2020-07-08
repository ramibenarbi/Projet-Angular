import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-acceuil1',
  templateUrl: './acceuil1.component.html',
  styleUrls: ['./acceuil1.component.css']
})
export class Acceuil1Component implements OnInit {
  datas: any[];
    first = 0;
    second = 0;
    value: any = 0;
  b=0;
  c=0;
  d=0;
  e=0;
  f=0;
  g=0;
  qtmax;
  vgz;
  nbop;
  tv;
  eff;
  target=0;
    constructor(private auth: AuthService) { }
    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels = ['8h->9h', '9h->10h', '10h->11h', '11h->12h', '12h->13h', '13h->14h'];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
      { data: [], label: '' }
    ];
    ngOnInit() {

      this.auth.getDataa().subscribe(x => {
        this.datas = x
        console.log(x)
        this.value = this.datas[this.datas.length - 1]
        console.log(this.value)
        if( this.value.h9 === undefined){
          this.b=0
          this.target=0
          this.vgz=0
        }else{
          this.b=(this.value.h9.ligne5[1] * 100 * this.value.h9.ligne6[1])/60
          this.target=this.value.h9.ligne9[1]
          this.vgz=this.value.h9.ligne6[1]
          this.qtmax=this.value.h9.ligne5[1]
          this.nbop=this.value.h9.ligne7[1]
          this.tv=this.value.h9.ligne8[1]
          this.eff=this.b
         }
         if( this.value.h10 === undefined){
          this.c=0
        }else{
          if(((this.value.h10.ligne5[1]-this.value.h9.ligne5[1]))<0){
            this.c=0
          }else{
            this.c=((this.value.h10.ligne5[1]-this.value.h9.ligne5[1])*100 * this.value.h9.ligne6[1])/60
          }
          this.vgz=this.value.h10.ligne6[1]
          this.qtmax=this.value.h10.ligne5[1]
          this.nbop=this.value.h10.ligne7[1]
          this.tv=this.value.h10.ligne8[1]
          this.eff=(this.c+this.b)/2
          this.target=this.value.h10.ligne9[1]

        }
        if( this.value.h11 === undefined){
          this.d=0

        }else{
          if(((this.value.h11.ligne5[1]-this.value.h10.ligne5[1]))<0){
            this.d=0
          }else{
            this.d=((this.value.h11.ligne5[1]-this.value.h10.ligne5[1]) *100* this.value.h9.ligne6[1])/60
          }
          this.vgz=this.value.h11.ligne6[1]
          this.qtmax=this.value.h11.ligne5[1]
          this.nbop=this.value.h11.ligne7[1]
          this.tv=this.value.h11.ligne8[1]
          this.eff=(this.d+this.c+this.b)/3
          this.target=this.value.h11.ligne9[1]
        }
        if( this.value.h12 === undefined){
          this.e=0

        }else{
          if(((this.value.h12.ligne5[1]-this.value.h11.ligne5[1]))<0){
            this.e=0
          }else{
            this.e=((this.value.h12.ligne5[1]-this.value.h11.ligne5[1])*100 * this.value.h9.ligne6[1])/60
          }
          this.vgz=this.value.h12.ligne6[1]
          this.qtmax=this.value.h12.ligne5[1]
          this.nbop=this.value.h12.ligne7[1]
          this.tv=this.value.h12.ligne8[1]
          this.eff=(this.e+this.d+this.c+this.b)/4
          this.target=this.value.h12.ligne9[1]
        }
        if( this.value.h13 === undefined){
          this.f=0

        }else{
          if(((this.value.h13.ligne5[1]-this.value.h12.ligne5[1]))<0){
            this.f=0
          }else{
            this.f=((this.value.h13.ligne5[1]-this.value.h12.ligne5[1])*100 * this.value.h9.ligne6[1])/60
          }
          this.vgz=this.value.h13.ligne6[1]
          this.qtmax=this.value.h13.ligne5[1]
          this.nbop=this.value.h13.ligne7[1]
          this.tv=this.value.h13.ligne8[1]
          this.eff=(this.f+this.e+this.d+this.c+this.b)/5
          this.target=this.value.h13.ligne9[1]
        }
        if( this.value.h14 === undefined){
          this.g=0

        }else{
          if(((this.value.h14.ligne5[1]-this.value.h13.ligne5[1]))<0){
            this.g=0
          }else{
            this.g=((this.value.h14.ligne5[1]-this.value.h13.ligne5[1]) *100* this.value.h9.ligne6[1])/60
          }
          this.vgz=this.value.h14.ligne6[1]
          this.qtmax=this.value.h14.ligne5[1]
          this.nbop=this.value.h14.ligne7[1]
          this.tv=this.value.h14.ligne8[1]
          this.eff=(this.g+this.f+this.e+this.d+this.c+this.b)/6
          this.target=this.value.h14.ligne9[1]
        }




        this.barChartData = [
          { data: [this.b,this.c,this.d,this.e,this.f,this.g,0], label: 'efficiency by  '+this.value.key },
          {data: [this.target,this.target,this.target,this.target,this.target,this.target], label: 'target'}]
        })
    }
  }
