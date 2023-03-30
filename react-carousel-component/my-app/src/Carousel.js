import { FaChevronLeft, FaChevronRight, FaRegCircle } from "react-icons/fa";
import './Carousel.css'
import { useState, useEffect } from "react";

export default function Carousel({data}) {
  const [index, setIndex] = useState(0)

  function currentIndex(i) {
    setIndex(i)
  }

  function prevIndex() {
    setIndex(((index - 1) + data.length) % data.length)
  }

  function nextIndex() {
    setIndex((index + 1) % data.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextIndex, 3000)
    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <div className='container-div'>
      <div className='flex-div'>
        <FaChevronLeft onClick={prevIndex} className='chevrons'/>
        <Img dataUrl={data[index].url} dataAlt={data[index].alt} />
        <FaChevronRight onClick={nextIndex} className='chevrons' />
      </div>
      <div className='bot-icons'>
        <Circles count={data.length} current={index} onClick={currentIndex} />
      </div>
    </div>
  )
}

function Img({dataUrl, dataAlt}) {
  console.log(dataUrl)
  return (
    <img src={dataUrl} alt={dataAlt}/>
  )
}

function Circle({onClick, backgroundColor}) {
  return (
    <FaRegCircle className='circles' onClick={onClick} style={{backgroundColor}} />
  )
}

function Circles({count, current, onClick}) {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(
      <Circle
        key={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'black' : 'white'}
      />
    )
  }
  return (
    <> {icons} </>
  )
}
