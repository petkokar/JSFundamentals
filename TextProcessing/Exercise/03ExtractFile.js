function extract(input) {
    let lastBackSlashIndex = input.lastIndexOf('\\');
    let lastDotIndex = input.lastIndexOf('.');
    let extension = input.substring(lastDotIndex + 1, input.length);
    let fileName = input.substring(lastBackSlashIndex + 1, lastDotIndex);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extract('C:\\Projects\\Data-Structures\\LinkedList.cs')