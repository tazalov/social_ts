import React from "react";
import iconsSprite from "../../assets/images/icon/social-icon-sprite.svg";
import styled, { css } from "styled-components";
import { ContactLinksT } from "../../pages/profile/profileInfo/links/Links";

type Props = {
  iconId: ContactLinksT;
  width?: string;
  height?: string;
  viewBox?: string;
  link: string;
};

export const Social = ({ iconId, width, height, link, viewBox }: Props) => {
  return (
    <Link href={link}>
      <StyledSocial
        width={width || "30px"}
        height={height || "30px"}
        viewBox={viewBox || "0 0 24 24"}
        xmlns="http://www.w3.org/2000/svg"
        link={iconId}
      >
        {iconId === "instagram" && (
          <radialGradient id="gradient" r="150%" cx="30%" cy="107%">
            <stop stopColor="#fff" offset="0" />
            <stop stopColor="#fff" offset="0.05" />
            <stop stopColor="#fff" offset="0.45" />
            <stop stopColor="#fff" offset="0.6" />
            <stop stopColor="#fff" offset="0.9" />
          </radialGradient>
        )}
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
      </StyledSocial>
    </Link>
  );
};

const Link = styled.a``;

type StyledSocialPT = {
  link: ContactLinksT;
};

const StyledSocial = styled.svg<StyledSocialPT>`
  transition: all 0.2s linear;
  ${(props) => {
    switch (props.link) {
      case "github": {
        return css`
          &:hover {
            fill: grey;
          }
        `;
      }
      case "vk": {
        return css`
          &:hover {
            fill: #0077ff;
          }
        `;
      }
      case "facebook": {
        return css`
          &:hover {
            fill: #3b5998;
          }
        `;
      }
      case "instagram": {
        return css`
          fill: url(#gradient);
          stop {
            transition: all 0.2s linear;
          }
          &:hover stop:nth-child(1) {
            stop-color: #fdf497;
          }
          &:hover stop:nth-child(2) {
            stop-color: #fdf497;
          }
          &:hover stop:nth-child(3) {
            stop-color: #fd5949;
          }
          &:hover stop:nth-child(4) {
            stop-color: #d6249f;
          }
          &:hover stop:nth-child(5) {
            stop-color: #285aeb;
          }
        `;
      }
      case "twitter": {
        return css`
          &:hover {
            fill: #00acee;
          }
        `;
      }
      case "website": {
        return css`
          &:hover {
            fill: #3b9869;
          }
        `;
      }
      case "youtube": {
        return css`
          &:hover {
            fill: rgb(204, 23, 23);
          }
        `;
      }
      case "mainLink": {
        return css`
          &:hover {
            fill: #22d97d;
          }
        `;
      }
    }
  }}
`;
