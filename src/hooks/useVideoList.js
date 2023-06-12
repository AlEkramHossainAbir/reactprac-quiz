import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      // database related

      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());

      try {
        setError("");
        setLoading(true);

        ///request firebase

        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    }

    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
