import React, { useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { Modal } from "../ui";

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

export const ListAgreements = ({
  key,
  title,
  agreements = [],
  type = "primary",
}) => {
  const listCardsStyle = listCardsTypes[type];
  const [modalVisible, setModalVisible] = useState(false);
  const [moreInformation, setMoreInformation] = useState({});

  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Container key={key}>
      <div className="content-items">
        {title && <h2 className="title">{title}</h2>}
        <div className="content-img">
          {agreements?.map((agreement, index) => (
            <AgreementCard
              key={index}
              border={listCardsStyle.border}
              justifyContent={listCardsStyle.justifyContent}
              imgWidth={listCardsStyle.imgWidth}
              imgHeight={listCardsStyle.imgHeight}
            >
              {agreement.logoPhoto && (
                <img
                  src={agreement?.logoPhoto.url}
                  alt={agreement.title}
                  className="image-bg"
                  onClick={() => {
                    setMoreInformation(agreement);
                    showModal();
                  }}
                />
              )}

              {agreement.title && <h3>{agreement.title}</h3>}

              <span
                onClick={() => {
                  setMoreInformation(agreement);
                  showModal();
                }}
                style={{ color: "#0076fd", cursor: "pointer" }}
              >
                Ver más
              </span>
            </AgreementCard>
          ))}
        </div>
      </div>

      <Modal
        modalWidth="70% !important "
        title={moreInformation.title}
        visible={modalVisible}
        closable
        onCancel={() => {
          setMoreInformation({});
          handleCancel();
        }}
      >
        {moreInformation.title && (
          <div>
            {moreInformation?.educationalInstitutionBenefits?.map((benefit) => (
              <div>
                <p>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: benefit?.training,
                    }}
                  />
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: benefit?.description,
                  }}
                />
              </div>
            ))}

            {moreInformation?.companyBenefits && (
              <div
                dangerouslySetInnerHTML={{
                  __html: moreInformation?.companyBenefits,
                }}
              />
            )}

            {moreInformation.contact?.phones && (
              <div>
                <h3>Telefonos:</h3>
                <ul>
                  {moreInformation.contact?.phones.map((phone, index) => (
                    <li
                      key={index}
                      style={{
                        listStyle: "none",
                        fontSize: "1.1rem",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      <a
                        href={`tel:51${phone}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span style={{ paddingLeft: "0.5rem" }}>{phone}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {moreInformation?.contact?.emails && (
              <div>
                <h3>Correos:</h3>
                <ul>
                  {moreInformation?.contact?.emails.map((email, index) => (
                    <li
                      key={index}
                      style={{
                        listStyle: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span style={{ paddingLeft: "0.5rem" }}>{email}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
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

    .content-img {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .image-bg {
      cursor: pointer;
    }

    .button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const AgreementCard = styled.div`
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
