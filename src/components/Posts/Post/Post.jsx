import {Link} from 'react-router-dom';
import './Post.scss';
import { Comments } from '../../comments/Comments';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CommentBankOutlined } from '@mui/icons-material';
import { useState } from 'react';
export const Post = ({post}) => {
    const [openComment, setOpenComment] = useState(false)

    
    const Like = false
  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt=""/>
                    <div className="detail">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:'none',color:'inherit'}}>
                            <span className='name'>{post.name}</span>
                        </Link>
                            <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="post"/>
            </div>
            <div className="info">
                <div className="item">
                    {Like ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                    12 Like
                </div>
                <div className="item">
                    <CommentBankOutlined  onClick={() => setOpenComment(!openComment)}/>
                   12 comment
                </div>
                <div className="item">
                    <TextsmsOutlinedIcon />
                     Share
                </div>
                
            </div>
           {openComment && <Comments/>} 
        </div>

    </div>
  )
}
