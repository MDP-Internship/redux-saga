//import logo from './logo.svg';
//import './App.css';
import Header from './screens/Header';
import Result from './screens/Result';

/**
 * Kendine bir routes klasoru oluşturup sayfalama yapabilirsin 1-2 tane daha
 * Dosyalama kısmında bir kaç sıkıntı var ama onlara sonra bakarız template i görünce biraz daha alışman kolay
 * olur diye düşünüyorum
 * Screens => Pages kullanıyoruz biz
 */

function App() {
  return (
    <div>
      <Header/>
      <Result/>
    </div>
  );
}

export default App;
