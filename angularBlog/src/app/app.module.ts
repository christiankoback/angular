import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,/* FormGroupDirective,*/ ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
//import {ErrorStateMatcher} from '@angular/material';
//import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagemenuComponent } from './pagemenu/pagemenu.component';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { InterestspageComponent } from './interestspage/interestspage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageModule } from './homepage/homepage.module';
import { AboutpageModule } from './aboutpage/aboutpage.module';
import { InterestspageModule } from './interestspage/interestspage.module';
import { PagefooterComponent } from './pagefooter/pagefooter.component';
import { BlogComponent } from './blog/blog.component';
import { SignupModalComponent } from './pagemenu/signup-modal/signup-modal.component';
import { LoginModalComponent } from './pagemenu/login-modal/login-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BlogCommentsComponent } from './blog/blog-comments/blog-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PagemenuComponent,
    HomepageComponent,
    AboutpageComponent,
    InterestspageComponent,
		PageNotFoundComponent,
		PagefooterComponent,
		BlogComponent,
		SignupModalComponent,
		LoginModalComponent,
		BlogCommentsComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
    AppRoutingModule,
		FormsModule,
		HomepageModule,
		AboutpageModule,
		InterestspageModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatDialogModule,
		MatInputModule,
		MatOptionModule,
		MatSelectModule,
		MatIconModule  /*,
		FormGroupDirective,
		ErrorStateMatcher*/
  ],
  providers: [],
  bootstrap: [AppComponent],
	entryComponents:[
		SignupModalComponent,
		LoginModalComponent
	]
})


export class AppModule { }
