import { ApolloWrapper } from '@/lib/apolloWrapper';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>{children}</ApolloWrapper>
  )
}

export default Layout;