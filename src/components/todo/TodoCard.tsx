const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex items-center justify-between p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
