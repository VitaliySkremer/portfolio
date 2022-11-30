import Link from "next/link";
import styles from "./Navigate.module.scss"
import {TextDecorated} from "../TextDecorated/TextDecorated";

export const Navigate = () => {
	return (
		<nav>
			<Link className={styles.navigate__item} href="/"><TextDecorated text="Главная" /></Link>
			<Link className={styles.navigate__item} href="/works"><TextDecorated text="Мои работы"/> </Link>
			<Link className={styles.navigate__item} href="/about"><TextDecorated text="Обо мне"/></Link>
		</nav>
	)
}