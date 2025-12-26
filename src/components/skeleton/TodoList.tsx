import TodoItem from '@/components/skeleton/TodoItem';

const TodoList: React.FC = (): React.ReactElement => {
    return (
        <div className="flex flex-col">
            {Array.from({ length: 8 }).map((_, index) => (
                <TodoItem key={index} />
            ))}
        </div>
    );
};

export default TodoList;
