import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "./bll/store";
import { setLoadingAC } from "./bll/loadingReducer";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s2 from "../../s1-main/App.module.css";
import { Loader } from "./Loader";
import s from "./Loader.module.css";

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector<AppStoreType>(state => state.loading.isLoading);
	console.log(isLoading);

	// useSelector, useDispatch // пишет студент
	// const isLoading = false;

	const setLoading = () => {
		// пишет студент // показать крутилку на 1,5 секунд
		dispatch(setLoadingAC(true));
		setTimeout(() => {
			dispatch(setLoadingAC(false));
		}, 1500);
	};

	return (
		<div className={s.title} id={"hw10"}>
			<div className={s2.hwTitle}>Homework #10</div>
			<div className={s2.divider}></div>

			<div className={`${s2.hw} ${s.wrapper}`}>
				{isLoading ? (
					<div id={"hw10-loading"}>
						<Loader />
					</div>
				) : (
					<SuperButton id={"hw10-button-start-loading"} onClick={setLoading}>
						Set loading...
					</SuperButton>
				)}
			</div>
		</div>
	);
};

export default HW10;
