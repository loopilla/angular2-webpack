import { Component, AfterViewInit, ViewChild, HostListener, ElementRef, Renderer } from '@angular/core';
// import { StyledDirective } from './styled.directive';

@Component({
    selector: 'parralax-hero',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements AfterViewInit {
    @ViewChild('parallaxImage') pImage: ElementRef;
    @ViewChild('parallaxWindow') pWindow: ElementRef;

    constructor(private renderer: Renderer) {}

    @HostListener('window:scroll', ['$event'])
        scroll(event) {
            // console.log('Call from child');
            this.parallax();
        };

    ngAfterViewInit () {
        console.log('ngAfterViewInit()'); // document ready
        if ( document.querySelector('#js-parallax-window') ) {
            this.parallax();
        }
    }

    parallax() {
        if ( this.pWindow.nativeElement ) {
            console.log('Todo parallax()');

            let wRect = this.pWindow.nativeElement.getBoundingClientRect();

            let plxWindowTopToPageTop = wRect.top + document.body.scrollTop;

            let windowTopToPageTop = window.scrollY;

            let plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

            let bRect = this.pImage.nativeElement.getBoundingClientRect();

            let plxBackgroundTopToPageTop = bRect.top;

            let windowInnerHeight = window.innerHeight;
            let plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
            // let plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;

            let plxSpeed = 0.15;
            let top = - (plxWindowTopToWindowTop * plxSpeed) + 'px';

            this.renderer.setElementStyle(this.pImage.nativeElement, 'top', top);
        }
    }

}
