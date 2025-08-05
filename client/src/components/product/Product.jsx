// import productStore from "../../store/ProductStore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import productStore from "../../store/ProductStore";
import TabProduct from "./TabProduct";

const Product = () => {
  const { productRemark, productByRemarkRequest } = productStore();

  console.log("Product List :", productRemark);

  return (
    <div>
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
        <h1>Discover Our Latest Products</h1>
        <p className="text-base font-normal md:w-1/2 mx-auto">
          Explore a curated selection of high-quality products.
        </p>

        <Tabs className={`my-10`}>
          <TabList className={`flex justify-center items-center`}>
            <Tab
              onClick={() => {
                productByRemarkRequest("new");
              }}
              className={`text-2xl font-normal bg-gray-200 px-4`}
            >
              New
            </Tab>

            <Tab
              onClick={() => {
                productByRemarkRequest("trending");
              }}
              className={`text-2xl font-normal bg-gray-200 px-4`}
            >
              Trending
            </Tab>

            <Tab
              onClick={() => {
                productByRemarkRequest("popular");
              }}
              className={`text-2xl font-normal bg-gray-200 px-4`}
            >
              Popular
            </Tab>

            <Tab
              onClick={() => {
                productByRemarkRequest("top");
              }}
              className={`text-2xl font-normal bg-gray-200 px-4`}
            >
              Top
            </Tab>

            <Tab
              onClick={() => {
                productByRemarkRequest("special");
              }}
              className={`text-2xl font-normal bg-gray-200 px-4`}
            >
              Special
            </Tab>
          </TabList>

          <TabPanel>
            <TabProduct product={productRemark} />
          </TabPanel>

          <TabPanel>
            <TabProduct product={productRemark} />
          </TabPanel>

          <TabPanel>
            <TabProduct product={productRemark} />
          </TabPanel>

          <TabPanel>
            <TabProduct product={productRemark} />
          </TabPanel>

          <TabPanel>
            <TabProduct product={productRemark} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
