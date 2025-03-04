import React from "react";
import AntCarousel from "antd/lib/carousel";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDevice } from "../../hooks";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const CarouselOnlyImages = ({ images }) => {
  const { isMobile } = useDevice();

  return (
    <Container>
      <AntCarousel
        autoplay
        autoplaySpeed={2 * 1000}
        arrows={!isMobile}
        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
      >
        {(images || []).map((image, index) => (
          <ItemImg key={index} src={image} alt="banner" />
        ))}
      </AntCarousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  ${mediaQuery.minDesktop} {
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next {
      top: 46%;
    }

    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      color: white;
      z-index: 99999;
    }

    .slick-arrow.slick-prev {
      left: 3%;
    }

    .slick-arrow.slick-next {
      right: 3%;
    }
  }

  .slick-dots-bottom {
    bottom: 1px;

    ${mediaQuery.minDesktop} {
      bottom: 4rem;
    }
  }

  .slick-dots {
    display: none !important;

    ${mediaQuery.minTablet} {
      display: flex !important;
    }

    li.slick-active {
      width: 48px;
    }

    li {
      width: 48px;

      button {
        width: 48px;
        height: 7px;
      }
    }

    ${mediaQuery.minTablet} {
      li.slick-active {
        width: 34px;
      }

      li {
        width: 34px;

        button {
          width: 34px;
          height: 5px;
        }
      }
    }
  }

  ${mediaQuery.minDesktop} {
    display: inherit;
  }
`;

const ItemImg = styled.img`
  width: 100%;
  //max-height: 100%;
  height: 50em;
  object-fit: cover;
`;
