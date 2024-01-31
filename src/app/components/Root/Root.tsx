import { Outlet } from "react-router-dom";

import { Header } from 'app/components/Header';
import { Navigation } from 'app/components/Navigation';
import { Main } from 'app/components/Main';
import { Footer } from 'app/components/Footer';


export const Root = () => (
  <>
    <Header>
      Logo

      <Navigation/>
    </Header>

    <Main>
      <Outlet/>
    </Main>

    <Footer>
      © NetDead
    </Footer>
  </>
);
