import { useState, useEffect } from "react";

function VideoLikes({ movieId, upvotes = 10, downvotes = 3 }) {
  const [up, setUp] = useState(upvotes);
  const [down, setDown] = useState(downvotes);

  // saved values from local storage when the component mounts
  useEffect(() => {
    if (!movieId) {
      console.error("No movieId provided for VideoLikes");
      return;
    }

    const savedUpvotes = localStorage.getItem(`upvotes-${movieId}`);
    const savedDownvotes = localStorage.getItem(`downvotes-${movieId}`);

    if (savedUpvotes !== null) setUp(parseInt(savedUpvotes, 10));
    if (savedDownvotes !== null) setDown(parseInt(savedDownvotes, 10));
  }, [movieId]);

  // Saves the new values to local storage whenever they change
  useEffect(() => {
    if (!movieId) return;

    localStorage.setItem(`upvotes-${movieId}`, up);
    localStorage.setItem(`downvotes-${movieId}`, down);
  }, [up, down, movieId]);

  return (
    <div>
      <button onClick={() => setUp((current) => current + 1)}>{up} 👍</button>
      <button onClick={() => setDown((current) => current + 1)}>{down} 👎</button>
    </div>
  );
}

export default VideoLikes;
