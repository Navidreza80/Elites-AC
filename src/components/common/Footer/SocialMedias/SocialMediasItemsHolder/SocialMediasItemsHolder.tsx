import React from 'react'
import { InstagramIcon } from '../SocialMediasItems/InstagramIcon';
import { Twitter } from '../SocialMediasItems/Twitter';
import { YoutubeIcon } from '../SocialMediasItems/YoutubeIcon';
import { TelegramIcon } from '../SocialMediasItems/TelegramIcon';

const SocialMediasItemsHolder = () => {
  return (
    <>
      <InstagramIcon />
      <TelegramIcon />
      <YoutubeIcon />
      <Twitter />
    </>
  )
}

export {SocialMediasItemsHolder};