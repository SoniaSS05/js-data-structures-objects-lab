// Write your solution in this file!

const driver = new Object();

const updateDriverWithKeyAndValue = (objectName, keyName, valueNum)=>{
    const newDriver = Object.assign( {}, objectName, {[keyName]:valueNum});
    return newDriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (objectName, keyName, valueNum) =>{
    objectName[keyName] = '12 Broadway';
    return objectName;
    
}

const deleteFromDriverByKey = (objectName, keyName)=>{
    const newDriver = {...objectName};
    delete newDriver[keyName];
    return (newDriver);
}
const destructivelyDeleteFromDriverByKey = (objectName, keyName)=>{
    delete objectName[keyName];
    return (objectName);
}
