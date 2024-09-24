const initState: TInitState = {
	isLoading: false,
};

export const loadingReducer = (state: TInitState = initState, action: ActionsType): TInitState => {
	switch (action.type) {
		case "CHANGE_LOADING":
			return { ...state, isLoading: action.isLoading };

		default:
			return state;
	}
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: "CHANGE_LOADING",
	isLoading,
});

//types
type TInitState = {
	isLoading: boolean;
};

type ActionsType = LoadingActionType;

type LoadingActionType = {
	type: "CHANGE_LOADING";
	isLoading: boolean;
};

export const setLoadingAC = (isLoading: boolean): LoadingActionType => {
	return { type: "CHANGE_LOADING", isLoading };
};
