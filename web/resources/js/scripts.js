function getFooterCurrentDate() {
  const constFooterCurrentDate = new Date();
  document.getElementById("footerCurrentDate").innerHTML = constFooterCurrentDate.getFullYear();
};

getFooterCurrentDate();
