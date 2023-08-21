/*จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่*/

const filterOutOdds = (...num)=>
{
    return num.filter((e)=>(e%2)===0);
}

console.log(filterOutOdds(2,5,4,8,7));