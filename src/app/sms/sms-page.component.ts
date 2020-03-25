import {Component, OnInit} from '@angular/core';
import {SMS} from '@ionic-native/sms/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-sms',
    templateUrl: 'sms-page.component.html',
    styleUrls: ['sms-page.component.scss']
})
export class SmsPage implements OnInit {
    id: string;
    message: string;
    postCode: string;

    constructor(
        private sms: SMS,
        private platform: Platform,
        private nativeStorage: NativeStorage,
    ) {
    }

    ngOnInit(): void {
        console.log('loading config')
        this.platform
            .ready()
            .then(() => {
                this.nativeStorage.getItem('id').then(v => this.id = v);
                this.nativeStorage.getItem('post-code').then(v => this.postCode = v);
            });
    }

    send(type) {
        this.sms.send('8998', `${type} ${this.id} ${this.postCode}`);
    }
}
