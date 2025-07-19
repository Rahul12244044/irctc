
export const ListCars=()=>{
    let cars=["bmw","audi","motor","tata"];
    let students=[
        {name:"Radha",age:22,gender:"F"},
        {name:"krishan",age:22,gender:"M"},
        {name:"Gopaniya",age:22,gender:"F"}
    ]
    return (
    <>
    <h2>Students details</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        {students.map((elm,index)=>{
            return (
            <tr key={index}>
            <td>{elm.name}</td>
            <td>{elm.age}</td>
            <td>{elm.gender}</td>
        </tr>)
        })}
        
    </table>
    
    </>)
}