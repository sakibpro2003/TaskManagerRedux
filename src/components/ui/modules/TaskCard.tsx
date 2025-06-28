import { Button } from "../button";

const TaskCard = ({tasks}) => {
  return (
    <div className="border-2">
        
      <div className="flex justify-around">
        <div className="w-3 h-3 bg-green-300"></div>

        <div>
          <h4>title</h4>
        </div>

        <div>
          <Button className="mr-4">Delete</Button>
          <input type="checkbox" />
        </div>
      </div>
      <p>description</p>
    </div>
  );
};

export default TaskCard;
