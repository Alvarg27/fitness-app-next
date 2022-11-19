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
  const newArr = [];
  const searchString =
    searchInput.length >= 1 ? normalizeString(searchInput).split(" ") : [];
  const searchWordArr = searchString.filter((word) => word !== "");
  array.map((element) => {
    searchWordArr.map((sw) => {
      let targetWords = element.title;
      targetWords.split(" ").map((ptw) => {
        if (ptw.startsWith(sw) || similarity(ptw, sw) > 0.6) {
          if (newArr.find((p) => p._id === element._id)) {
            return;
          }
          newArr.push(element);
        }
      });
    });
  });

  return newArr;
};

export default searchAlgorithm;
