import React from "react"
import { IconContext } from "react-icons/lib"
import {
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiDatacamp,
  SiFreecodecamp,
  SiKaggle
} from "react-icons/si"

const Social = () => {
  return (
    <>
      <IconContext.Provider
        value={{ color: `#ef8354`, style: { margin: `5` } }}
      >
        <a href="https://www.linkedin.com/in/nazokat-isamova-30838799/">
          <SiLinkedin />
        </a>

        <a href="https://github.com/nisamova">
          <SiGithub />
        </a>

        <a href="https://twitter.com/NazokatIsamova">
          <SiTwitter />
        </a>
        <a href="https://www.freecodecamp.org/nazokat">
          <SiFreecodecamp />
        </a>
        <a href="https://www.datacamp.com/profile/isamova">
          <SiDatacamp />
        </a>
        <a href="https://www.kaggle.com/isamovanazokat">
          <SiKaggle />
        </a>
      </IconContext.Provider>
    </>
  )
}

export default Social
/* Colors for the Website 
Blue: #4f5d75
Orange: #ef8354
White: #ffffff
Grey: #bfc0c0
Dark/Black: #2d3142
**/
