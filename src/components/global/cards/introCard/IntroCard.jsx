// import React from 'react'
// import PropTypes from 'prop-types'
// import style from './introCard.module.scss'
// import clock from '../../../../assets/icons/clock.png'
// import calendar from '../../../../assets/icons/calendar.png'
// import img2 from '../../../../assets/images/intro-img1.webp'
// import Button from '../../Button'
// const IntroCard = ({ course }) => {
//   const formatCurrency = useCurrency()
//   const convertDateToReadable = (date) => {
//     let dateSet = new Date(date).toUTCString().split(' ')
//     return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
//   }
//   return (
//     <div className={[style.introCard, `cc-shadow`].join(' ')}>
//       <div className={style.imgContainer}>
//         <img src={img2} alt='img' className='cc-img-fluid' />
//       </div>
//       <div className={style.introCardText}>
//         <h5 className={style.title}>{course?.title}</h5>
//         <p className={style.desc}>{course?.description}</p>
//         <div className={style.timeDate}>
//           <div className={style.time}>
//             <span className={style.icon}>
//               <img src={calendar} alt='calendar' />
//             </span>
//             <span>Starting {convertDateToReadable(course?.startDate)}</span>
//           </div>
//           <div className={style?.date}>
//             <span className={style.icon}>
//               <img src={clock} alt='clock' />
//             </span>
//             <span>{course?.duration} Weeks</span>
//           </div>
//         </div>
//         <div className={style.priceButton}>
//           <h5 className={style.price}>{formatCurrency(course?.fee)}</h5>
//           <Button
//             width={`10`}
//             linkText='View Full Details'
//             linkHref={course?.path}
//             solidBtn
//             navBtn
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
// IntroCard.propTypes = {
//   course: PropTypes.object,
// }
// export default IntroCard
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { selectCoursesExternal } from '../../../../app/api/appSlice'
import calendar from '../../../../assets/icons/calendar.png'
import clock from '../../../../assets/icons/clock.png'
// import { SCALE_ANIMATION } from '../../../../gsap'
// import Gsap from '../../../../hooks/Gsap'
import useCurrency from '../../../../hooks/useCurrency'
import Button from '../../Button'

import style from './introCard.module.scss'

const IntroCard = ({ course }) => {
  const formatCurrency = useCurrency()
  const courses = useSelector(selectCoursesExternal)
  const [duration, setDuration] = useState()
  const [time, setTime] = useState()
  const [fee, setFee] = useState()

  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  const dynamicDetails = useCallback(() => {
    courses.forEach((singleCourse) => {
      if (singleCourse.title === course.course) {
        setDuration(singleCourse.duration)
        setTime(singleCourse.startDate)
        setFee(singleCourse.fee)
      }
    })
  }, [course.course, courses])

  useEffect(() => {
    dynamicDetails()
  }, [dynamicDetails])

  return (
    <div className={[style.introCard, `cc-shadow`].join(' ')}>
      {/* <Gsap animationFuncion={() => SCALE_ANIMATION(`scale`)}> */}
      <div className={style.imgContainer}>
        <img src={course.img} alt='img' className='cc-img-fluid scale' />
      </div>
      {/* </Gsap> */}
      <div className={style.introCardText}>
        <h3 className={`${style.title} tagDetails`}>{course.course}</h3>
        <p className={`${style.desc} tagDetails`}>{course.desc}</p>

        {/* onliine */}
        <section className='my-3 tagDetails'>
          <p className='text-danger fw-semibold tiny-text'>Online</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {`${course.online.date}` ||
                  `starting ${convertDateToReadable(time)}`}
              </span>
            </div>
            <div className={style?.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>
                {course.online.time === `N/A`
                  ? `N/A`
                  : `${course.online.time} Weeks` || `${duration} Weeks`}
              </span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>
                {course.online.price
                  ? formatCurrency(course.online.price)
                  : `N/A` || formatCurrency(fee)}
              </p>
            </div>
          </div>
        </section>
        {/* weekday */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekday</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {`${course.weekday.date}` ||
                  `starting ${convertDateToReadable(time)}`}
              </span>
            </div>
            <div className={style?.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>
                {course.weekday.time === `N/A`
                  ? `N/A`
                  : `${course.weekday.time} Weeks` || `${duration} Weeks`}
              </span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>
                {course.weekday.price
                  ? formatCurrency(course.weekday.price)
                  : `N/A` || formatCurrency(fee)}
              </p>
            </div>
          </div>
        </section>
        {/* weekend */}
        <section className='my-3 tagDetails'>
          <p className=' text-danger fw-semibold tiny-text'>Weekend</p>
          <div className={`${style.timeDate} my-0 gap-4 gap-lg-8`}>
            <div className={style.time}>
              <span className={style.icon}>
                <img src={calendar} alt='calendar' />
              </span>
              <span>
                {`${course.weekend.date}` ||
                  `starting ${convertDateToReadable(time)}`}
              </span>
            </div>
            <div className={style?.date}>
              <span className={style.icon}>
                <img src={clock} alt='clock' />
              </span>
              <span>
                {course.weekend.time === `N/A`
                  ? `N/A`
                  : `${course.weekend.time} Weeks` || `${duration} Weeks`}
              </span>
            </div>
            <div className={style?.date}>
              <p className='mb-0 fw-bold medium-text'>
                {course.weekend.price
                  ? formatCurrency(course.weekend.price)
                  : `N/A` || formatCurrency(fee)}
              </p>
            </div>
          </div>
        </section>
        <div className={`${style.priceButton} justify-content-end tagDetails`}>
          {/* <h5 className={style.price}>
            {formatCurrency(course.price) || formatCurrency(fee)}
          </h5> */}
          <Button
            width={`10`}
            linkText='View Full Details'
            linkHref={course.path}
            solidBtn
            navBtn
          />
        </div>
      </div>
    </div>
  )
}

IntroCard.propTypes = {
  course: PropTypes.object.isRequired,
}

export default IntroCard
