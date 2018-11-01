import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServerService } from './Server.Service';
import { MessageService } from './message.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    myName = "Sanad Amin"
    totalPower = 0.0;
    powerString = ""
    constructor(private serverService:MessageService) {
        this.serverService.getSiteList().subscribe((res)=>{
            let resJSON = res.json()
            this.myName = resJSON.length
            var i = 0;
            for(let sites of resJSON){
                this.serverService.getSiteReadings(sites.siteid).subscribe((res)=>{
                    let tempJSON = res.json()
                    if(tempJSON[tempJSON.length - 1] != null    ){
                    this.totalPower = Math.round(this.totalPower + parseFloat(tempJSON[tempJSON.length -1].meter2.power.reading)/1000.0)
                    this.powerString = this.totalPower.toString() + " KW"
                    }
                })
                if (i == resJSON.length - 1){
                   
                }
                
            }
           
            


        })
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
