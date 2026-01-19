import React from "react";
import styles from "./CloudImageComponent.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";


const GroceryImageComponent = ({ imageSrc = "/images/products/Frame 1000002577.webp" }) => {
return (
<div className={styles.container}>
<NumberedHeading number={1} title="Key Benefits  of Our App." />
<div className={styles.imageWrapper}>
<img src={imageSrc} alt="OTT App Features" className={styles.fullImage} />
</div>
</div>
);
};


export default GroceryImageComponent;