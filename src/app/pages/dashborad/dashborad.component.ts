import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  chart: any;
  lineChart:any;
  NUMBER_CFG = {count: 7, min: 0, max: 10};

  // public pieChartLabels:string[] = ["Unrated", "A & Above", "BBB", "BBB+", "BBB & Above"];
  // public pieChartData:number[] = [21, 39, 10, 14, 16];

  // public pieChartType:string = 'pie';
  // public pieChartOptions:any = {responsive: true ,'backgroundColor': [
  //              "#FF6384",
  //           "#4BC0C0",
  //           "#FFCE56",
  //           "#E7E9ED",
  //           "#36A2EB"
  //           ]}

  // public chartData = [
  //             { data: [330, 600, 260, 700], label: 'Company A' },
  //             { data: [120, 455, 100, 340], label: 'Company B' },
  //             { data: [45, 67, 800, 500], label: 'Company C' }
  //           ];

  //           public chartData1 = [
  //             { data: [330, 600, 260, 700], label: 'Year 2016' },
  //             { data: [120, 455, 100, 340], label: 'Year 2017' },
  //             { data: [45, 67, 800, 500], label: 'Year 2018' }
  //           ];
          
  // public chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor() { }

  ngOnInit() {

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Before 09-10.30 AM','Before 10-10.30 AM','After 11-11.30 AM','After 11.30-12.00 AM','After 12.00 PM'],
        datasets: [
          { 
            data: [48,57,16,2,355],
            backgroundColor: [ "#4386EF","#1659C1","#EDD412","#F75F5F","#9DBFF5"],
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: true,
         position :'left'
        },
        tooltips:{
          enabled:true
        },
        
      }
    });

    this.chart = new Chart('lineChart', {
      
      type: 'line',
      data: {
        labels: ['00:30','03:30','06:30','09:30','13:30'],
        datasets: [{
          label: 'Employee Present',
          data: [0, 1, 0, 0, 1],
          fill: false,
          borderColor: '#4386EF',
        }]
      },
      options: {
        legend: {
          display: true,
         position :'top'
        },
        tooltips:{
          enabled:true
        }
      }
    });
  }
// events on slice click
public onChartClicked(e:any):void {
  console.log(e);
}

// event on pie chart slice hover
public chartHovered(e:any):void {
  console.log(e);
}
}
