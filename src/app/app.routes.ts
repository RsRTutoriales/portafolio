import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent, PortafolioComponent, PortafolioItemComponent } from './components/index.paginas';

const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolio-item', component: PortafolioItemComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}