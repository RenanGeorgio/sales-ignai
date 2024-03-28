import PropTypes from 'prop-types';
import mainCss from '../../../../styles/email/main.module.scss';

const ReplyListItem = ({t, replyAction}) => (
  <li
    className={mainCss['mdc-list-item']}
    onClick={replyAction}
  >
    <span className={`${mainCss['mdc-list-item__graphic']} material-icons`}>reply</span>
    {t('topBar.messageViewerMenu.reply')}
  </li>
);

ReplyListItem.propTypes = {
  t: PropTypes.func.isRequired,
  replyAction: PropTypes.func.isRequired
};

export default ReplyListItem;
