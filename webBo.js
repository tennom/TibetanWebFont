(function (document) {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  var baseFonts = ['monospace', 'sans-serif', 'serif'];

  //we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  var testString = "mmmmmmmmmmlli";
  // var testString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //we test using 72px font size, we may use any size. I guess larger the better.
  var testSize = '100px';

  var h = document.getElementsByTagName("body")[0];

  // create a SPAN in the document to get the width of the text we use to test
  var s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  var defaultWidth = {};
  var defaultHeight = {};
  for (var index in baseFonts) {
      //get the default width for the three base fonts
      s.style.fontFamily = baseFonts[index];
      h.appendChild(s);
      defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
      defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
      h.removeChild(s);
  }
  isFontAvailable = function(font) {
      var detected = false;
      for (var index in baseFonts) {
          s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
          h.appendChild(s);
          var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
          h.removeChild(s);
          detected = detected || matched;
      }
      return detected;
  }

  var fontBases =[];//this applies the changing factors to assure samilar text configuration across device
  fontBases['Noto Sans Tibetan']={name:'Noto Sans Tibetan',factor:1,lHeight:'normal'};
  fontBases['Kailasa']={name:'Kailasa',factor:1,lHeight:2.13};
  fontBases['Tibetan Machine Uni']={name:'Tibetan Machine Uni',factor:1.28, lHeight:'normal'};
  fontBases['Microsoft Himalaya'] = {name:'Microsoft Himalaya',factor:1.51,lHeight:1.41};
  //this order is the prioriy of these fonts.
  var fonts = ['Noto Sans Tibetan','Kailasa', 'Microsoft Himalaya','Tibetan Machine Uni'];
  for (var i in fonts){
    var iFamily = "'"+fonts[i]+"'";
    if (isFontAvailable(iFamily)){
      var rootEl = document.querySelector(':root');
      rootEl.style.setProperty("--bo-family", iFamily);
      rootEl.style.setProperty("--bo-factor",fontBases[fonts[i]].factor);
      rootEl.style.setProperty("--bo-lHeight", fontBases[fonts[i]].lHeight);
      break;
    }
  }
})(document);
