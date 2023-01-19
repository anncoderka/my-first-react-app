import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {

    // const styles = {
    //     header: 'List_header__JIRjk',
    //     title: 'List_title__SSS0A',
    //     description: 'List_description__rfZtJ',
    //     columns: 'List_columns__MTFlt',
    //   }

  return (
    <div>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do<span>soon!</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
            <Column title="Books" icon="book"/>
            <Column title="Movies" icon="film"/>
            <Column title="Games" icon="gamepad"/>
        </section>
    </div>
  );
};

export default List;
