if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var initCursor = new NodeCursor({
    cursor: false,
  });
} else {
  // init plugin
  var initCursor = new NodeCursor({
    cursor: true,
    node: true,
    cursor_velocity: 1,
    node_velocity: 0.35,
    native_cursor: "none",
    element_to_hover: ".nodeHover",
    cursor_class_hover: "disable",
    node_class_hover: "expand",
    hide_mode: true,
    hide_timing: 2000,
  });
}
