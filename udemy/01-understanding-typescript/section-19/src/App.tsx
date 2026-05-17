import { useState } from 'react';

import goalsImg from './assets/goals.jpg';

import Header from '../components/Header';
import CourseGoals from '../components/CourseGoals';
import NewGoal from '../components/NewGoal';

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn TS',
      description: 'Learn TS from the ground up',
    },
    {
      id: 2,
      title: 'Practice TS',
      description: 'Practice working with TypeScript!',
    },
  ]);

  // 아이템 삭제 처리
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }

  // 아이템 추가 처리
  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({
        id: Math.random(),
        title: text,
        description: summary,
      }),
    );
  }

  return (
    <main>
      <Header
        image={{
          src: goalsImg,
          alt: 'A list of goals',
        }}
      >
        <h1>Your Course Goals</h1>

        {/* 새로운 아이템 추라 */}
        <NewGoal onAdd={handleAddGoal} />

        {/* 아이템 목록 */}
        <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      </Header>
    </main>
  );
}

export default App;
