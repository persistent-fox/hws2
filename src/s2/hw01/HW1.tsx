import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import friend from './friend.jpg';
import avatar from './avatar.jpg';
import s from './HW1.module.css';

export type TMessage = {
	text: string;
	time: string;
};

export type TUser = {
	avatar: string;
	name: string;
};

// нужно создать правильный тип вместо any
export type MessageType = {
	id: number;
	user: TUser;
	message: TMessage;
};

// структуру объекта не менять
export const message0: MessageType = {
	id: 0,
	user: {
		avatar: avatar, // можно менять
		name: 'Margaret Pierce', // можно менять
	},
	message: {
		text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
		time: '22:00', // можно менять
	},
};

export const friendMessage0: MessageType = {
	id: 100,
	user: {
		avatar: friend, // можно менять
		name: 'Tom Riddle', // можно менять
	},
	message: {
		text: 'зеркальное сообщение для тренировки css', // можно менять
		time: '21:58', // можно менять
	},
};

const HW1 = () => {
	return (
		<div className={s.hw1} id={'hw1'}>
			<div className={s2.hwTitle}>Homework #1</div>
			<div className={s2.hw}>
				<div className={s.wrapper}>
					<Message message={message0} />
					<FriendMessage message={friendMessage0} />
				</div>

				<MessageSender M={Message} />
			</div>
		</div>
	);
};

export default HW1;
