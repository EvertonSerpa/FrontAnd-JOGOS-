import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <a href='https://www.facebook.com/NintendoBrazil'><FaFacebookSquare /></a>
        <a href='https://www.instagram.com/nintendo_brasil'><FaInstagramSquare /></a>
        <a href='https://twitter.com/NintendoAmerica'><FaTwitterSquare /></a>
        <a href='https://www.youtube.com/nintendo'><FaYoutubeSquare /></a>
      </div>
      <span>© 2021 Nintendo. Os jogos são propriedade de seus respectivos donos.</span>
      <span>Nintendo of America Inc. | A sede está localizada em Redmond, Washington (EUA) | Assistência</span>
    </div>
  )
}