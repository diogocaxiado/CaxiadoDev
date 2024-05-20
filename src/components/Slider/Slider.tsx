import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useMediaQuery } from '@mui/material';

import useDataContext from '@/hooks/useDataContext';

import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import styles from './Slider.module.css'

export const Slider = () => {
  const {data} = useDataContext();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
 
  return (
    <Swiper 
      slidesPerView={isDesktop ? 2 : 1}
      slidesPerGroup={isDesktop ? 2 : 1}
      spaceBetween={28}
      grabCursor={true}
      pagination={{
        clickable: true,
      }} 
      modules={[Pagination]} 
      style={{overflow: 'hidden'}}
    >
      {data!.project.map((info) => {
        return (
          <SwiperSlide key={info.id} className={styles.slider}>
            <Image
              src={info.image}
              width={580}
              height={285}
              alt="Imagem ilustrativa do projeto"
              className={styles.image}
            />
    
            <div className={styles.info}>
              <h3 className={styles.title}>{info.name}</h3>
              <p className={styles.description}>{info.description}</p>
      
              <div className={styles.bottom}>
                <Link
                  href={info.link}
                  target="_blank"
                  className={styles.button}>Visitar</Link>
              </div>
            </div>
        </SwiperSlide>
        )
      })}
    </Swiper>
  )
}