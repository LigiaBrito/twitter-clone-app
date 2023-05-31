import React from 'react'      
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './SidebarOption';
import {Button} from '@mui/material'
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
    <TwitterIcon className='sidebar__twitterIcon'/>

    <SidebarOption active Icon={HomeIcon} text="Página Inicial"/>
    <SidebarOption Icon={SearchIcon} text="Explorar"/>
    <SidebarOption Icon={NotificationsNoneIcon} text="Notificações"/>
    <SidebarOption Icon={MailOutlineIcon} text="Mensagens"/>
    <SidebarOption Icon={BookmarkBorderIcon} text=" Itens salvos"/>
    <SidebarOption Icon={ListAltIcon} text="Listas"/>
    <SidebarOption Icon={PermIdentityIcon} text="Perfil"/>
    <SidebarOption Icon={MoreHorizIcon} text="Mais"/>
    <Button variant='outlined' className='sidebar__tweet' fullWidth>TWEETAR</Button>
    </div>
  )
}

export default Sidebar;
