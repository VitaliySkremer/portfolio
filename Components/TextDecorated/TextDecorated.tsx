import styles from "./Text.module.css"
import React from "react";

interface ITextDecorated extends React.HtmlHTMLAttributes<HTMLSpanElement>{
	text: string
}

export const TextDecorated = ({text, ...other}:ITextDecorated) => {
	return (
		<span className={styles.text} {...other}>
			{text}
		</span>
	)
}