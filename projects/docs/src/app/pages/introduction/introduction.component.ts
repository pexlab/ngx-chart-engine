import { Component, OnInit } from '@angular/core';

@Component( {
    template: '<markdown src="assets/docs/introduction.md"></markdown>'
} )
export class IntroductionComponent implements OnInit {
    
    constructor() { }
    
    public ngOnInit(): void {
    }
}
