const todo = require('../todo');

const {all,add,markascomplete,dueToday,dueLater,overdue} = todo()

const formateDate = d =>{
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()


const today = formateDate(dateToday)

var yesterday = formateDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)

var tomorrow = formateDate(
    new Date(new Date().setDate(dateToday.getDate()+1))
)

describe("first test suit", ()=>{
    test("create todo case", () =>{
        expect(all.length).toBe(0)
        add({
            title:"make sure that test case is wroking",
            completed:false,
            duedate: new Date().toLocaleDateString("en-CA")

        });

        add({title:"submit assigment", dueDate:yesterday, completed:false})
            add({title:"pay rent", dueDate:today, completed:true})
            add({title:"File taxes", dueDate:tomorrow,completed:false})

        expect(all.length).toBe(4)

    })


    test("mark as completed check", () => {
        expect(all[0].completed).toBe(false)
        markascomplete(0)
        expect(all[0].completed).toBe(true)
    })
    
    test("retrival of overdue items check", () => {
        expect(overdue()[0].title).toBe("submit assigment")
        
    })

    test("retrival of dueToday items check", () => {
        expect(dueToday()[0].title).toBe("pay rent")
        
    })

    test("retrival of dueLater items check", () => {
        expect(dueLater()[0].title).toBe("File taxes")
        
    })

})