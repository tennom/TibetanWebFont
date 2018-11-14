/**
 * JavaScript code to web consistant Tibetan text rendering.
 * The Detector function is forked from the Github contributed by Lalit Patel,
 * The WebTibetan is created by Tennom in Sept,2018.
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel, Tennom
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/** include this js file somewhere in your html
 * <script type='text/javascript' src='webBo.js'></script>
 * At the very end of your html body add/include this javascript code.
 * Usage: WebTibetan();
 *     this will return the optimal web Tibetan font and setting available on the user's device.
 *     now you can directly assign that to the element object that contains Tibetan text, such as
 *        Obj.style.font=WebTibetan();
 *     that's it, done. The default setting is bigger text for easy reading
 *     you can also do WebTibetan("fit") which will result in a small "good fit" text
 *
 */
function Detector() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    // var testString = "mmmmmmmmmmlli";
    var testString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

    function detect(font) {
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

    this.detect = detect;
};

function WebTibetan(textStyle="fit") {
  var easyReading = { //slightly bigger font, for intensive reading
    himalaya : {
      name:"'Microsoft Himalaya'",
      size:"1.65em/",//the back slash is needed to concatenate strings bellow
      lineH:"1.45em ",//the space is needed to concatenate strings bellow
    },
    noto: {
      name: "'Noto Sans Tibetan'",
      size: "1.1em/",
      lineH: "2.15em ",

    },
    tm: {
      name: "'Tibetan Machine Uni'",
      size: "1.4em/",
      lineH: "1.86em ",
    },
    kailasa: {
      name: "'Kailasa'",
      size: "1.1em/",
      lineH: "2.15em ",

    },
  };
  var goodFit = { //smaller font which fits for less intensive text
    himalaya : {
      name: "'Microsoft Himalaya'",
      size: "1.5em/",
      lineH: "1.43em ",
    },
    noto: {
      name: "'Noto Sans Tibetan'",
      size: "1em/",
      lineH: "2.15em ",
    },
    tm: {
      name: "'Tibetan Machine Uni'",
      size: "1.28em/",
      lineH: "1.66em ",
    },
    kailasa: {
      name: "'Kailasa'",
      size: "1em/",
      lineH: "2.15em ",

    },
  };

  var tector = new Detector();

  var myText = null;
  if (textStyle === "fit"){
    myText = goodFit;
  }else{
    myText = easyReading;
  }

  var webSafe = ", Verdana, sans-serif";

  if (tector.detect("Noto Sans Tibetan")){
    return myText.noto.size +myText.noto.lineH +myText.noto.name +webSafe;
  } else if (tector.detect("Kailasa")) {
    return myText.kailasa.size +myText.kailasa.lineH +myText.kailasa.name +webSafe;
  } else if (tector.detect("Microsoft Himalaya")){
    return myText.himalaya.size +myText.himalaya.lineH +myText.himalaya.name +webSafe;
  } else if (tector.detect("Tibetan Machine Uni")){
    return myText.tm.size +myText.tm.lineH +myText.tm.name +webSafe;
  } else {
    console.log("Seem like you don't have a Tibetan font.");
    return "medium Verdana, sans-serif";
  }

}
