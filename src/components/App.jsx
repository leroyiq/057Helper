import { BUTTON, DIV, H1 } from './App.styled';
import estate from '../pictures/LogoV2_rounded.png';
import { FaGooglePlay, FaInternetExplorer, FaTelegram } from 'react-icons/fa';

export const App = () => {
  return (
    <>
      <DIV>
        <img src={estate} alt="1" width="100px" />
      </DIV>

      <H1>Твiй помiчник у пошуку нерухомостi.</H1>
      <ul
        style={{
          margin: 40,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <BUTTON>
          <FaInternetExplorer />
          <a href="https://bit.ly/41y53Lj">Наш Сайт</a>
        </BUTTON>
        <BUTTON>
          <FaTelegram />
          <a href="https://bit.ly/43B7DC7">Наш Telegram бот</a>
        </BUTTON>
        <BUTTON>
          <FaGooglePlay />
          <a href="https://bit.ly/43xyj6N">Наш додаток Android</a>
        </BUTTON>
      </ul>
    </>
  );
};