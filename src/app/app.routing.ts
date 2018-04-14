import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import layouts
import {
    FullLayoutComponent,
    SimpleLayoutComponent
  } from './layouts';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: FullLayoutComponent,
        data: {
            title: 'main'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

