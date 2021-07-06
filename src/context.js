import React, { useState, useContext } from 'react';
import App from './App';

const AppContext = React.createContext()
const AppProvider = ({children}) =>{
    const [isSidebarOpen,setIsSideBarOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const sidebarOpen = ()=>{
        setIsSideBarOpen(true);
    }
    const sidebarClose = ()=>{
        setIsSideBarOpen(false);
    }
    const modalOpen = ()=>{
        setIsModalOpen(true);
    }
    const modalClose = ()=>{
        setIsModalOpen(false);
    }
    return <AppContext.Provider value={{
        isSidebarOpen,
        isModalOpen,
        sidebarOpen,
        sidebarClose,
        modalOpen,
        modalClose
    }}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};
