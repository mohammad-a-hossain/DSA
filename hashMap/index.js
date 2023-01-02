class HashMap {
    constructor(){
        this.map={}
    }
    put(key,value){
        this.map[key]=value
    }
    get(key){
        return this.map[key] || -1
    }
    remove(key){
        delete this.map[key]
    }
}
let map = new HashMap()

map.put('name','aaron')
map.put('age','33')
map.put('email','aaron@gmial.com')

map.put('name','suhel')
map.put('age','3')
map.put('email','suhel@gmial.com')

map.remove('email')



console.log(map.map)
/* console.log(map.get('name'))
console.log(map.get('age')) */
