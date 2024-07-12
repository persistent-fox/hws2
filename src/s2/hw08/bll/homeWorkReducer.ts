import { UserType } from '../HW8';

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number };

const initialState: UserType[] = [
	{ _id: 0, name: 'Кот', age: 3 },
	{ _id: 1, name: 'Александр', age: 66 },
	{ _id: 2, name: 'Harry Potter', age: 12 },
	{ _id: 3, name: 'Виктор', age: 44 },
	{ _id: 4, name: 'Albus Dumbldore', age: 128 },
	{ _id: 5, name: 'Tom Riddle', age: 17 },
];

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => {
	switch (action.type) {
		case 'sort': {
			let newState = [...state];
			return action.payload === 'up'
				? newState.sort((a, b) => a.name.localeCompare(b.name))
				: newState.sort((a, b) => b.name.localeCompare(a.name));
		}
		case 'check': {
			return state.filter(p => p.age > 18);
		}
		default:
			return state;
	}
};
