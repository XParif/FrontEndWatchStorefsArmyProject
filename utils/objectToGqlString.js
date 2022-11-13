const objToGqlString = (obj)=>{
    let str =  ``
    Object.keys(obj).forEach((v)=>{
        str+= `${v} : "${obj[v]}" ,`
    })
    return str.slice(0,-1)
}
export default objToGqlString