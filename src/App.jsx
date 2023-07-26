
import React, { useState } from 'react';

function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsPalindrome(isPalindromeString(value));
  };

  const isPalindromeString = (s) => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // remove non-alphanumeric characters and convert to lowercase
    return s === s.split('').reverse().join('');
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {isPalindrome ? (
        <p>{inputValue} is a palindrome!</p>
      ) : (
        <p>{inputValue} is not a palindrome.</p>
      )}
    </div>
  );
}

export default PalindromeChecker;