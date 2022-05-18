import React from "react";
import "./category.css";
import Newcategory from "./newcategory";
import { data } from "./listoddata";
const Category = () => {
  const [listdata, setListData] = React.useState(data);
  return (
    <>
      <div>
        <h2 className="category_class">10 DIFFERENT CATEGORIES</h2>
        <h4 className="h3_tag">TOTAL 417 TRAITS</h4>
      </div>
      <div className="row d-flex flex-wrap">
        {listdata.map((e) => {
          return (
            <Newcategory
              key={e.id}
              title={e.title}
              number={e.number}
              titleone={e.titleone}
              bgImage={e.bgImage}
              bgColor={e.bgColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
