import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import backgroundImage from './assets/img/bg1.jpg';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        id="layout-1"
        title="This is title"
        descr="This is Description!"
        urlBg={backgroundImage}
      />
      <Layout
        id="layout-2"
        title="This is title"
        descr="This is Description!"
        colorBg="#a3b5d8"
      />
      <Layout
        id="layout-3"
        title="This is title"
        descr="This is Description!"
        urlBg={backgroundImage}
      />
      <Footer />
    </>
  )
}

export default App;
