import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
        setTimeout(() => window.scrollTo({ top: 0}), 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);