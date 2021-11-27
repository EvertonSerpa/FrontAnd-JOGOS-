import './Slider.css';
import { FaAngleRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Slider(props) {

  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${props.id}`)
      .then(response => {
        if (mounted) {
          setGame(response.data)
        }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <div>
      <img className='image' src={game.image} alt={game.name} />
      <div className='bar'>
        <span className='disponivel'>Já disponível</span>
        <button className='mais'>
          Saiba mais <FaAngleRight />
        </button>
        <div className='classification'>
          <div className='square'>
            {props.classificationNumber}
          </div>
          <span className='class-text'>{props.classificationText}</span>
        </div>
      </div>
    </div>
  )
}