
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./Home.css"
import man from '../../assets/man.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-scroll'


export default function Home() {
  useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <>
      <div id="home">
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">Shivam Kumar</div>
            <div className="line3">
              <span>
                <Typewriter
                  words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "PYTHON FULL STACK DEVELOPER"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30} // faster erase
                  delaySpeed={1000}
                />
              </span>
            </div>
            <button><Link to ="contact">HIRE ME</Link></button>
          </div>
        </div>

        <div className="righthome">
          <img src={man} alt="image" />
        </div>
      </div>
    </>
  )
}


