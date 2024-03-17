const GetData = (key) => {
    try {
        const data = localStorage.getItem(key) || null;

        return typeof data == 'string'? JSON.parse(data) : data; 
    }
    catch(err){
        return null
    }
}

export default GetData;