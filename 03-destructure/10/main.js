/*- จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
- ถ้า salaries เป็น empty object ให้ return null
- ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
```*/
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };

const topSalaries=({...salariesObj})=>{
    if(!salariesObj)return null;
    let result = 0;
    for (const iterator in salariesObj) 
    {
        if(salariesObj[iterator]>result)
        {
            result = salariesObj[iterator];
        }
    }
    
    return result;
}

console.log(topSalaries(salaries));