import './App.css';
import Nav from '../navigation/nav'
import Footer from '../footer/footer'
import Carousel from '../carousel/carousel'
import Propuesta from '../propuesta/propuesta'

export default function App() {
  return (
    <>
      <Nav />
      <Carousel/>
      <Propuesta />
      <Footer />
    </>    
  );
}