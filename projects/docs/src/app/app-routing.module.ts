import { NgModule } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowcaseSidebarComponent } from './pages/showcase/sidebar/showcase-sidebar.component';
import { TestComponent } from './pages/showcase/test/test.component';

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                [
                    {
                        path     : 'introduction',
                        component: IntroductionComponent,
                        data     : {
                            metaTitle      : 'Introduction to ChartEngine',
                            metaDescription: 'A empowering interactive charting angular component library as an extension of FrontEngine'
                        }
                    },
                    {
                        path     : 'getting-started',
                        component: GettingStartedComponent,
                        data     : {
                            metaTitle      : 'Getting started with ChartEngine',
                            metaDescription: 'Installing, customizing and making use of ChartEngine'
                        }
                    },
                    {
                        path    : 'showcase',
                        data    : {
                            metaTitle      : 'Showcase of ChartEngine',
                            metaDescription: 'Learn about the components and features of ChartEngine'
                        },
                        children: [
                            {
                                path     : '',
                                component: ShowcaseSidebarComponent,
                                outlet   : 'sidebar'
                            },
                            {
                                path      : '',
                                redirectTo: '/showcase/test',
                                pathMatch : 'full'
                            },
                            {
                                path     : 'test',
                                component: TestComponent
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
export class AppRoutingModule {
    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private metaService: Meta
    ) {
        this.router.events.pipe(
            filter( event => event instanceof NavigationEnd ),
            map( () => this.activatedRoute ),
            map( route => {
                while ( route.firstChild ) {
                    route = route.firstChild;
                }
                return route;
            } ),
            filter( route => route.outlet === 'primary' ),
            mergeMap( route => route.data )
        ).subscribe( ( event ) => {
            console.log( event[ 'metaTitle' ] + ' = ' + event[ 'metaDescription' ] );
            this.titleService.setTitle( event[ 'metaTitle' ] );
            this.metaService.removeTag( 'name="description"' );
            this.metaService.addTag( { name: 'description', content: event[ 'metaDescription' ] }, false );
        } );
    }
}
