import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
        <input name = "user" type = "text" [(ngModel)] = "name" >
        <p>Hello World, not from a template!</p>
        <p>Another line</p>
        <p>{{ title }}</p>
        <p>My name is {{ name }}</p>
    `
})

export class AppComponent {
    title = 'my-first-angular-project';
    name = 'Seandrei';
}
