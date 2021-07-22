import { Component } from "@angular/core";

@Component({
    selector: 'app-profile',
    template: `
        <p>Hello World, Hello Everyone!</p>
        <p>Have a good day!</p>
        <p>{{ title }}</p>
        <p>My name is {{ name }} !</p>
        <input name = "userInput" type = "text" [(ngModel)] = "loadState"> <br>
        <button type="click" (click)="(loadState = 'Finished!')">Click</button>
        <p>{{ loadState }}</p>
    `
})

export class ProfileComponent {
    title = 'Greetings!!!';
    name = 'Seandrei';
    loadState = 'Loading... ';
}
