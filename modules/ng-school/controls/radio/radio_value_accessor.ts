import {Directive, Renderer, ElementRef, Self, forwardRef, Provider} from 'angular2/core';

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';

const RADIO_VALUE_ACCESSOR = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => RadioControlValueAccessor), multi: true}));

/**
 * The accessor for writing a value and listening to changes on a radio input element.
 *
 *  ### Example
 *  ```
 *  <input type="radio" ngModel="radioModel">
 *  ```
 */
@Directive({
    selector:
        'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
    host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
    bindings: [RADIO_VALUE_ACCESSOR]
})
export class RadioControlValueAccessor implements ControlValueAccessor {
    onChange = (_) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

    writeValue(value: any): void {
        this._renderer.setElementProperty(this._elementRef, 'checked', value == this._elementRef.nativeElement.value);
    }
    registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
    registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
}
