import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { ButtonsFloating, WrapperContent } from "../ui";
import { Header } from "./Header";

export const BaseLayout = ({ children, onClickVisibleFormContact }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />
      <WrapperContent>
        <Header
          visibleDrawer={visibleDrawer}
          setVisibleDrawer={setVisibleDrawer}
        />
        <div className="body">{children}</div>
        <Footer />
        <ButtonsFloating />
      </WrapperContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
`;
