import {EnumWorks, IWork} from "../../../pages/works";
import styles from './work.module.scss'
import {Modal} from "../../UI/Modal/Modal";
import {useState} from "react";
import SwiperImg from "../../UI/Swiper/SwiperImg";
import {ivcImg} from "../../../Data/DataWorksImg/ivc";
export const Work = ({href, img, name}:IWork) => {
	const [isOpen, setIsOpen] = useState(false)
	const close = () =>{
		setIsOpen(false);
	}

	if(href){
		return (
			<a href={href} target="_blank">
				<img className={styles.work__img} src={img} alt={href}/>
			</a>
		)
	}
	let renderImg;
	switch (name){
		case EnumWorks.ivc: renderImg = ivcImg
		default: renderImg = ivcImg
	}
	return (
		<>
			<button onClick={()=> setIsOpen(true)} className={styles.button}>
				<img className={styles.work__img} src={img} alt={href}/>
			</button>
			<Modal isOpen={isOpen} close={close}>
				<SwiperImg listImg={renderImg}/>
			</Modal>
		</>
	)
}