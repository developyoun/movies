const nowTime = () => {
  const date = new Date();
  const year=date.getFullYear(), 
    month=date.getMonth(), 
    day=date.getDate(), 
    hour=date.getHours(),
    minute=date.getMinutes();
  return `${year}-${month+1}-${day} ${hour}시${minute}분`
}
export default nowTime;
