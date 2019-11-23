import IUser from '@interfaces/user/user';

export default class User implements IUser {
	name: string;
	age: number;

	constructor(values: IUser) {
		Object.assign(this, values);
	}
}
