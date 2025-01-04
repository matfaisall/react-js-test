import React from "react";

import { useAppContext } from "../../context/AppContext";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const SelectInputCity: React.FC = () => {
  const { cities, dataForm, setDataForm } = useAppContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setDataForm({ ...dataForm, city: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Choose an City</InputLabel>
      <Select
        labelId="select-label"
        id="select-city"
        value={dataForm.city}
        onChange={handleChange}
        label="Choose an City Option"
      >
        {cities?.map(option => (
          <MenuItem key={option.city_id} value={option.city_name}>
            {option.city_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputCity;
