import styles from './Column.module.scss'

const Column = props => {
    const fafaClass = 'icon fa fa-' + props.icon;
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
              <span className={styles.icon + ' fa fa-' + props.icon} />
              {props.title}
            </h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
            </ul>
        </article>
    );
};

export default Column;
