import React, { useEffect } from "react";
import { useState } from "react";
import InputBox from "../InputBox/index.jsx";
import { indianStatesArray } from "../../utils/helper.js";
import Pills from "../Pills/index.jsx";

const MultiSearch = (props) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   if (searchTerm.length > 2) handleSearch();
  // }, [searchTerm]);

  // const handleSearch = () => {
  //   const new_searchResults = [...indianStatesArray];
  //   new_searchResults.filter((text) => text === searchTerm);
  //   console.log(indianStatesArray);

  //   setSearchResult(new_searchResults);
  // };
  // const [country, setCountry] = useState(props?.data);
  const [options, setOptions] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [correct, setCorrect] = React.useState(false);
  React.useEffect(() => {
    let allOptions = Object.entries(props?.data).flat();

    //shuffle all options
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }
    setOptions(allOptions);
  }, []);

  const handleClick = (e) => {
    const { target } = e;
    const value = target.getAttribute("data-value");

    // country/capital
    // 1st click capital/country then bg-blue
    // 2nd click capital/country then bg-blue
    let newSelection = selectedOptions.concat(value);
    //check right/wrong
    if (newSelection.length === 2) {
      const [first, second] = newSelection;

      if (props?.data[first] === second || props?.data[second] === first) {
        setCorrect((prevState) => !prevState);
        console.log(correct);
        setTimeout(() => {
          let newOptions = [...options];
          newOptions.splice(newOptions.indexOf(first), 1);
          newOptions.splice(newOptions.indexOf(second), 1);
          console.log(newOptions);
          setOptions(newOptions);
          setSelectedOptions([]);
        }, 1000);
      } else {
        setSelectedOptions(newSelection);
        setCorrect(false);
        setTimeout(() => {
          setSelectedOptions([]);
        }, 2500);
      }
    } else {
      setSelectedOptions(newSelection);
    }
    // bg-red for wrong choice
    //reset
  };

  return (
    <div className="flex gap-5">
      {/* <InputBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* Pills */}
      {/* <div className="flex flex-col">
        {searchResult.map((result) => (
          <>
            <Pills state={result} />
          </>
        ))}
      </div>
      input field with suggestion */}

      {options.length === 0 ? (
        <h1>Congratulations</h1>
      ) : (
        options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <>
              <button
                className={`p-5 rounded-md 
              ${
                isSelected
                  ? selectedOptions.length === 2
                    ? correct
                      ? "bg-blue-400"
                      : "bg-red-400"
                    : "bg-blue-400"
                  : ""
              } `}
                key={option}
                onClick={handleClick}
                data-value={option}
              >
                {option}
              </button>
            </>
          );
        })
      )}
    </div>
  );
};

export default MultiSearch;
