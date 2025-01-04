import React, { createContext, useContext, useEffect, useState } from "react";

import axiosInstance from "../utils/axiosInstance";

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  auth: {
    email: string;
    password: string;
  };
  setAuth: (auth: { email: string; password: string }) => void;
  cities: any[];
  provinces: any[];
  dataForm: {
    provinces: string;
    city: string;
  };
  setDataForm: (data: { provinces: string; city: string }) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // state
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const [dataForm, setDataForm] = useState({
    provinces: "",
    city: "",
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axiosInstance.get("/province");
        setProvinces(response?.data.rajaongkir.results); // Adjust based on API response
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    const fetchCities = async () => {
      try {
        const response = await axiosInstance.get("/city");
        setCities(response?.data.rajaongkir.results); // Adjust based on API response
      } catch (error) {
        console.log("Error fetching cities:", error);
      }
    };

    fetchProvinces();
    fetchCities();
  }, []);

  return (
    <AppContext.Provider
      value={{ auth, setAuth, provinces, cities, dataForm, setDataForm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
