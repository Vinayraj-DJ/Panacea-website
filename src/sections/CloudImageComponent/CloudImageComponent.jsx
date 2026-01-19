import React from "react";
import styles from "./CloudImageComponent.module.css";
import NumberedHeading from "../NumberedHeading/NumberedHeading";


const CloudImageComponent = ({ imageSrc = "/images/products/Frame 1171278639.webp" }) => {
return (
<div className={styles.container}>
<NumberedHeading number={1} title="Key Features of Our OTT App." />
<div className={styles.imageWrapper}>
<img src={imageSrc} alt="OTT App Features" className={styles.fullImage} />
</div>
</div>
);
};


export default CloudImageComponent;