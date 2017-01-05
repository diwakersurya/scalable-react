/**
*
* LinkList
*
*/

import React from 'react';
import Link from "../Link";
import IconButton from "../IconButton";
import styles from './styles.css';

function LinkList({links,topicName,children,startAdd}) {
  const linkNodes=links.map((link)=>(
  <Link
    link={link}
    key={link.id}
  />
  ));
  return (
    <div className={styles.linkList}>
      <div className={styles.topicContainer}>{topicName}</div>
      {linkNodes}
      <IconButton
        icon="plus" iconClass={styles.icon} buttonClass={styles.button}
        onClick={()=>startAdd(topicName)}
      />
      {children}
    </div>
  );
}

LinkList.propTypes={
  startAdd:React.PropTypes.func.isRequired,
  children:React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links:React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description:React.PropTypes.string.isRequired,
      url:React.PropTypes.string.isRequired,
      id:React.PropTypes.string.isRequired
    })
).isRequired
}

export default LinkList;
