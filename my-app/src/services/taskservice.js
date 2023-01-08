
export async function getTasks() {

    try{
        const response = await fetch('/api/tasks');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function addATask(data) {
    //console.log(data);
    const response = await fetch('/api/addtask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
      })
    return await response.json();
}

export async function removeTask(data) {
    const response = await fetch(`/api/removetask`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: data})
      })
    return await response.json();
}

export async function updateATask(data) {
    const response = await fetch(`/api/updatetask`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
      })
    return await response.json();
}

export async function markTask(data) {
    const response = await fetch(`/api/mark`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: data})
      })
    return await response.json();
}