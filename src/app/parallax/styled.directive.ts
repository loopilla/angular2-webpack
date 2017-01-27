import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[styled]'
})
export class StyledDirective {
    constructor(public el: ElementRef, public renderer: Renderer, public property: string, public value: string) {
        renderer.setElementStyle(el.nativeElement, property, value);
    }

    @HostListener('window:scroll', ['$event'])
        scroll(event) {
            console.log('Call from child');
            this.parallax();
        };

    parallax() {
        if( document.querySelector('#js-parallax-window') ) {
            console.log('Todo parallax()');
            var plxBackground = document.querySelector('#js-parallax-background');
            var plxWindow = document.querySelector('#js-parallax-window');

            var plxWindowTopToPageTop = plxWindow.clientTop;
            var windowTopToPageTop = window.scrollY;
            var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

            var plxBackgroundTopToPageTop = plxBackground.clientTop;
            var windowInnerHeight = window.innerHeight;
            var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
            var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;

            var plxSpeed = 0.35;

            let top = - (plxWindowTopToWindowTop * plxSpeed) + 'px';
            this.setTop(top);

            // plxBackground.elem
            // plxBackground.style('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
        }
    }

    setTop(top: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'top', top);
    }    
}