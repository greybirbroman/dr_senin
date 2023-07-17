import styles from './List.module.css'
import ListItem from '../ListItem/ListItem'
import { info } from '@/utils/info'

const List = ({ section }) => {
  return (
    <ul className={styles.list}>
      {section.content.map((item, index) =>
        <ListItem key={index} text={item.text} span={item.additional} year={item.year}/>
      )}
    </ul>
  )
}

export default List
