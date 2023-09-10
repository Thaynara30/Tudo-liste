const tasks = [
    {tarefa: 'limpar a cozinha', status: false},
    {tarefa: 'limpar banheiro', status: false},
    {tarefa: 'limpar a sala', status: false},
    {tarefa: 'limpar o quarto', status: false},
    {tarefa: 'limpar o telhado', status: false},
];
let completed = 0;
function displayStatistic(){
    const concluidas = document.getElementById('concluidas');
    const naoConcluidas = document.getElementById('naoConcluidas');
    const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) =>{
        if (checkbox.checked){  // O checked é uma propriedade de um elemento de checkbox que indica se ele está marcado ou não.
            tasks[index].status = true;
        } else {
            tasks[index].status = false; 
        }
    });
    completed = tasks.reduce((acc, tarefa) =>{
        return tarefa.status ? acc + 1 : acc;
    }, 0);

    concluidas.textContent = completed;
    naoConcluidas.textContent = tasks.length - completed;
}
const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('click', displayStatistic) //, a função displayStatistic é chamada quando um dos checkboxes é clicado
})

/*const estatisticas = tasks.reduce((acm, item)=>{//fazer o reduce primeiro para nao dar conflitos 
    if(item.status === true){
       acm.true++ ;
    } else {
        acm.false++;
    }
    return acm
}, {true: 0, false: 0})
console.log('tarefas concluidas', estatisticas.true);
console.log('tarefas não concluidas', estatisticas.false);

const tasksDone = tasks.map(item => item.tarefa)
console.log(tasksDone)

const taskeDone = tasks.filter(item =>{
    if (item.status === true){
        return item.status = 'COMPLETO';
    }else{
        return item.status ='INCOMPLETO';
    }
})
console.log(taskeDone)*/

