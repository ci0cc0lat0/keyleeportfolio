'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import s from "./Slideshow.module.css";

export default function Slideshow() {
  const [emblaRef] = useEmblaCarousel()

  return(
    <div className={s.embla} ref={emblaRef}>
        <div className={s.embla__container}>
            <div className={s.embla__slide}>Slide 1</div>
            <div className={s.embla__slide}>Slide 2</div>
            <div className={s.embla__slide}>Slide 3</div>
        </div>
    </div>
  )

}
