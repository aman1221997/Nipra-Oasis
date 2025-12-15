import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { WaterComponent } from './service/water/water.component';
import { PizzaComponent } from './service/pizza/pizza.component';
import { GasComponent } from './service/gas/gas.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: `home`,
  component: HomeComponent
},
{
  path: `about-us`,
  component: AboutUsComponent
},
{
  path: `contact-us`,
  component: ContactUsComponent
},
{
  path: `gallery`,
  component: GalleryComponent
},
{
  path: `faq`,
  component: FaqComponent
},
{
  path: `service/water`,
  component: WaterComponent
},
{
  path: `service/pizza`,
  component: PizzaComponent
},
{
  path: `service/gas`,
  component: GasComponent
},
{
  path: `privacy-policy`,
  component: PrivacyPolicyComponent
},
{
  path: `terms-of-service`,
  component: TermsOfServiceComponent
},
{
  path: `refund-policy`,
  component: RefundPolicyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
