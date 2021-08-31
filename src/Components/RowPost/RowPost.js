import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios';
import { API_KEY, imageUrl} from '../../constants/constants';

function RowPost(props) {

  const [movie, setMovie] = useState([]);
  const [ytId, setYtId] = useState([]);

  useEffect(() => {
    
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const movieClick = (id)=>{

    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respons=>{
      
      if(respons.data.results.lenght !== 0){
          setYtId(respons.data.results[0])
      }else{
        console.log('Array Empty')
      }

    })

  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {
        movie.map((obj,index)=>(
          <img onClick={()=>movieClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
      ))
      }
        
      </div>
     { ytId && <Youtube videoId={ytId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost
