import React, { useState } from "react";

export default function SearchSection({ searchValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={(e) => {
          searchValue(inputValue);
        }}
      >
        Search
      </button>
    </>
  );
}
