import {Component, OnInit} from '@angular/core';
import {SMS} from '@ionic-native/sms/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {AlertController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-sms',
    templateUrl: 'sms-page.component.html',
    styleUrls: ['sms-page.component.scss']
})
export class SmsPage implements OnInit {
    constructor(
        private sms: SMS,
        private platform: Platform,
        private nativeStorage: NativeStorage,
        private alertController: AlertController
    ) {
    }

    get id() {
        return (window as any).id;
    }

    get postCode() {
        return (window as any).postCode;
    }

    ngOnInit(): void {
        console.log('loading config');
    }

    send(type) {
        const message = `${type} ${this.id} ${this.postCode}`;
        this.sms
            .send('8998', message)
            .then(() => {
                return this.alertController.create({
                    header: 'Message Send',
                    subHeader: 'The following message has been sent to 8998',
                    message,
                    buttons: ['OK']
                });
            })
            .then(a => a.present());
    }
}
