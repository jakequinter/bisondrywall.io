// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";

function Icon(props) {
  var __size = props.size;
  var className = props.className;
  var size = __size !== undefined ? __size : "16";
  return JsxRuntime.jsx("svg", {
              children: JsxRuntime.jsx("use", {
                    height: size,
                    href: "/sprite.svg#" + props.name,
                    width: size
                  }),
              className: className !== undefined ? className : "",
              height: size,
              width: size
            });
}

var make = Icon;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */