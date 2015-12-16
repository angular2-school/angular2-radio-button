import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector:"radio-button-app"
})
@View({
    templateUrl:"modules/ng-school/controls/template.html",
    directives:[FORM_DIRECTIVES]
})
export class RadioButtonExample{

    radioModelMale;
    radioModelFemale;

    constructor(){
        this.radioModelMale = "selected";
    }


}
bootstrap(RadioButtonExample);
