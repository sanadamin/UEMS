import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ServerService } from '../dashboard/Server.Service';
import { MessageService } from '../dashboard/message.service';
import { Http } from '@angular/http';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor(private messages:MessageService, private http:Http) {

        console.log("as")
        this.messages.getSiteList().subscribe((res)=>{
            console.log(res)
            let responseJSON = res.json()

            for(let site of responseJSON){
                alert(site["sitename"])
            }


        })


       alert(this.messages.myName)
    }

    ngOnInit() {
        
    }
}
