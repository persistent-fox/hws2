import React, { useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined);
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
	const [show, setShow] = useState<boolean>(false);

	const start = () => {
		// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
		// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
	};

	const stop = () => {
		// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
	};

	const onMouseEnter = () => {
		// пишут студенты // показать дату если наведена мышка
		setShow(true);
	};
	const onMouseLeave = () => {
		// пишут студенты // спрятать дату если мышка не наведена
		setShow(false);
	};

	const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});

	const weekFormatter = new Intl.DateTimeFormat('en', {
		weekday: 'long',
	});

	const dayFormatter = new Intl.DateTimeFormat('en', {
		weekday: 'long',
	});

	const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
		day: '2-digit',
		year: 'numeric',
		month: '2-digit',
	});

	const stringTime = `${timeFormatter.format(date)}` || <br />;
	const stringDate = `${dateFormatter.format(date)}` || <br />;

	const stringDay = `${dayFormatter.format(date)}` || <br />;
	const stringMonth = `${weekFormatter.format(date)}` || <br />;

	return (
		<div className={s.clock}>
			<div id={'hw9-watch'} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<span id={'hw9-day'}>{stringDay}</span>,{' '}
				<span id={'hw9-time'}>
					<strong>{stringTime}</strong>
				</span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={'hw9-month'}>{stringMonth}</span>, <span id={'hw9-date'}>{stringDate}</span>
						</>
					) : (
						<>
							<br />
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={true} // пишут студенты // задизэйблить если таймер запущен
					onClick={start}
				>
					start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={true} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
				>
					stop
				</SuperButton>
			</div>
		</div>
	);
}

export default Clock;
