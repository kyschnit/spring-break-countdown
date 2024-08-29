// Functionality for dragging the countdown timer
window.addEventListener("load", function () {
  // The current position of mouse
  var x = 0;
  var y = 0;

  // Query the element
  const ele = document.getElementById("countdown");

  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;

    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Set the position of element
    if (ele.offsetTop + dy < 0) {
      ele.style.top = `0px`;
    } else if (ele.offsetTop + dy + ele.offsetHeight > window.innerHeight) {
      ele.style.top = `${window.innerHeight - ele.offsetHeight}px`;
    } else {
      ele.style.top = `${ele.offsetTop + dy}px`;
    }

    if (ele.offsetLeft + dx < 0) {
      ele.style.left = `0px`;
    } else if (ele.offsetLeft + dx + ele.offsetWidth > window.innerWidth - 10) {
      ele.style.left = `${window.innerWidth - ele.offsetWidth - 10}px`;
    } else {
      ele.style.left = `${ele.offsetLeft + dx}px`;
    }

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  ele.addEventListener("mousedown", mouseDownHandler);
});
