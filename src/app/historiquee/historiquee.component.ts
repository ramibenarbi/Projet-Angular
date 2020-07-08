import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-historiquee',
  templateUrl: './historiquee.component.html',
  styleUrls: ['./historiquee.component.css']
})
export class HistoriqueeComponent implements OnInit {

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
  datas; value; b; c; d; e; f; g;
  qtmax;
  vgz;
  nbop;
  tv;
  eff;
  target;
  ngOnInit() {

  }
date(e){
  this.auth.getDataByDay(e).subscribe(x => {
    console.log(x)
    if (x.length == 0){alert('Date unknown')}
    else{
    this.datas = x
      this.value = this.datas
      console.log(this.value)

      if ( this.value[5] === undefined){
        this.b = 0
        this.target = 0
        this.vgz = 0
        this.qtmax = 0
        this.nbop = 0
        this.tv = 0
        this.eff = 0
      }else{
        this.b=((this.value[5].ligne5[1]) *100* this.value[5].ligne6[1])/60
        this.target = this.value[5].ligne9[1]
        this.vgz = this.value[5].ligne6[1]
        this.qtmax = this.value[5].ligne5[1]
        this.nbop = this.value[5].ligne7[1]
        this.tv = this.value[5].ligne8[1]
        this.eff = this.b

       }
 if ( this.value[0] === undefined){
  this.c=0
}else{
  if(((this.value[0].ligne5[1]-this.value[5].ligne5[1]))<0){
    this.c=0
  }else{
    this.c=((this.value[0].ligne5[1]-this.value[5].ligne5[1]) *100* this.value[5].ligne6[1])/60
  }
  this.vgz=this.value[0].ligne6[1]
  this.qtmax=this.value[0].ligne5[1]
  this.nbop=this.value[0].ligne7[1]
  this.tv=this.value[0].ligne8[1]
  this.eff=(this.c+this.b)/2
  this.target = this.value[0].ligne9[1]

}
      if ( this.value[1] === undefined){
        this.d = 0

      }else{
        if(((this.value[1].ligne5[1]-this.value[0].ligne5[1]))<0){
          this.d=0
        }else{
          this.d=((this.value[1].ligne5[1]-this.value[0].ligne5[1])*100 * this.value[5].ligne6[1])/60
        }
        this.vgz=this.value[1].ligne6[1]
        this.qtmax=this.value[1].ligne5[1]
        this.nbop=this.value[1].ligne7[1]
        this.tv=this.value[1].ligne8[1]
        this.eff=(this.d+this.c+this.b)/3
        this.target = this.value[0].ligne9[1]

      }
      if ( this.value[2] === undefined){
        this.e = 0

      }else{
        if(((this.value[2].ligne5[1]-this.value[1].ligne5[1]))<0){
          this.e=0
        }else{
          this.e=((this.value[2].ligne5[1]-this.value[1].ligne5[1]) *100* this.value[5].ligne6[1])/60
        }
        this.vgz=this.value[2].ligne6[1]
        this.qtmax=this.value[2].ligne5[1]
        this.nbop=this.value[2].ligne7[1]
        this.tv=this.value[2].ligne8[1]
        this.target = this.value[0].ligne9[1]
        this.eff=(this.e+this.d+this.c+this.b)/4
      }
      if ( this.value[3] === undefined){
        this.f = 0

      }else{
        if(((this.value[3].ligne5[1]-this.value[2].ligne5[1]))<0){
          this.f=0
        }else{
          this.f=((this.value[3].ligne5[1]-this.value[2].ligne5[1])*100 * this.value[5].ligne6[1])/60
        }
        this.vgz=this.value[3].ligne6[1]
        this.qtmax=this.value[3].ligne5[1]
        this.nbop=this.value[3].ligne7[1]
        this.tv=this.value[3].ligne8[1]
        this.eff=(this.f+this.e+this.d+this.c+this.b)/5
        this.target = this.value[0].ligne9[1]

      }
      if ( this.value[4] === undefined){
        this.g = 0

      }else{
        if(((this.value[4].ligne5[1]-this.value[3].ligne5[1]))<0){
          this.g=0
        }else{
          this.g=((this.value[4].ligne5[1]-this.value[3].ligne5[1]) *100* this.value[5].ligne6[1])/60
        }
        this.vgz=this.value[4].ligne6[1]
        this.qtmax=this.value[4].ligne5[1]
        this.nbop=this.value[4].ligne7[1]
        this.tv=this.value[4].ligne8[1]
        this.eff=(this.g+this.f+this.e+this.d+this.c+this.b)/6
        this.target = this.value[4].ligne9[1]

      }

      this.barChartData = [
        { data: [this.b, this.c, this.d, this.e, this.f, this.g,0], label: 'efficiency'},
          {data: [ this.target, this.target, this.target, this.target, this.target, this.target], label: 'target'}]
      }})
    }

}
