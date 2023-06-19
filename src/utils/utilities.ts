export const sortArrayByName = (array: Array<any>) => {
    return array.sort((a1, a2) => {
        if (a1.name < a2.name) {
            return -1
        }

        if(a1.name > a2.name) {
            return 1
        }
        
        return 0
    })
}