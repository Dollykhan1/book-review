import toast from 'react-hot-toast'

export const wishGetData = () => {
    let wishData = [];
    const storageData = localStorage.getItem('wishData')
    if(storageData) {
        wishData  = JSON.parse(storageData)
    }
    return wishData
}

// save 
export const WishSaveData  = (data) => {
    let wishData = wishGetData();
    // console.log(wishData)
    const isExists = wishData.find(b => b.id == data.id)

    // console.log(isExists)
    if(isExists) {
        return toast.error("Already added")
    }
    
    wishData.push(data)
    localStorage.setItem('wishData', JSON.stringify(wishData))
    toast.success('Successfully add data!')
}