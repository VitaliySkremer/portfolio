import { IWork } from '../../pages/works'
import styles from './Works.module.scss'
import {Work} from "./Work/Work";

interface IWorksProps {
	worksList: IWork[]
}

export const Works = ({worksList}: IWorksProps) => {
	return (
		<ul className={styles.works__list}>
			{worksList.map(item=>
				<li className={styles.works__list_item} key={item.img}>
					<Work href={item.href} img={item.img}/>
				</li>
			)}
		</ul>
	)
}