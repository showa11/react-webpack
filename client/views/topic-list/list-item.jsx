import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Avatar from 'material-ui/Avatar';
import {withStyles} from 'material-ui/styles';

import {tabs} from '../../util/variable-define.js';

import {
  topicPrimaryStyles,
  topicSecondaryStyles
} from './styles.js';

const Primary = ({classes, topic}) => {
  const classNames = cx({
    [classes.tab]: true,
    [classes.top]: topic.top,
  })
  return (
    <div className={classes.root}>
      <span className={classNames}>{topic.top ? '置顶' : tabs[topic.tab]}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  )
}

const Secondary = ({classes, topic}) => {
  return (
    <span className={classes.root}>
      <span className={classes.userName}>{topic.author.loginname}</span>
      <span className={classes.count}>
        <span className={classes.accentColor}>{topic.reply_count}</span>
        <span>/</span>
        <span>{topic.visit_count}</span>
      </span>
      <span>创建时间: {topic.create_at}</span>
    </span>
  )
}

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}
Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}
const StyledPrimary = withStyles(topicPrimaryStyles)(Primary);
const StyledSecondary = withStyles(topicSecondaryStyles)(Secondary);


const TopicListItem =  ({onClick, topic}) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      <Avatar src={topic.author.avatar_url} />
    </ListItemAvatar>
    <ListItemText
      primary={<StyledPrimary topic={topic} />}
      secondary={<StyledSecondary topic={topic} />} />
  </ListItem>
)

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired,
}

export default TopicListItem;