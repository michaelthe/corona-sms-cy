import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'sms',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../sms/sms.module').then(m => m.SmsPageModule)
                    }
                ]
            },
            {
                path: 'config',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../settings/settings.module').then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/sms',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/tabs/sms',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
