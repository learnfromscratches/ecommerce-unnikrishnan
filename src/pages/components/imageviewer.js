import styles from "./imageviewer.module.css"
import { useState, useEffect } from "react";
import Image from "next/image";

const ImageViewer = props => {

    const [image, setImage] = useState(props.thumbnailImage)
    useEffect(() => { setImage(props.thumbnailImage); }, [props.thumbnailImage]);
    return (
        <div className={styles.imageViewer}>
            <div className={styles.thumbnail}>
                <Image src={image} width={400} height={400} alt = "product image" className={styles.image} />
            </div>
            <div className={styles.imageSelector}>
                <div className={styles.singleImage}>
                    {(props.imgArray || []).map(item => (
                        <img onClick={() => setImage(item)} src={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ImageViewer;