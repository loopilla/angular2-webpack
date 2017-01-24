import { Component, AfterViewInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
    selector: 'parralax-hero',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements AfterViewInit {
    @HostListener('window:scroll', ['$event'])
        scroll(event) {
            console.log('Call from child');
            this.parallax();
        };

    ngAfterViewInit () {
        console.log('ngAfterViewInit()'); // document ready
        if( document.querySelector("#js-parallax-window") ) {
            this.parallax();
        }        
    }    

    parallax() {
        if( document.querySelector("#js-parallax-window") ) {
            console.log('Todo parallax()');
            // var plxBackground = document.querySelector("#js-parallax-background");
            // var plxWindow = document.querySelector("#js-parallax-window");

            // var plxWindowTopToPageTop = plxWindow.clientTop;
            // var windowTopToPageTop = window.scroll().top;
            // var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

            // var plxBackgroundTopToPageTop = plxBackground.clientTop;
            // var windowInnerHeight = window.innerHeight;
            // var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
            // var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
            // var plxSpeed = 0.35;

            // plxBackground. style.top = ('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
        }
    }

}
