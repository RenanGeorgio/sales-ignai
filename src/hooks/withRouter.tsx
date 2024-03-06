import React from 'react';
import { useNavigate, useParams, NavigateFunction } from 'react-router-dom';

interface WithRouterProps {
  navigate: NavigateFunction;
  params: Record<string, string | undefined>;
}

const withRouter = <P extends WithRouterProps>(WrappedComponent: React.ComponentType<P>) => {
  return (props: Omit<P, keyof WithRouterProps>) => {
    const navigate = useNavigate();
    const params = useParams();

    const withRouterProps = { navigate, params } as WithRouterProps;

    return <WrappedComponent {...props as P} {...withRouterProps} />;
  };
};

export default withRouter;
