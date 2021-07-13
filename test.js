
const {sum}= require('./app.js')

test('the sum of 12 and 13 is 25',()=>{
    let total=sum(12,13);
    expect(total).toBe(25)
})