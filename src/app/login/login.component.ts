import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'login-modal',
    templateUrl: './login/login.component.html',
    styleUrls: ['./login/login.component.scss']
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('parallaxImage') modalInner: ElementRef;
    @ViewChild('parallaxWindow') pWindow: ElementRef;
    public checked: boolean;


    constructor() {
        this.checked = false;
    }

    ngAfterViewInit() {

    }
}