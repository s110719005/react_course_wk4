import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import furniture from "../json/furniture.json"
import NewNavBar from "../components/NewNavBar";

const { Header, Content, Footer,Sider } = Layout;

function Furniture() {
  return (
    <Layout>
    <Sider className="my-sider" width={"15rem"}>
        <NewNavBar title="NORDIC NEST Shopping Cart"/>
      </Sider>
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Furniture" />
      </Header>
      <Content className="layout-content">
        <ProductList products={furniture}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Furniture;
