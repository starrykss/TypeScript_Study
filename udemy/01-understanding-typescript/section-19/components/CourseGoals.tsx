type Goal = {
  id: number;
  title: string;
  description: string;
};

interface CourseGoalsProps {
  goals: Goal[];
  onDelete: (id: number) => void;
}

function CourseGoals({ goals, onDelete }: CourseGoalsProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            {/* 본문 */}
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>

            {/* 삭제 버튼 */}
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoals;

// const 컴포넌트 생성
import type { FC } from 'react';

export const CourseGoals2: FC<CourseGoalsProps> = ({ goals }) => {
  return goals.map((goal) => (
    <li>
      <article>
        <div>
          <h2>{goal.title}</h2>
          <p>{goal.description}</p>
        </div>
        <button>Delete</button>
      </article>
    </li>
  ));
};
