import Meta from '../Components/Meta/Head'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import {ButtonEffect} from "../Components/UI/ButtonEffect/ButtonEffect";

export default function Main() {
  return (
    <div className={styles.container}>
      <Meta title="Главная" description="описание"/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.title__me}>my Portfolio</span>
        </h1>
        <Link href='/works'>
          <ButtonEffect text="Начать путешествие!"/>
        </Link>
      </main>
    </div>
  )
}
