import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import NewNavBar from "../components/NewNavBar";

const { Header, Content, Footer ,Sider} = Layout;



function Home() {
  
  return (
    <Layout>
      <Sider className="my-sider" width={"15rem"}>
        <NewNavBar title="NORDIC NEST Shopping Cart"/>
      </Sider>
      <Layout className="container main-layout">
        <Header className="layout-header">
          <AppHeader title="NORDIC NEST Shopping Cart"/>
        </Header>
        <Content className="layout-content">
          <ProductList products={products}/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>  
        </Footer>  
      </Layout>

    </Layout>
  );
}

export default Home;
