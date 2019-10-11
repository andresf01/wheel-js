export function findKeyframesRule(rule) {
  debugger
  // gather all stylesheets into an array
  var ss = document.styleSheets;

  // loop through the stylesheets
  for (var i = 0; i < ss.length; ++i) {

    // loop through all the rules
    for (var j = 0; j < ss[i].cssRules.length; ++j) {

      // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
      if ((ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE || ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) && ss[i].cssRules[j].name == rule)
        return ss[i].cssRules[j];
    }
  }

  // rule not found
  return null;
}