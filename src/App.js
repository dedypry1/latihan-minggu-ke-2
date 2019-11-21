import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kursus from './state/State';
import Materi from './props/Props';
import './props/style.css';

function App() {
  return (
    <div className="wrapperapp">
     <Kursus/>
     <p>contoh state</p>
     <hr/>
     
     <Materi img={require('./props/kursus-seo-offline.jpg')} des="belajar seo" harga="120000"/>
     <Materi img={require('./props/kursus.jpg')} des="belajar google adword" harga="400000"/>
     <Materi img={require('./props/kursus-seo-offline.jpg')} des="belajar react js" harga="120000"/>

    </div>
  );
}

export default App;
