import React, { useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Modal } from "../ui";
import { CarouselOnlyImages } from "./CarouselOnlyImages";
import Parser from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const listCardsTypes = {
  primary: {
    border: "none",
    justifyContent: "start",
    contentImg: "repeat(auto-fit, minmax(20rem, 1fr))",
    imgWidth: "15rem",
    imgHeight: "auto",
  },
  secondary: {
    border: "2px solid #ccc",
    justifyContent: "center",
    contentImg: "repeat(auto-fit, minmax(15rem, 1fr))",
    imgWidth: "8rem",
    imgHeight: "8rem",
  },
};

export const ListCards = ({
  id = "services",
  title,
  titleImage,
  items = [],
  type = "primary",
}) => {
  const listCardsStyle = listCardsTypes[type];
  const [modalVisible, setModalVisible] = useState(false);
  const [requirements, setRequirements] = useState([]);

  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  return (
    <Container id={id} contentImg={listCardsStyle.contentImg}>
      <div className="content-items">
        {titleImage && (
          <img className="imgTitle" src={titleImage} alt="nohay" />
        )}
        {title && <h2 className="title">{title}</h2>}
        <div className="content-img">
          {items.map((item, index) => (
            <ItemCards
              key={index}
              border={listCardsStyle.border}
              justifyContent={listCardsStyle.justifyContent}
              imgWidth={listCardsStyle.imgWidth}
              imgHeight={listCardsStyle.imgHeight}
              descriptionLarge={item.descriptionLarge}
            >
              <a
                href={item.link && item.link}
                target={item.link && "_blank"}
                rel={item.link && "noreferrer"}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="image-bg"
                    onClick={() => {
                      item.descriptionLarge &&
                        setRequirements(item.descriptionLarge);
                      item.descriptionLarge && showModal();
                    }}
                  />
                )}
              </a>
              {item.title && <h3>{item.title}</h3>}
              {item.title2 && <h5>{item.title2}</h5>}
              {item.title3 && <h5>{item.title3}</h5>}
              {item.description && <p>{item.description}</p>}
              {item.descriptionLarge && (
                <span
                  onClick={() => {
                    setRequirements(item.descriptionLarge);
                    showModal();
                  }}
                  style={{ color: "#0076fd", cursor: "pointer" }}
                >
                  ver más
                </span>
              )}
            </ItemCards>
          ))}
        </div>
      </div>

      <Modal
        modalWidth="70% !important "
        title={title}
        visible={modalVisible}
        closable
        onCancel={() => handleCancel()}
      >
        <ul>
          {requirements.map((requirement, index) => (
            <div key={index}>
              {requirement.title && (
                <li>
                  <h4>{requirement.title}</h4>
                  <p>{requirement.description}</p>
                  {requirement.descriptions &&
                    requirement.descriptions.map((descript, index) => (
                      <p key={index}>{Parser(descript)}</p>
                    ))}
                  {requirement.sedes &&
                    requirement.sedes.map((sede, index) => (
                      <li style={{ listStyle: "none", fontSize: "1.1rem" }}>
                        <a href={sede.sede} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={sede.icon} size="sm" />
                          <span style={{ paddingLeft: "0.5rem" }}>Sedes</span>
                        </a>
                      </li>
                    ))}
                  {requirement.detalles &&
                    requirement.detalles.map((detalle, index) => (
                      <li
                        style={{
                          listStyle: "none",
                          fontSize: "1.1rem",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        <a
                          href={detalle.detalle}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={detalle.icon} size="sm" />
                          <span style={{ paddingLeft: "0.5rem" }}>
                            Detalles
                          </span>
                        </a>
                      </li>
                    ))}
                  {requirement.phones &&
                    requirement.phones.map((phone, index) => (
                      <li
                        key={index}
                        style={{
                          listStyle: "none",
                          fontSize: "1.1rem",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        <a href={phone.url} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={phone.icon} size="sm" />
                          <span style={{ paddingLeft: "0.5rem" }}>
                            {phone.text}
                          </span>
                        </a>
                      </li>
                    ))}
                  {requirement.links &&
                    requirement.links.map((link, index) => (
                      <li
                        key={index}
                        style={{
                          listStyle: "none",
                          fontSize: "1.1rem",
                        }}
                      >
                        <a href={link.link} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={link.icon} size="sm" />
                          <span style={{ paddingLeft: "0.5rem" }}>
                            Nuestra Pagina Web
                          </span>
                        </a>
                      </li>
                    ))}
                </li>
              )}
              {/*{requirement.image && <img src={requirement.image} alt="nohay" />}*/}
              {requirement.images && (
                <div style={{ width: "100%", flex: "display" }}>
                  <CarouselOnlyImages images={requirement?.images} />
                </div>
              )}
            </div>
          ))}
        </ul>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 1rem;

  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  .content-items {
    padding: 3rem 0;

    .title {
      font-weight: 800;
      margin: 3rem 0;
      font-size: 2rem;
      text-align: start;

      ${mediaQuery.minTablet} {
        font-size: 3rem;
      }
    }
    .imgTitle {
      width: 40%;
      //margin-left: 6.5rem;
      margin-bottom: 2rem;
    }

    .content-img {
      display: grid;
      grid-template-columns: ${({ contentImg }) => contentImg};
      gap: 2rem;
      text-align: center;
    }

    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const ItemCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) => border};
  border-radius: 2rem;
  margin: 0 1em;

  ${mediaQuery.minTablet} {
    padding: 1rem 1.2rem;
    margin: 0;
    //box-shadow: 15px 0px #bbb;
  }
  img {
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
    object-fit: contain;
  }
  h3 {
    margin-top: 0.8rem;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  h5 {
    line-height: 1.5rem;
  }
  p {
    text-align: justify;
  }
`;
