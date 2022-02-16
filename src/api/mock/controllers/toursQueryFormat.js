export default function toursQueryFormat(query){
    let arrQuery = query.split('&').map(param =>{
        let paramArr = param.split('=')
        let paramObj = {
            paramArr[0]: paramArr[1],
        }
        return paramObj
    })
    return arrQuery
}