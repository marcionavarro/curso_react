import styles from './TaskList.module.css';

interface Props{

}

const TaskList = (props: Props) => {
  return (
    <header className={styles.header}>
        <h1>TaskList</h1>
      </header>
  )
};

export default TaskList;