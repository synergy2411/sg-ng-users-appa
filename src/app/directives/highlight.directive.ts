// ng g d directives/unless
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector : "[app-highlight]"
})

export class HighlightDirective{
    @Input("dynamicColor") dynamicColor :  string;
    // Binding host element property
    @HostBinding("style.backgroundColor") bgColor : string;
    // Binding host element event
    @HostListener("mouseenter") onmouseenter(){
        this.bgColor = this.dynamicColor;
    }
    @HostListener("mouseleave") onmouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elementRef : ElementRef){
        // console.log(this.dynamicColor);     //?
        
        // console.log(this.elementRef.nativeElement)
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}