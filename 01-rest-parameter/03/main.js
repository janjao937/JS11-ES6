/*จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)*/


//box["tester"]
const mergeObjects = (...objs) =>
{
    let result = {};

    let allE = [];
    //separate Object To Array
    allE = Object.assign(objs);

    for(let i = 0;i<allE.length;i++)
    {   
        let tempKeys = Object.getOwnPropertyNames(allE[i]);
        tempKeys.forEach((keyStr)=>{
            if(result[keyStr]==null)
            {
                result[keyStr] = allE[i][keyStr];
            }
        })
    }
    return result;
}

//Test Object
const tester =
{
    name:"test",
    nick:"Banana",
    money: 5,
}
const tester2 =
{
    name:"test2",
    nick:"Banana2",
    game:"Monkey",
    money: 5*2,
}
//const box ={tester,tester2};

console.log(mergeObjects(tester,tester2));  



// items.map(item => {})

    // loop ForOf for get value

    // let a = objs.slice(2,3)
   
    // allKey = Object.keys(objs[0]);

    // for(let i = 0;i< objs.length;i++)
    // {
    //     let temp=Object.keys(objs[i]);
        
    // }

    // for(let i = objs.length ;i>=0 ;i--)
    // {
    //     result = {...objs[i]}
    // }
    
   

    // objs.forEach((e,index)=>{

    //     result ={...objs[index]}
    // });
    //get prop name
   // let a =  Object.getOwnPropertyNames(objs[0]);
 
    // return Object.keys(allObj[0][0]);'