import {Component, OnInit} from '@angular/core';

import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Platform} from '@ionic/angular';


@Component({
    selector: 'app-settings',
    templateUrl: 'settings-page.component.html',
    styleUrls: ['settings-page.component.scss']
})
export class SettingsPage implements OnInit {
    id: string;
    postCode: string;

    constructor(private nativeStorage: NativeStorage, private platform: Platform) {
    }


    ngOnInit() {
        this.platform
            .ready()
            .then(p => {
                console.log(p);
                this.nativeStorage
                    .getItem('id')
                    .then(v => this.id = v);

                this.nativeStorage
                    .getItem('post-code')
                    .then(v => this.postCode = v);
            });
    }


    changeId(e) {
        this.nativeStorage.setItem('id', e.target.value);
    }

    changePostCode(e) {
        this.nativeStorage.setItem('post-code', e.target.value);
    }
}
