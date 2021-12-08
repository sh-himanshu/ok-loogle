import React, { createContext, useContext, useState } from "react";

interface GoogleApi {
  readonly host: string;
  readonly fullUrl: string;
  readonly key: string;
  location:
    | "US"
    | "CA"
    | "IE"
    | "GB"
    | "FR"
    | "DE"
    | "SE"
    | "IN"
    | "JP"
    | "KR"
    | "SG"
    | "AU"
    | "BR";
  agent: "desktop" | "mobile";
}

interface StateContextValue {
  getResults: (url: string) => Promise<void>;
  results: never[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

interface ResultContextProviderProps {
  children: React.ReactNode;
}

interface TextResult {
  title: string;
  discription: string;
  link: string;
}

interface ImageResult {
  image: {
    src: string;
    alt: string;
  };
  link: {
    href: string;
    title: string;
    domain: string;
  };
}

interface SearchResults {
  ts: number;
  device_region?: string;
  device_type: string | null;
}

interface ImageSearch extends SearchResults {
  results: never[];
  image_results: ImageResult[];
  total: null;
  answers: never[];
}

interface TextSearch extends SearchResults {
  results: TextResult[];
  image_results: never[];
  total: number;
  answers: string[];
}

interface IfDetail {
  type: string;
  language: string | null;
  base: string;
  value: string;
}

interface NewsEntry {
  title: string;
  title_detail: IfDetail;
  links: {
    rel: string;
    type: string;
    href: string;
  }[];
  link: string;
  id: string;
  guidislink: boolean;
  published: string;
  published_parsed: number[];
  summary: string;
  summary_detail: IfDetail;
  source: {
    href: string;
    title: string;
  };
  sub_articles: {
    url: string;
    title: string;
    publisher: string;
  }[];
}

interface NewsSearch extends SearchResults {
  feed: unknown;
  entries: NewsEntry[];
}

const googleApi: GoogleApi = {
  host: "google-search3.p.rapidapi.com",
  fullUrl: "https://google-search3.p.rapidapi.com/api/v1",
  key: "442a2125a6mshd4c8feaed497e18p16f3e7jsn12f5aa1d9a25",
  location: "US",
  agent: "desktop",
};

// default value is undefined
const StateContext = createContext<StateContextValue | undefined>(undefined);

const ResultContextProvider = ({ children }: ResultContextProviderProps) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url: string) => {
    setLoading(true);
    try {
      const resp = await fetch(`${googleApi.fullUrl}${url}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": googleApi.host,
          "x-rapidapi-key": googleApi.key,
          "x-proxy-location": googleApi.location,
          "x-user-agent": googleApi.agent,
        },
      });

      const data = await resp.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ResultContextProvider;
