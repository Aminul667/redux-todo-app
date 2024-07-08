const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5 space-y-3">
        <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
          <p>There is no tasks pending</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
