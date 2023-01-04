import { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

function Carousel({ children }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          // here you can also pass className, or any other button element attribute
          style: {
            alignSelf: 'center',
            background: 'gray',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 50
          },
          children: <KeyboardDoubleArrowRightIcon />
        }}
        backwardBtnProps={{
          // here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'gray',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 50
          },
          children: <KeyboardDoubleArrowLeftIcon />
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 750
          }
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {children}
      </ReactSimplyCarousel>
    </div>
  )
}

export default Carousel
