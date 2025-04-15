function numberToWords(n) {
    if (n === 0) return "zero";

    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    function chunkToWords(num) {
      let result = "";
      if (num >= 100) {
        result += ones[Math.floor(num / 100)] + " hundred ";
        num %= 100;
      }
      if (num >= 20) {
        result += tens[Math.floor(num / 10)] + " ";
        num %= 10;
      } else if (num >= 10) {
        result += teens[num - 10] + " ";
        num = 0;
      }
      if (num > 0) {
        result += ones[num] + " ";
      }
      return result;
    }

    let result = "";

    if (n >= 1000000) {
      result += chunkToWords(Math.floor(n / 1000000)).trim() + " million ";
      n %= 1000000;
    }

    if (n >= 1000) {
      result += chunkToWords(Math.floor(n / 1000)).trim() + " thousand ";
      n %= 1000;
    }

    result += chunkToWords(n);
    return result.trim();
  }

  function wordsToNumber(str) {
    const numberWords = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
      hundred: 100,
      thousand: 1000,
      million: 1000000,
    };

    const words = str.toLowerCase().split(/[\s-]+/);
    let result = 0;
    let current = 0;

    for (const word of words) {
      if (word === "hundred") {
        current *= 100;
      } else if (word === "thousand" || word === "million") {
        current *= numberWords[word];
        result += current;
        current = 0;
      } else if (numberWords[word] != null) {
        current += numberWords[word];
      }
    }

    return result + current;
  }

  function convertNumber(input) {
    if (typeof input === "number") {
      return numberToWords(input);
    } else if (typeof input === "string") {
      const trimmed = input.trim();
      if (/^\d+$/.test(trimmed)) {
        return numberToWords(parseInt(trimmed, 10));
      } else {
        return wordsToNumber(trimmed);
      }
    } else {
      return "Invalid input";
    }
  }

  // تابعی که وقتی دکمه زده می‌شه اجرا می‌شه
  function handleConvert() {
    const input = document.getElementById("input").value;
    const result = convertNumber(input);
    document.getElementById("result").textContent = result;
  }