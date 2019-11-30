import { Component, ViewEncapsulation } from '@angular/core';
import User from '@models/user/user';
import IUser from '@interfaces/user/user';
import { USERS } from '@MOCK/users';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent {
	public title: string = 'angular8-starter-kit';
	public usersList: User[] = [];

	constructor() {
		this.usersList = USERS.map((user: IUser) => new User(user));
	};
};
