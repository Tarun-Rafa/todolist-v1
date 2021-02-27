
exports.getDate = function() {
    const date = new Date();
    const options = {
      weekday: "long",
      day : "numeric",
      month:"long"
    };

    return date.toLocaleDateString("en-US",options);
}

exports.getDay = function(){
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US",options);

}
