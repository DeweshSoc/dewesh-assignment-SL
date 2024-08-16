"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css"
import AddPodcastCard ,{ICard} from "../ui/project/AddPodcastCard"
import CreateEpisodeModal from "../ui/project/CreateEpisodeModal"
import { fetchEpisodeService } from "../lib/dataServices"


import feedIcon from "@/public/feed.svg"
import youtubeIcon from "@/public/yt.svg"
import uploadIcon from "@/public/upload.svg"
import Upload from "../ui/project/Upload"
import useAuth from "../lib/userContext"
import { useRouter } from "next/navigation"
import useProject from "../lib/projectContext"

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
    const {user,isAuthenticated, logout} = useAuth();
    const {project} = useProject();
    const router = useRouter();

    const [modalOn, setModalOn] = useState(false);
    const [triggerFetch, setTriggerFetch] = useState(true);
    const [episode, setEpisode] = useState([]);

      useEffect(() => {
          if (!isAuthenticated()) router.push("/");
          if (!project){
            router.push("/dashboard");
          }
      }, []);

      useEffect(() => {
          async function getPageData() {
              try {
                  const response = await fetchEpisodeService(
                    project?._id as string,
                    user?.token as string
                  );
                  setEpisode(response.data.episodes);
              } catch (err: any) {
                  if (err.status === 403) {
                      await logout();
                  }
              }
          }
          if (!user?.token) return;
          if(!project) return;
          if (triggerFetch) {
              getPageData();
              setTriggerFetch(false);
          }
      }, [triggerFetch]);


    function toggleModal() {
        setModalOn((modalState) => !modalState);
    }


    return(
        <div className={styles.optionOutlet}>

            <h1>Add Podcast</h1>
            <div className={styles.cards}>
                {cardData.map(card=>{
                    return <AddPodcastCard key={card.id} data={card} onClick={()=>{toggleModal()}}/>
                })}
            </div>
            <Upload episodes={episode}/>

            {modalOn ? (
                <CreateEpisodeModal onModalCancel={toggleModal} triggerFetch={()=>{setTriggerFetch(true)}}/>
            ) : (
                <></>
            )}

        </div>
    )
}