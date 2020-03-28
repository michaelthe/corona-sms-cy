import {Component, OnInit} from '@angular/core';

import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Platform} from '@ionic/angular';


@Component({
    selector: 'app-settings',
    templateUrl: 'settings-page.component.html',
    styleUrls: ['settings-page.component.scss']
})
export class SettingsPage implements OnInit {
    // id: string;
    // postCode: string;

    constructor(private nativeStorage: NativeStorage, private platform: Platform) {
    }

    get id() {
        return (window as any).id;
    }

    set id(val) {
        (window as any).id = val;
        this.nativeStorage.setItem('id', val);
    }

    get postCode() {
        return (window as any).postCode;
    }

    set postCode(val) {
        (window as any).postCode = val;
        this.nativeStorage.setItem('post-code', val);
    }


    ngOnInit() {
        // this.platform
        //     .ready()
        //     .then(p => {
        //         console.log(p);
        //         this.nativeStorage
        //             .getItem('id')
        //             .then(v => this.id = v);
        //
        //         this.nativeStorage
        //             .getItem('post-code')
        //             .then(v => this.postCode = v);
        //     });
    }


    changeId(e) {
        this.id = e.target.value;

    }

    changePostCode(e) {
        this.postCode = e.target.value;
    }
}
