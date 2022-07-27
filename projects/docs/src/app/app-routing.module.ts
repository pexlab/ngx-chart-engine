import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowcaseSidebarComponent } from './pages/showcase/sidebar/showcase-sidebar.component';

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                [
                    {
                        path     : 'introduction',
                        component: IntroductionComponent
                    },
                    {
                        path     : 'getting-started',
                        component: GettingStartedComponent
                    },
                    {
                        path    : 'showcase',
                        children: [
                            {
                                path     : '',
                                component: ShowcaseSidebarComponent,
                                outlet   : 'sidebar'
                            },
                            {
                                path      : '',
                                redirectTo: '/showcase/line-chart',
                                pathMatch : 'full'
                            }
                        ]
                    },
                    {
                        path     : '404',
                        component: NotFoundComponent
                    },
                    {
                        path      : '**',
                        redirectTo: '/introduction'
                    }
                ]
            )
        ],
        exports: [ RouterModule ]
    }
)
export class AppRoutingModule {}
