function superbowlWin(record){
const year = record.find(({ result }) => result === "W");
if (year){
    return(year.year); 
} else 
return(year);
}
