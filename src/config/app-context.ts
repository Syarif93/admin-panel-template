import { createContext } from 'react';

export type Sidebar = "hide" | "show" | "minimize"

type AppContextType = {
  sidebar: Sidebar
  setSidebar: (sidebar: Sidebar) => void
}

const AppContext = createContext<AppContextType>({
  sidebar: "show",
  setSidebar: (show: Sidebar) => {}
});

export default AppContext