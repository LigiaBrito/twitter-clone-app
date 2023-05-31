import React, {useState} from 'react'
import './TweetBox.css';
import {Avatar,Button} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import  db  from './firebase'; 

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    async function addPost(){
      await addDoc(collection(db,"posts"),{
        displayName: "Nintendo",
        username: "nintendo",
        varified: true,
        text: tweetMessage,
        image:tweetImage,
        avatar:"https://pbs.twimg.com/profile_images/1539293929031421958/cy-uzR2t_400x400.jpg"
      })
    }

    addPost();
    
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://pbs.twimg.com/profile_images/1539293929031421958/cy-uzR2t_400x400.jpg'/>
                <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="O que está acontecendo?" type="text"/>
            </div>
            <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Opcional: Inserir url da imagem" type="text"/>
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox