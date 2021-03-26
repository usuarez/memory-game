export const randomInsert = (images)=> {
    //the real shuffle method, but only for the arr of images
     for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    //the shufle fn, build the obj array
    const shuffle = ()=> {
        const startShuffle= () => {
            let arrObj = []
            images.forEach(image => { arrObj.push({img: image, id: Math.floor(Math.random()*10000)}) });
            return arrObj
        }
        
        let arr = startShuffle()
        //and checks the ids, if any is equal call shuffle again
        arr.forEach(item => {
            while (arr.filter(arrItem => arrItem.id === item.id).length > 1) {
                arr = startShuffle()
            } 
            
        })
        return arr
    }
    return shuffle();

    //need return img, id in each obj
}