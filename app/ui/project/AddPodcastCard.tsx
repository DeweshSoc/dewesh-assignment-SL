import Image from "next/image";
import styles from "./AddPodcastCard.module.css";

export interface ICard {
    title: string;
    subtitle: string;
    icon: any;
    altText: string;
    id: number;
}

export default function AddPodcastCard({
    data,
    onClick,
}: {
    data: ICard;
    onClick: any;
}) {
    return (
        <div onClick={onClick} className={styles.cardContainer}>
            <div>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.subtitle}>{data.subtitle}</p>
            </div>
            <Image src={data.icon} alt={data.altText}></Image>
        </div>
    );
}
