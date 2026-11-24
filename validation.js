const text=(v,min,max)=>typeof v==='string'&&v.trim().length>=min&&v.trim().length<=max;
const email=v=>text(v,3,254)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const brief=b=>!!b&&text(b.subject,2,120)&&Number.isInteger(b.days)&&b.days>=1&&b.days<=30&&Number.isInteger(b.hours)&&b.hours>=1&&b.hours<=12;
module.exports={text,email,brief};
