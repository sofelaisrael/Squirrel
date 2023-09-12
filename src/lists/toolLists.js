import table from '../assets/table.png'
import kankan from '../assets/kankan.png'
import task from '../assets/task.png'
import edit from '../assets/edit.svg'

const ToolsList = [
    {
        id: 1,
        title: 'Table view',
        image: table,
        content: 'Plan and organize projects in such a way that’s best suitable for your team. Assign tasks, filter and view data based on priority.'
    },
    {
        id: 2,
        title: 'Custom Workflows',
        image: edit,
        content: 'Customize workflows with as many stages as you want. Decide who is subscribed to which stage so teams get notified of tasks progress.'
    },
    {
        id: 3,
        title: 'Tasks',
        image: task,
        content: 'Assign personal tasks or assign them to multiple team members. Prioritize tasks with deadlines, time estimates and labels.'
    },
    {
        id: 4,
        title: 'Kankan Boards',
        image: kankan,
        content: 'Empower teams to self manage as they move tasks from one stage to the other and visualize workflow in kankan boards.'
    }
]

export default ToolsList