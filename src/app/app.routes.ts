import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegistroFormComponent } from './registro/registro-form/registro-form.component';
import { ListRacesComponent } from './dashboard/list-races/list-races.component';
import { FormRaceComponent } from './dashboard/form-race/form-race.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroFormComponent },
    { 
        path: 'carreras', 
        component: DashboardComponent, 
        children: [
            { path: '', component: ListRacesComponent },
            { path: 'crear', component: FormRaceComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }