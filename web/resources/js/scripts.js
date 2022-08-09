function constFooterCurrentDate() {  
  const constFooterCurrentDate = new Date();
  document.getElementById("footerCurrentDate").innerHTML = constFooterCurrentDate.getFullYear();
};

constFooterCurrentDate();
