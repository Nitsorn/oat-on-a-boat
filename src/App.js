import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>logo</div>
        <div>Some links</div>
      </header>
      <div className='App-body'>
        <div className='App-Content'>
          <div className='Definition'>
            <h1>👋 Hello! My name is Oat.</h1>
            <p>[ yes, like oatmeal. Not my real name but everyone calls me Oat ]</p>
            <p>
              Thanks for visiting my website! I am a frontend engineer from Thailand 🇹🇭 living in Toronto, Canada 🇨🇦
            </p>
            <p>I enjoy dancing, drawing and finding good deals on Facebook marketplace 🕵️</p>
            <p>I'm also interested in self-development, Buddhism and staying active 💪</p>
          </div>

        </div>
        <img className='profile-pic' src='https://firebasestorage.googleapis.com/v0/b/website-1057b.appspot.com/o/profile.jpg?alt=media&token=d955ead2-36e1-4a14-b522-0bf49d5bb6d0' alt='profile photo'></img>
      </div>

    </div >
  );
}

export default App;
