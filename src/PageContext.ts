import { createContext } from "react";

type PageContent = {
  page: string;
  setPage: (c: string) => void;
};

const PageContext = createContext<PageContent>({
  page: "login",
  setPage: () => {},
});

export { PageContext };
