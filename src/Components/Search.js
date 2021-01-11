import Select, { components } from "react-select";
import * as Icon from "Icons";

const ClearIndicator = () => {
  return (
    <div style={{ padding: "0px 68px 0px 0px" }}>
      <span style={{ fontSize: 16, color: "#767676" }}>Add more</span>
    </div>
  );
};

const DropdownIndicator = ({ ...props }) => {
  return (
    <div
      style={{
        background: "#016450",
        padding: "6px 8px",
        borderRadius: "0px 6px 6px 0px",
      }}
    >
      <components.DropdownIndicator {...props}>
        <Icon.Search />
      </components.DropdownIndicator>
    </div>
  );
};

const styles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#F5F5F5",
    border: "none",
    borderRadius: 6,
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      fontSize: 16,
      lineHeight: 1.6,
    };
  },
};

const Search = ({ children, header, ...props }) => {
  /**
   * options
   */
  const options = [{ value: "Granger, IA", label: "Granger, IA" }];

  return (
    <div style={{ marginLeft: 200 }}>
      <Select
        styles={styles}
        components={{ ClearIndicator, DropdownIndicator }}
        isMulti
        options={options}
        defaultValue={options[0]}
      />
    </div>
  );
};

export default Search;
