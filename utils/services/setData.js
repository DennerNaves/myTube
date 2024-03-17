const SetData = (key, data) => {
    try {
        if(key, data){
            localStorage.setItem(key, typeof data == 'string'? data : JSON.stringify(data));
        }
    }
    catch(err){
        return err
    }
}

export default SetData;