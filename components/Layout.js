import Header from '@/components/Header/Header'

const Layout = ({ children }) => {
  return (
    <div className="w-full h-auto flex">
      <Header />
      <div className="container w-full min-h-full flex flex-row flex-1 mx-auto">
        <div className="main">{children}</div>
      </div>
    </div>
  )
}

export default Layout
