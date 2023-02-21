import React, { useState } from "react";
import Button from "../Button";
import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = useState("");
	const [variant, setVariant] = useState(null);
	const [showToast, setShowToast] = useState(false);

	function handleSubmit(event) {
		console.log("Toast popped!", message, variant);
		event.preventDefault();
		setShowToast(true);
	}
	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{showToast && <Toast message={message} variant={variant} />}

			<div className={styles.controlsWrapper}>
				<form onSubmit={handleSubmit}>
					<div className={styles.row}>
						<label
							htmlFor="message"
							className={styles.label}
							style={{ alignSelf: "baseline" }}
						>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id="message"
								value={message}
								onChange={(event) => setMessage(event.target.value)}
								className={styles.messageInput}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							{VARIANT_OPTIONS.map((variantOption) => {
								return (
									<label
										htmlFor={`variant-${variantOption}`}
										key={variantOption}
									>
										<input
											id={`variant-${variantOption}`}
											type="radio"
											name="variant"
											value={variantOption}
											checked={variant === variantOption}
											onChange={(e) => setVariant(e.target.value)}
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
		</div>
	);
}

export default ToastPlayground;
