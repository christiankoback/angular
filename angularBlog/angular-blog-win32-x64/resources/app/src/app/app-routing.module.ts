import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { InterestspageComponent } from './interestspage/interestspage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
	{ path:'home', component: HomepageComponent},
	{ path:'about', component: AboutpageComponent},
	{ path:'interests', component: InterestspageComponent},
	{ path: '',   redirectTo: '/home', pathMatch: 'full' },
	{ path:'blog', component: BlogComponent},
	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
