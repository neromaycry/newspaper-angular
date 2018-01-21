import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

export type ScrollEvent = {
    originalEvent: Event,
    isReachingBottom: boolean,
    isWindowEvent: boolean,
    isScrollUp: boolean
};

declare const window: Window;

@Directive({
    selector: '[detect-scroll]'
})
export class ScrollDirective {
    @Output() public onScroll = new EventEmitter<ScrollEvent>();
    @Input() public bottomOffset: number = 100;
    lastDistance: number = 0;

    constructor() { }

    // handle host scroll
    @HostListener('scroll', ['$event']) public scrolled($event: Event) {
        this.elementScrollEvent($event);
    }

    // handle window scroll
    @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
        this.windowScrollEvent($event);
    }

    protected windowScrollEvent($event: Event) {
        const target = <Document>$event.target;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const isReachingBottom = (target.body.offsetHeight - (window.innerHeight + scrollTop)) < this.bottomOffset;
        const isScrollUp = this.lastDistance > scrollTop;
        const emitValue: ScrollEvent = { isReachingBottom, originalEvent: $event, isWindowEvent: true, isScrollUp };
        this.onScroll.emit(emitValue);
        setTimeout(()=>{
            this.lastDistance = scrollTop;
        },0);
    }

    protected elementScrollEvent($event: Event) {
        const target = <HTMLElement>$event.target;
        const scrollPosition = target.scrollHeight - target.scrollTop;
        const offsetHeight = target.offsetHeight;
        const isReachingBottom = (scrollPosition - offsetHeight) < this.bottomOffset;
        const isScrollUp = this.lastDistance > target.scrollTop;
        const emitValue: ScrollEvent = { isReachingBottom, originalEvent: $event, isWindowEvent: false, isScrollUp };
        this.onScroll.emit(emitValue);
        this.onScroll.emit(emitValue);
        setTimeout(()=>{
            this.lastDistance = target.scrollTop;
        },0);
    }

}
