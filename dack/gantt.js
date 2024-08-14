

var myTasks = [
    
    {
        id: 1,      
        name: 'gaggA',
        date_start: '2024-05-01',
        date_end: '2024-06-20',
        color: 'rgb(145, 199, 190)',
        title: 'gfgf'
        
    },
    {
        id: 1,
        
        name: 'gaggA',
        date_start: '2024-06-25',
        date_end: '2024-07-25',
        color: 'rgb(145, 199, 190)',
        title: 'gfgf'
        
    },
    {
        id: 2,
        title: 'ss',
        name: 'vasd',
        date_start: '2024/05/05',
        date_end: '2024-06-20',
        color: 'rgb(141, 223, 159)'
    },
    {
        id: 3,
        title: 'asd',
        name: 'afa',
        date_start: '2024/05/15',
        date_end: '2024/06/20',
        color: 'rgb(161, 138, 224)'
    },
    {
        id: 4,
        title: 'valiev',
        name: 'otpusk',
        date_start: '2024/06/01',
        date_end: '2024/06/10',
        color: 'rgb(229, 212, 135)'
    },
   
];







var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
})

$('#VacationOneFrom').datepicker({
});
$('#VacationOneFor').datepicker({
});
$('#VacationTwoFrom').datepicker({
});
$('#VacationTwoFor').datepicker({
});

var NameSelect = document.getElementById('NameSelect');
var VacationOneFrom = document.getElementById('VacationOneFrom');
var VacationOneFor = document.getElementById('VacationOneFor');

var button = document.getElementById('gaga');

button.addEventListener("click", function() {
    let array = {
            id: 5,
            title: 'danil',
            name: 'otpusk',
            date_start: '2024/06/09',
            date_end: '2024/06/25',
            color: 'rgb(152, 218, 90)'
    };
    myTasks.push(array);
    console.log('sadsa');

    console.log(myTasks);
    $('#table-gantt').gantt({
        dtStart: '2024-01-01',
        dtEnd: '2025-12-31',
        height:1000,
        
        labelTask: true,
        data: myTasks,
        click: function(taskId, taskName, taskCountDays){
        console.log('aqui', taskId, taskName, taskCountDays);
        
        },
        
        });
});

