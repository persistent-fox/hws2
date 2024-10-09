const initState = {
	themeId: 1,
};

type TInitState = {
	themeId: number;
};

export const themeReducer = (state: TInitState = initState, action: TActions): TInitState => {
	switch (action.type) {
		case "SET_THEME_ID":
			return { ...state, themeId: action.id };

		default:
			return state;
	}
};

type TActions = TChangeThemeId;
export type TChangeThemeId = {
	type: "SET_THEME_ID";
	id: number;
};

export const changeThemeId = (id: number): TChangeThemeId => ({ type: "SET_THEME_ID", id });
