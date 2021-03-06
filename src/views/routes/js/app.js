const getParameterByName = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const getBooleanValue = booleanString => {
  switch(booleanString) {
    case true:
    case "true":
    case 1:
    case "on":
    case "yes":
      return true;
    default:
      return false;
  }
}

let successMessage = getParameterByName('success_message');

if (successMessage !== null) {
  successMessage = getBooleanValue(successMessage);
  successMessage ? alert("Your message was sended to backend successfully") : alert("Error!");
  window.location = '/';
}