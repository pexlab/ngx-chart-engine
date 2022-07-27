import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeModule, FeRootModule } from '@pexlab/ngx-front-engine';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowcaseSidebarComponent } from './pages/showcase/sidebar/showcase-sidebar.component';

@NgModule(
    {
        
        declarations: [
            AppComponent,
            NotFoundComponent,
            IntroductionComponent,
            GettingStartedComponent,
            ShowcaseSidebarComponent
        ],
        
        imports: [
            
            BrowserModule,
            BrowserAnimationsModule,
            
            HttpClientModule,
            AngularSvgIconModule.forRoot(),
            MarkdownModule.forRoot(
                {
                    loader  : HttpClient,
                    sanitize: SecurityContext.NONE
                }
            ),
            ReactiveFormsModule,
            
            FeModule.forRoot(),
            FeRootModule,
            
            AppRoutingModule
        ],
        
        providers: [],
        
        bootstrap: [
            AppComponent
        ]
    }
)

export class AppModule {}
