import React, { useState } from 'react';
import Button from '../Button';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = useState('');
	const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
	const [toasts, setToasts] = useState([
		{
			id: crypto.randomUUID(),
			message: 'This is a notice toast',
			variant: 'notice',
		},
		{
			id: crypto.randomUUID(),
			message: 'This is a warning toast',
			variant: 'warning',
		},
	]);

	function handleCreateToast(event) {
		event.preventDefault();
		const nextToasts = [
			...toasts,
			{
				id: crypto.randomUUID(),
				message,
				variant,
			},
		];
		setToasts(nextToasts);
		setMessage('');
		setVariant(VARIANT_OPTIONS[0]);
	}

	function handleDismiss(id) {
		const nextToasts = toasts.filter(toast => toast.id !== id);
		setToasts(nextToasts);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

			<form onSubmit={handleCreateToast} className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							value={message}
							onChange={event => setMessage(event.target.value)}
							className={styles.messageInput}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map(variantOption => {
							const id = `variant-${variantOption}`;
							return (
								<label htmlFor={id} key={variantOption}>
									<input
										id={id}
										type="radio"
										name="variant"
										value={variantOption}
										checked={variant === variantOption}
										onChange={e => setVariant(e.target.value)}
									/>
									{variantOption}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
