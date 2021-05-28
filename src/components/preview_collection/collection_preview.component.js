import React from "react";
import "./collection_preview.scss";
import CollectionItem from "../collection_item/collection_item.component";

export const PreviewCollection = ({ title, items }) => {
  return (
    <>
      <h1 className="title_collection_preview">{title.toUpperCase()}</h1>
      <div className="collection_preview">
        {items
          .filter((item, index) => index < 4) //this makes the map iterate only 4 times
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
    </>
  );
};
