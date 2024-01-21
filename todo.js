const todolist = () =>{

    all = [];

    const add = (todotask) => {
        all.push(todotask);
    }

    const markascomplete = (index) => {
        all[index].completed = true
    }

    const overdue = () =>{
        var date = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr

    }
    const dueToday = () =>{

        var date = new Date().toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr
    }
    const dueLater = () =>{

        var date = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]
        const arr = []
        all.forEach(item => {
            if(item.dueDate == date){
                arr.push(item)
            }
        });
        return arr

    }

    const toDisplayableList = (list) =>{


    list.forEach(item =>{
        if(item.completed==true){
            console.log("[x]"+" "+item.title+" "+item.dueDate)
        }else{
            console.log("[ ]"+" "+item.title+" "+item.dueDate)
        }
    })

    }


    return {all, add, markascomplete, overdue,dueLater,dueToday,toDisplayableList};

}

module.exports = todolist