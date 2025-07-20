import TaskCard from "@/components/ui/modules/TaskCard";
import { selectFilter, selectTasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hook";
import TaskModal from "@/components/ui/modules/TaskModal";

// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <TaskModal></TaskModal>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={tasks}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
