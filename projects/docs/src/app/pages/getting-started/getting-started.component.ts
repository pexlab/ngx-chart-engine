import { Component, OnInit } from '@angular/core';

@Component( {
    template: '<markdown src="assets/docs/getting-started.md"></markdown>'
} )
export class GettingStartedComponent implements OnInit {
    
    constructor() { }
    
    public ngOnInit(): void {
    }
}
