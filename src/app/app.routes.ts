import { Routes } from '@angular/router';
import { ListComponent } from './compent/list/list.component';
import { AddComponent } from './compent/add/add.component';
import { EditComponent } from './compent/edit/edit.component';
import { RegisterComponent } from './compent/register/register.component';
import { LoginComponent } from './compent/login/login.component';

export const routes: Routes = [
    {path:"list" , component:ListComponent},
    {path:"add" , component:AddComponent},
    {path:"edit/:id" , component:EditComponent},
    {path:"register" , component:RegisterComponent},
    {path:"login" , component:LoginComponent}

];
