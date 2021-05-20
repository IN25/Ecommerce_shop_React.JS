import React from "react";
import { SHOP_DATA } from "./shoppage.data";
import { PreviewCollection } from "../../components/preview_collection/collection_preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <>
        <div>
          <h1 style={{ marginLeft: "5.2rem", marginBottom: "1.8rem" }}>
            Collections
          </h1>
        </div>

        {this.state.collections.map((collection) => {
          return (
            <PreviewCollection
              key={collection.id}
              {...collection}
            ></PreviewCollection>
          );
        })}
      </>
    );
  }
}

export default ShopPage;
