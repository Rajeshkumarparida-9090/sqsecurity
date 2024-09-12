// import React, { useState, createContext, useContext } from "react";
// import { ProSidebarProvider } from "react-pro-sidebar";
// import MyProSidebar from "./SideBar";

// const SidebarContext = createContext({});

// export const MyProSidebarProvider = ({ children }) => {

//   return (
//     <ProSidebarProvider>
//       <SidebarContext.Provider>
//         <div style={{display:"flex"}}>
//           <MyProSidebar />
//           {children}
//         </div>
//       </SidebarContext.Provider>
//     </ProSidebarProvider>
//   );
// };

// export const useSidebarContext = () => useContext(SidebarContext);
import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./SideBar";
// import MyProSidebar from "./MyProSidebar";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  const [sidebarImage, setSidebarImage] = useState(undefined);
  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,

          sidebarImage,
          setSidebarImage,

          sidebarRTL,
          setSidebarRTL,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          {/* <MyProSidebar /> */}
          {/* <MyProSidebar /> */}
          <MyProSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
