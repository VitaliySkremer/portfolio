import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IImg } from '../../../Data/DataWorksImg/ivc';

interface IListImg {
	listImg: IImg[]
}

export default function SwiperImg({listImg}:IListImg){
	return (
		<Swiper
			modules={[Navigation, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
		>
			{listImg.map(item=>
				<SwiperSlide key={item.src}>
					<img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={item.src} alt={item.src}/>
				</SwiperSlide>
			)}
		</Swiper>
	)
}