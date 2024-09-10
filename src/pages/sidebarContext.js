import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./SideBar";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {

  return (
    <ProSidebarProvider>
      <SidebarContext.Provider>
        <div style={{display:"flex"}}>
          <MyProSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);