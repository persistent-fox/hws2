import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
	const [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined);

	const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())));
	const [show, setShow] = useState<boolean>(false);

	const start = () => {
		const idInt = setInterval(() => {
			setDate(new Date(restoreState("hw9-date", Date.now())));
		}, 1000);
		setTimerId(idInt);
	};

	const stop = () => {
		setTimerId(undefined);
		clearInterval(timerId);
	};

	const onMouseEnter = () => {
		setShow(true);
	};
	const onMouseLeave = () => {
		setShow(false);
	};

	const dateFormatter = new Intl.DateTimeFormat("ru", {
		day: "2-digit",
		year: "numeric",
		month: "2-digit",
	});

	const timeFormatter = new Intl.DateTimeFormat("ru", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	const monthFormatter = new Intl.DateTimeFormat("en", {
		month: "long",
	});

	const dayFormatter = new Intl.DateTimeFormat("en", {
		weekday: "long",
	});

	const stringTime = `${timeFormatter.format(date)}` || <br />;
	const stringDate = `${dateFormatter.format(date)}` || <br />;

	const stringDay = `${dayFormatter.format(date)}` || <br />;
	const stringMonth = `${monthFormatter.format(date)}` || <br />;

	return (
		<div className={s.clock}>
			<div id={"hw9-watch"} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<span id={"hw9-day"}>{stringDay}</span>,{" "}
				<span id={"hw9-time"}>
					<strong>{stringTime}</strong>
				</span>
			</div>

			<div id={"hw9-more"}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={"hw9-month"}>{stringMonth}</span>, <span id={"hw9-date"}>{stringDate}</span>
						</>
					) : (
						<>
							<br />
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton id={"hw9-button-start"} disabled={!!timerId} onClick={start}>
					start
				</SuperButton>
				<SuperButton id={"hw9-button-stop"} disabled={!timerId} onClick={stop}>
					stop
				</SuperButton>
			</div>
		</div>
	);
}

export default Clock;
