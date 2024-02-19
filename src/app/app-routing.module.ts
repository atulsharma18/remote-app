import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrofrontendComponent } from './microfrontend/microfrontend.component';

const routes: Routes = [
  {
    path:"", component:MicrofrontendComponent, pathMatch:"full"
  },
  { path: 'shared', loadChildren: () =>loadRemoteModule({
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    remoteName:'sharedModuleApp',
    exposedModule: './SharedModule'
  }).then((m) => m.SharedModule).catch(err=>console.log(err)
  )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
