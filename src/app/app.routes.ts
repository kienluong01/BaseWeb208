import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
      {
            path:'list',
            component:ListComponent
      },
      {
            path:'create',
            component:CreateComponent
      },
      {
            path:'edit',
            component:EditComponent
      },
      {
            path:'login',
            component:LoginComponent
      },
      {
            path:'register',
            component:RegisterComponent
      }
];
