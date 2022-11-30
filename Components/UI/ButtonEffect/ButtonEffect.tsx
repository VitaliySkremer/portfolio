import styles from "./ButtonEffect.module.scss"
export const ButtonEffect = ({text}: {text: string}) => {
	return (
		<div className={styles.btn__wrapper}>
			<span>{text}</span>
		</div>
	)
}