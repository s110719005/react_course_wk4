import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import tableware from "../json/tableware.json"
import NewNavBar from "../components/NewNavBar";

const { Header, Content, Footer,Sider } = Layout;

function Tableware() {
  return (
    <Layout>
    <Sider className="my-sider" width={"15rem"}>
        <NewNavBar title="NORDIC NEST Shopping Cart"/>
      </Sider>
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Tableware" />
      </Header>
      <Content className="layout-content">
        <ProductList products={tableware} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Tableware;
