import * as React from 'react';
import * as Octicon from 'react-octicon';

import { relativeTime } from 'Helpers/Lang/Date';
import { getNotificationSubjectIcon } from 'Helpers/Services/GitHub';

import { Icon } from 'View/Ui/Index';

interface INotificationProps
{
  notification: IGitHubNotification;
};

class Notification extends React.Component<INotificationProps, any>
{
  render()
  {
    return (
      <div className="notification">
        <div className="badge">
          <Octicon name={getNotificationSubjectIcon(this.props.notification)} />
        </div>
      <div className="hard-top hard-top--epsilon">
          <div className="hard-top__top">
            <div className="height--30 soft-alpha--left soft-delta--right">
              <p className="text--zeta text--bold line-height--30 text--uppercase">
                {relativeTime(this.props.notification.updatedAt)}
              </p>
            </div>
          </div>
          <div className="hard-top__content">
            <div className="soft-zeta--ends soft-delta--sides">
              <p className="notification__text">
                {this.props.notification.subject.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Notification;