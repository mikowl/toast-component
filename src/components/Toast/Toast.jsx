import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant = "notice", message }) {
	return (
		<div className={`${styles.toast} ${styles.notice}`}>
			<div className={styles.iconContainer}>
				{variant === "notice" && <Info size={24} />}
				{variant === "warning" && <AlertTriangle size={24} />}
				{variant === "success" && <CheckCircle size={24} />}
				{variant === "error" && <AlertOctagon size={24} />}
			</div>
			<p className={styles.content}>{message}</p>
			<button className={styles.closeButton}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
