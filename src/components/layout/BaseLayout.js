import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { ButtonsFloating, WrapperContent } from "../ui";
import { Header } from "./Header";
import { useTemplateConfig } from "../../providers";

export const BaseLayout = ({ children, onClickVisibleFormContact }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const { templateConfig } = useTemplateConfig();

  const headerTemplate = templateConfig.header;
  const sectionContact = templateConfig.sectionContact;

  const wspPhone = (sectionContact?.socialsRed || []).find(
    (socialRed) => socialRed.name === "Whatsapp"
  );

  const siracaseButton = (sectionContact?.socialsRed || []).find(
    (social) => social.name === "Siracase"
  );

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        onClickVisibleFormContact={onClickVisibleFormContact}
        menuList={headerTemplate.menuList}
      />
      <WrapperContent>
        <Header
          visibleDrawer={visibleDrawer}
          setVisibleDrawer={setVisibleDrawer}
          headerTemplate={headerTemplate}
        />
        <div className="body">{children}</div>
        <Footer
          headerTemplate={headerTemplate}
          menuList={headerTemplate.menuList}
        />
        {wspPhone && <ButtonsFloating socialRed={wspPhone} />}
        {siracaseButton && (
          <ButtonsFloating
            socialRed={siracaseButton}
            bottom="30%"
            bg="#689F38"
            sizeIcon="1em"
          />
        )}
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
