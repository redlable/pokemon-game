import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout />
      <Layout />
      <Layout />
      <Footer />
    </>
  )
}

export default App;
