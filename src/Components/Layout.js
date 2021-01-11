import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { namedRoutes } from "Routes";
import { useTitle } from "Utils";
import * as Icon from "Icons";
import Button from "./Button";
import { Search } from "Components";

const Layout = ({ header, children, ...props }) => {
  useTitle(header || "");

  /**
   * variables
   */
  const navItems = [
    {
      name: "Profile",
      link: namedRoutes.home.index,
      icon: Icon.Profile,
    },
    {
      name: "My listing",
      link: namedRoutes.listing.index,
      icon: Icon.Listing,
    },
    {
      name: "Saved homes",
      link: namedRoutes.savedHomes.index,
      icon: Icon.SavedHomes,
    },
    {
      name: "Saved search",
      link: namedRoutes.savedSearch.index,
      icon: Icon.SavedSearch,
    },
    {
      name: "Messages",
      link: namedRoutes.messages.index,
      icon: Icon.Messages,
    },
    {
      name: "Notifications",
      link: namedRoutes.notifications.index,
      icon: Icon.Settings,
    },
    {
      name: "Billing",
      link: namedRoutes.billing.index,
      icon: Icon.Billing,
    },
    {
      name: "Analytics",
      link: namedRoutes.analytics.index,
      icon: Icon.Analytics,
    },
    {
      name: "Blog",
      link: namedRoutes.blog.index,
      icon: Icon.Blog,
    },
  ];

  /**
   * state
   */
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <Fragment>
      <TopNav>
        <div className="container d-flex align-items-center">
          <div className="topnav__search">
            <Search />
          </div>
          <div className="topnav__nav-items">
            <Link to="/" className="nav-item">
              Udwell Now
            </Link>
            <Link to="/" className="nav-item">
              Sell a property
            </Link>

            <span
              className="nav-item--menu"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <Icon.Menu color="var(--black)" />
            </span>
          </div>
        </div>
      </TopNav>

      <Body className="container">
        <SideNav active={toggleNav} onClick={() => setToggleNav(false)}>
          <div className="sidenav" onClick={(e) => e.stopPropagation()}>
            <div className="sidenav__profile mb-6">
              <div className="sidenav__profile__avatar">
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
              <p className="sidenav__profile__name">Alex Assenmacher</p>
              <p className="sidenav__profile__profession mb-3">Home Buyer</p>

              <Button className="px-8 mx-auto">Edit profile</Button>
            </div>

            <div className="sidenav__items mb-8">
              {navItems.map((item, key) => (
                <NavLink
                  key={key}
                  to={item.link}
                  className="sidenav__items__item"
                >
                  <span className="name">{item.name}</span>
                  <span className="icon">
                    <item.icon />
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="sidenav__footer">
              <p>Profile link</p>
              <div>
                <span>
                  <a href="/">https://www.udwell.com/p.</a>
                </span>
                <Icon.Copy className="mx-auto" />
              </div>
            </div>
          </div>
        </SideNav>

        <Content>{children}</Content>
      </Body>

      <Footer className="container">
        <div className="footer">
          <div className="footer__items my-lg-auto">
            <p className="black-60-text">
              Counter Delivery, Carters Beach <br />
              PostCentre, Westport
            </p>
          </div>
          <div className="footer__items">
            <p className="header">About</p>
            <a href="/">Company</a>
            <a href="/">Team</a>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
          </div>
          <div className="footer__items">
            <p className="header">Support</p>
            <a href="/">Help Center</a>
            <a href="/">Cancellation Options</a>
            <a href="/">Neighborhood Support</a>
            <a href="/">Trust & Safety</a>
          </div>
          <div className="footer__items">
            <p className="header">Address</p>
            <p className="black-60-text mb-10">
              Counter Delivery, Carters Beach <br />
              PostCentre, Westport
            </p>
            <div className="social-media-icons">
              <span className="icon">
                <Icon.Facebook />
              </span>
              <span className="icon light-green-bg">
                <Icon.Instagram color="#fff" />
              </span>
              <span className="icon">
                <Icon.Twitter />
              </span>
            </div>
          </div>
        </div>
        <div className="others">
          <p>©Udwell, LLC. All rights reserved.</p>
          <span className="dot" />
          <p>
            <a href="/">Terms & Conditions</a>
          </p>
          <span className="dot" />
          <p>
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </Footer>
    </Fragment>
  );
};

/**
 * styles
 */
const TopNav = styled.div`
  height: 80px;
  background-color: var(--white-10);

  display: flex;
  align-items: center;

  .topnav__search {
    display: none !important;
  }
  .topnav__nav-items {
    display: flex;
    margin-left: auto;
    align-items: center;

    .nav-item {
      padding: 16px;
      cursor: pointer;
      color: var(--black);
      text-decoration: none;

      &--menu {
        margin-left: 24px;
      }
    }
  }

  @media (min-width: 992px) {
    .topnav__search {
      display: block !important;
    }
    .topnav__nav-items {
      .nav-item {
        padding: 16px 24px;

        &--menu {
          margin-left: 32px;
        }
      }
    }
  }
`;

const Body = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 992px) {
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SideNav = styled.div`
  left: ${({ active }) => (active ? "0px" : "-100%")};
  background-color: rgba(0, 0, 0, 0.25);
  transition: ease-in-out all 0.15s;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;

  .sidenav {
    background-color: var(--white-10);
    transition: ease-in-out 0.25s all;
    box-shadow: var(--shadow);
    padding: 24px 20px;
    border-radius: 6px;
    overflow-y: auto;
    height: 100%;
    width: 288px;

    .sidenav__profile {
      line-height: 1.6;
      text-align: center;

      &__avatar {
        width: 78px;
        height: 78px;
        position: relative;
        margin: 0px auto 12px auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          object-position: center;
        }
      }

      &__name {
        font-weight: 500;
        font-size: 18px;
      }
    }

    .sidenav__items {
      &__item {
        padding: 12px;
        display: flex;
        align-items: center;
        color: var(--black);
        text-decoration: none;
        justify-content: space-between;
        border-top: solid 1px var(--black-10);

        .name {
          line-height: 1.6;
        }

        &.active {
          .name {
            font-weight: 500;
          }
        }

        &:last-child {
          border-bottom: solid 1px var(--black-10);
        }
      }
    }

    .sidenav__footer {
      p {
        line-height: 1.6;
        font-size: 14px;
      }

      div {
        width: 100%;
        height: 50px;
        display: grid;
        border-radius: 6px;
        align-items: center;
        border: solid 1px var(--black-20);
        grid-template-columns: calc(100% - 53px) 54px;

        span {
          height: 100%;
          display: flex;
          overflow: hidden;
          padding-left: 16px;
          padding-right: 16px;
          border-right: solid 1px var(--black-20);

          a {
            width: 100%;
            margin: auto;
            font-size: 14px;
            color: var(--blue);
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    background-color: transparent;
    grid-column-start: 1;
    grid-column-end: 2;
    position: relative;
    height: auto;
    width: 100%;
    left: auto;

    .sidenav {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  background-color: var(--white-10);
  box-shadow: var(--shadow);
  border-radius: 6px;
  overflow-y: auto;
  padding: 16px;

  @media (min-width: 992px) {
    grid-column-start: 2;
    grid-column-end: 5;
    padding: 30px;
  }
`;

const Footer = styled.div`
  .footer {
    gap: 24px;
    display: grid;

    p,
    a {
      color: var(--black-60);
      line-height: 1.8;
      font-size: 14px;
      text-decoration: none;
      display: block;
    }

    a {
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0px;
      }
    }

    .header {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.6;
      color: var(--black);
      margin-bottom: 1rem;
    }

    .social-media-icons {
      gap: 24px;
      display: grid;
      grid-auto-flow: column;

      .icon {
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 50%;
        box-shadow: var(--shadow-sm);
        background-color: var(--white);

        svg {
          margin: auto;
        }
      }
    }
  }

  .others {
    display: flex;
    padding-top: 48px;
    align-items: center;
    padding-bottom: 48px;
    justify-content: center;

    p {
      font-size: 14px;
      line-height: 1.8;
    }

    span.dot {
      width: 3px;
      height: 3px;
      margin-left: 16px;
      border-radius: 50%;
      margin-right: 16px;
      background-color: var(--black-40);
    }
    a {
      font-size: 14px;
      line-height: 1.8;
      text-decoration: none;
      color: var(--black-80);
    }
  }

  @media (min-width: 768px) {
    .footer {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Layout;
