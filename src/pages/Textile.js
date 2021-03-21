import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import textile from "../json/textile.json";
import NewNavBar from "../components/NewNavBar";

const { Header, Content, Footer,Sider } = Layout;

function Textile() {
  return (
    <Layout>
    <Sider className="my-sider" width={"15rem"}>
        <NewNavBar title="NORDIC NEST Shopping Cart"/>
      </Sider>
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Textile" />
      </Header>
      <Content className="layout-content">
        <ProductList products={textile} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Textile;
