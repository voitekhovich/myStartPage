import Footer from '@components/Footer';
import Header from '@components/Header';
import Lead from '@components/Lead';
import Elements from '@components/Elements';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app__header app__size'>
        <Header/>
      </div>
      <div className='app__lead app__size'>
        <Lead />
      </div>
      <div className='app__items app__size'>
        <Elements />
      </div>
      <div className='app__footer app__size'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
