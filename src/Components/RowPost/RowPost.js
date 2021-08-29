import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios';
import { API_KEY,imageUrl} from '../../constants/constants';
function RowPost() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })

  }, [])

  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
      {
        movie.map(obj=>(
          <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="" />
      ))
      }
        
      </div>
    </div>
  )
}

export default RowPost