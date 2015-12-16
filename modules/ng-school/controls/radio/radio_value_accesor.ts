import {Renderer, Directive, ElementRef, Self} from 'angular2/core';
import {DefaultValueAccessor, NgControl} from 'angular2/common';
import {DOM} from 'angular2/platform/common_dom';

@Directive({
    selector: 'input[type=radio][ng-model]',
})
export class RadioControlValueAccessor extends DefaultValueAccessor {
    constructor(private cd: NgControl, private renderer: Renderer, private elementRef: ElementRef) {
        super(cd, renderer, elementRef);
    }

    writeValue(value: any) {
        if (DOM.getAttribute(this.elementRef.nativeElement, 'value') == value) {
            DOM.setProperty(this.renderer, this.elementRef, 'checked', value);
        }
    }
}