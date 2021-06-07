import React from "react";
import { FaUser } from "react-icons/fa";
import { store } from "../../store";
import Button from "../Button";
import {
  ContentWrapper,
  DashboardLayoutWrapper,
  MainLayoutWrapper,
  ProfileAvatar,
  ProfileWrapper,
  SideBarWrapper,
  TopBarWrapper
} from "./styles";

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

const Profile = () => {
  const state = store.getState();
  return <ProfileWrapper>
      <ProfileAvatar >
        <FaUser size={30}/>
      </ProfileAvatar>
        <strong>{state.user?.firstName.toLocaleUpperCase()}</strong>
    </ProfileWrapper>
}

export const DashboardLayout = ({ children }: IProps) => {
  return (
    <DashboardLayoutWrapper>
      <TopBarWrapper>
        <Button color="#61d0d9" rouned >Actualité</Button>
        <Profile/>
      </TopBarWrapper>
      <SideBarWrapper ><div style={{width: '10vh'}}></div></SideBarWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </DashboardLayoutWrapper>
  );
};
