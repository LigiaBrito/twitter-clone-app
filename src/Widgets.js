import React from 'react'
import './Widgets.css'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import Search from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input placeholder='Buscar no Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>Assuntos do momento</h2>
        <TwitterTweetEmbed
          tweetId={'1640390724876374017'}
        />
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='Twitch'
        options={{height:400}}
        />
      </div>
    </div>
  )
}

export default Widgets