import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout';
import LinkCard from '../components/LinkCard/LinkCard';

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "30vh auto",
        }}
      >
        <LinkCard to='/spacex' title='SpaceX' />
        <LinkCard to='/history' title='History' /> 
       <LinkCard to='/tester' title='Tester' /> 
      </div>
    </Layout>
  )
}

export default Home;