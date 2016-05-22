import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {RadioControlValueAccessor} from "./radio/radio_value_accessor";
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: "radio-button-app",
    templateUrl: "modules/ng-school/controls/template.html",
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class RadioButtonExample {

    model;

    constructor() {
        this.model = {
            sex: "female"
        };
    }

}
bootstrap(RadioButtonExample);
