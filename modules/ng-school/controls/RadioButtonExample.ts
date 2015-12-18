import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {RadioControlValueAccessor} from "./radio/radio_value_accessor";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: "radio-button-app"
})
@View({
    templateUrl: "modules/ng-school/controls/template.html",
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class RadioButtonExample {

    model;

    constructor() {
        this.model = {
            sex: "female",
            checked: true
        };
    }

}
bootstrap(RadioButtonExample);
