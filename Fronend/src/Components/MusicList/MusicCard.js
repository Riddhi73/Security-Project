import React from 'react'
import c1 from '../../img/3.jpg'
import c2 from '../../img/5.jpg'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './CardStyle.css'



export default function MusicCard() {
  return (
    <>
    <div className='d-flex  p-0 bg-light shadow-lg rounded-3 col-md-4 cardM'>
        <div className='w-140'>
            <img src={c1} className="rounded-start p-0 m-0 w-100 h-100" alt="card image"/>
        </div>
        <div className=' p-3  w-75 text-start'>
          <h5 className='text-start'>Rema, Selena Gomez - Calm Down (Lyrics)</h5>
          {/* album */}
          <p className='text-danger my-1'><QueueMusicIcon className='me-2'/>Calm Down</p>
          <div className=''>
            {/* artist */}
            <p className='my-2'><VerifiedIcon className='me-2 text-primary'/>Selena Gomez</p>

            {/* popularity / views */}
            <p className='fw-bold py-0 my-0'>Views 12 M</p>

          </div>
          <div className=''>
          {/* <p className='ms-auto text-warning py-0 my-0'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></p> */}
          <button className='btn-danger btn text-light my-2 py-0 px-4'> <a className='text-decoration-none text-light ' href="https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP" target="_blank">Play</a> </button>
          
          </div>
        </div>
    </div>
      
    </>
  )
}
