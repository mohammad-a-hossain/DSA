// hash table use for quick search 

class HashTable {
    constructor(size){
        this.arr = new Array(size)
        console.log(this.arr)
        this.size =size
    }

    hashfunction(str){
        str = str +''
        let sum=0
        for(let i=0; i < str.length; i++){
            sum = sum + str.charCodeAt(i)
            }
            let index = sum % this.size
         console.log({str, index})
      return index
    }

    set(value){
        let index = this.hashfunction(value)
        let result= this.arr[index]
        if(result=== undefined){//if index of array is empty then it will create an arr and keep a value
            result= [value]
        }else{
            result.push(value)
        }
        console.log(result)
        this.arr[index] = result
    }
    get(value){
        let index = this.hashfunction(value)
        let resultArr= this.arr[index]
        //now linear search for geting the value
        console.log(resultArr)
        for(let i=0;i< resultArr.length; i++){
            if(resultArr[i]=== value){
                return true
            }
        }
        return false
    }
}

let hash = new HashTable(5)

hash.set('apple')
hash.set('banana')
hash.set('mango')
hash.set('jango')
hash.set('bango')
hash.set('kola')
//console.log(hash)
//hash.get('lila')
hash.set('bangladesh')
hash.set(44)

console.log(hash.arr)
hash.get('bango')