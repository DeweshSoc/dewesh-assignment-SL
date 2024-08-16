import styles from "./page.module.css"
import AddPodcastCard ,{ICard} from "../ui/project/AddPodcastCard"

import feedIcon from "@/public/feed.svg"
import youtubeIcon from "@/public/yt.svg"
import uploadIcon from "@/public/upload.svg"
import Upload from "../ui/project/Upload"

const cardData: ICard[] = [
    {
        title: "RSS Feed",
        subtitle: "Lorem ipsum dolor sit Dolor lorem sit.",
        icon: feedIcon,
        altText: "Feed",
        id:1,
    },
    {
        title: "Youtube Video",
        subtitle: "Lorem ipsum dolor sit Dolor lorem sit.",
        icon: youtubeIcon,
        altText: "Youtube",
        id:2,
    },
    {
        title: "Upload Files",
        subtitle: "Lorem ipsum dolor sit Dolor lorem sit.",
        icon: uploadIcon,
        altText: "Upload",
        id:3
    },
];

export default function Page(){
    return(
        <div className={styles.optionOutlet}>

            <h1>Add Podcast</h1>
            <div className={styles.cards}>
                {cardData.map(card=>{
                    return <AddPodcastCard key={card.id} data={card}/>
                })}
            </div>
            <Upload/>
        </div>
    )
}