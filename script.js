let putElements = () => {
    let storageID = document.getElementById('storage-key');
    let idContent = storageID.value;
    let storageValues = document.getElementById('storage-values');
    let valuesContent = storageValues.value;

    function makeString(keys, values) {
        let valueSTR = JSON.stringify(values);
        localStorage.setItem(keys, valueSTR)
    }

    let obj = { name: 'mahdi', hobby: 'programming' };
    makeString('object', obj);
    let array = [12, 45, 78, 32];
    makeString('array', array)

    if (idContent && valuesContent) {
        localStorage.setItem(idContent, valuesContent)
    }
    storageID.value = '';
    storageValues.value = '';
}