function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

const normalizeString = (str) => {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
};

const searchAlgorithm = (searchInput, array) => {
  if (searchInput.length < 1) {
    return [];
  }
  let newArr = [];

  let searchWordArr = [];
  if (searchInput.length >= 1) {
    // create array from words
    searchWordArr = normalizeString(searchInput)
      .split(" ")
      .filter((word) => word !== "");
  }

  array.forEach((element) => {
    const matchingWords = [];
    const targetWordsArr = normalizeString(element.name)
      .split(" ")
      .filter((word) => word !== "");

    searchWordArr.forEach((searchWord, si) => {
      targetWordsArr.forEach((targetWord, ti) => {
        const indexMatch = si === ti;
        if (targetWord.startsWith(searchWord)) {
          matchingWords.push({
            word: targetWord,
            similarity: searchWord.length / targetWord.length,
            indexMatch: indexMatch === true ? 1 : 0,
          });
          return;
        }
        const wordsSimilarity = similarity(targetWord, searchWord);
        if (wordsSimilarity > 0.7) {
          matchingWords.push({
            word: targetWord,
            similarity: wordsSimilarity,
            indexMatch: indexMatch === true ? 1 : 0,
          });
          return;
        }
      });
    });

    if (
      matchingWords.length < 1 ||
      searchWordArr.length < 1 ||
      targetWordsArr.length < 1
    ) {
      return;
    }

    const wordCoincidence =
      matchingWords.reduce((partialSum, a) => partialSum + a.similarity, 0) /
      searchWordArr.length;

    const lengthCoincidence = searchWordArr.length / targetWordsArr.length / 2;

    const indexCoincidence =
      matchingWords.reduce((partialSum, a) => partialSum + a.indexMatch, 0) /
      searchWordArr.length /
      2;

    if (newArr.find((el) => el._id === element._id)) {
      return;
    }

    newArr.push({
      ...element,
      wordCoincidence,
      lengthCoincidence,
      indexCoincidence,
    });
  });

  newArr = newArr.sort(
    (a, b) =>
      parseFloat(b.lengthCoincidence + b.indexCoincidence + b.wordCoincidence) -
      parseFloat(a.lengthCoincidence + a.indexCoincidence + a.wordCoincidence)
  );

  return newArr;
};

export default searchAlgorithm;
