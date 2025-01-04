import React from "react";
import { useAppContext } from "../../context/AppContext";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const SelectInputProvinces: React.FC = () => {
  const { provinces, dataForm, setDataForm } = useAppContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setDataForm({ ...dataForm, provinces: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Choose an Province</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={dataForm.provinces}
        onChange={handleChange}
        label="Choose an Province Option"
      >
        {provinces?.map(option => (
          <MenuItem key={option.province_id} value={option.province}>
            {option.province}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputProvinces;
