var d, s="Today's date is: ";
d=new Date();
s+=d.getDate()+"/";
s+=(d.getMonth()+1)+"/";
s+=d.getFullYear();
document.write(s);
