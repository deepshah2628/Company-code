import React from 'react'
import web from '../src/images/About.svg'
import Common from './Common'

const About = () => {
    return (
       <>
         <Common name='About Our Website' imgsrc={web} visit='/Service' btname='Our Services' devl='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quam. Ipsum fugit, aliquid a quas expedita rerum. Explicabo, magnam suscipit beatae recusandae in culpa!.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptas, praesentium assumenda magni soluta ducimus nemo impedit consequatur voluptatem cupiditate est iure facilis ex earum! Commodi pariatur odio reprehenderit atque.' />
       </>
    )
}

export default About
