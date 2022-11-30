import styles from './Footer.module.scss'
import {TextDecorated} from "../TextDecorated/TextDecorated";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<small>
				<span>Powered by <a href="https://github.com/VitaliySkremer" target="_blank"><TextDecorated text='Vitaliy.Skrem'/> </a></span>
				{new Date().getFullYear()}
			</small>
		</footer>
	)
}