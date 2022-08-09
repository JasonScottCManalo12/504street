function constFooterCurrentDate() {
  //const constFooterCurrentDate = new Date();
  //let year = constFooterCurrentDate.getFullYear();
  //document.getElementById("footerCurrentDate").innerHTML = year;
  
  const constFooterCurrentDate = new Date();
  document.getElementById("footerCurrentDate").innerHTML = constFooterCurrentDate.getFullYear();
};

constFooterCurrentDate();
