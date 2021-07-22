import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
        <p>Hello World, Hello Everyone!</p>
        <p>Have a good day!</p>
        <p>{{ title }}</p>
        <p>My name is {{ name }} !</p>
        <p>{{ loadState }}</p>
        <button type="click" (click)="(loadState = 'finished')">Click</button>
        <input name = "user" type = "text" [(ngModel)] = "loadState" [] >
    `
})

export class ProfileComponent {
    title = 'Greetings!!!';
    name = 'Seandrei';
    loadState = 'loading... ';
}
