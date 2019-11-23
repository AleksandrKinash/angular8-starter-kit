import { Component } from '@angular/core';
import User from '@models/user/user';
import IUser from '@interfaces/user/user';

const USERS: IUser[] = [
	{ name: `John`, age: 20 },
	{ name: `Bob`, age: 25 }
];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular8-starter-kit';
	users: User[] = [];

	constructor() {
		this.users = USERS.map((user: IUser) => new User(user));
	}
}
