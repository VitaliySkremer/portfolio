import {Navigate} from "../Navigate/Navigate";
import styles from './Header.module.scss'

export default function Header (){
	return (
		<header className={styles.header}>
			<Navigate/>
		</header>
	)
}