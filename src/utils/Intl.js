import {createIntl, createIntlCache} from 'react-intl';

import {getMessages} from '@utils/commonFunctions';

const cache = createIntlCache();

export default (locale) => {
  const messages = getMessages()[locale];

  return createIntl({locale, messages}, cache);
};
