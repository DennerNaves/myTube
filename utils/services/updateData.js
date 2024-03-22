const UpdateData = (key, newData, type, name) => {
    try {
        if(type == 'addVideo'){
            const data = localStorage.getItem(key) || null;
            const parsedData = data? JSON.parse(data) : data;
            localStorage.setItem(key, JSON.stringify(parsedData));
        }
        if(type == 'addPlaylist'){
            const data = localStorage.getItem(key) || null;
            const parsedData = data? [JSON.parse(data)] : data;
            console.log(parsedData[0], newData)
            localStorage.setItem(key, JSON.stringify(parsedData[0].push({newData: []})));
        }

        return true;
    }
    catch(err){
        return false;
    }
}

export default UpdateData;