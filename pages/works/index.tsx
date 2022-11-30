import Meta from "../../Components/Meta/Head";
import styles from './works.module.scss'
import {Works} from "../../Components/WorksComponent/Works";

export interface IWork{
	href?: string;
	img: string;
	name?: string
}

export enum EnumWorks{
	ivc='ivc',
}

const worksList:IWork[] = [
	{href:'https://w-wawe.tmweb.ru/', img:'/imgWorks/wawe.jpg', name:'wawe'},
	{href:'https://blanchardskrem.tmweb.ru/', img:'/imgWorks/blanchard.jpg', name:'blanchard'},
	{href:'https://high-pass-skremer.webtm.ru/', img:'/imgWorks/high.jpg', name:'high'},
	{href:'https://pairs.tmweb.ru/', img:'/imgWorks/pairs.jpg', name:'pairs'},
	{img:'/imgWorks/ivc/ivc.jpg', name:'ivc'},
]

export default function works(){
	return (
		<div className={styles.container}>
			<Meta title="Мои работы" description="работы"/>
			<Works worksList={worksList}/>
		</div>
	)
}