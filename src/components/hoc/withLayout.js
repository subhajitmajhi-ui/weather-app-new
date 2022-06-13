import React from 'react'
import Footer from './Footer';
import Header from './Header';

const withLayout = (PageComponent) => {
  return function withPage({...props}){
        return (
            <div className="site-content">
                <Header />
                <PageComponent />
                <Footer />
            </div>
        )
    }
}

export default withLayout;
