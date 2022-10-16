import { SyntheticEvent, useState } from "react";

interface CustomSelectProps {
  multiselect: boolean | undefined;
  data: Array<string | number | readonly string[] | undefined>;
  onSelect: (event: SyntheticEvent<HTMLSelectElement, Event>) => void;
}

export default function CustomSelect(props: CustomSelectProps) {
  const { data, multiselect, onSelect } = props;

  return (
    <div className="customSelect">
      <div className="customSelectMain">
        <select onChange={onSelect} className={"customSelectSelect"}>
          {data.map((value, index) => {
             return (
              <option
                className={"customSelectOptions"}
                key={value?.toString().concat(index.toString())}
                value={value}
              >
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
