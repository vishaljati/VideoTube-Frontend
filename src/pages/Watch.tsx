import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCard from "@/components/VideoCard";
import Comment from "@/components/Comment";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown, Share2, BookmarkPlus, MoreHorizontal } from "lucide-react";
import { videos, comments } from "@/data/mockData";

const Watch = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const video = videos.find((v) => v.id === id);
  const videoComments = comments.filter((c) => c.videoId === id);
  const recommendedVideos = videos.filter((v) => v.id !== id).slice(0, 10);

  if (!video) return <div>Video not found</div>;

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main
        className={`transition-all duration-300 pt-6 ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-20"
        }`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-6 pb-12">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-4">
            {/* Video Player */}
            <VideoPlayer video={video} />

            {/* Video Title */}
            <h1 className="text-2xl font-bold">{video.title}</h1>

            {/* Channel & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
              <div className="flex items-center gap-4">
                <img
                  src={video.channelAvatar}
                  alt={video.channel}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div>
                  <h3 className="font-semibold">{video.channel}</h3>
                  <p className="text-sm text-muted-foreground">1.2M subscribers</p>
                </div>
                <Button
                  onClick={() => setSubscribed(!subscribed)}
                  className={`rounded-full px-6 ${
                    subscribed
                      ? "bg-secondary text-foreground hover:bg-secondary/80"
                      : "bg-gradient-primary hover:opacity-90"
                  }`}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="secondary" className="rounded-full gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>12K</span>
                  <div className="w-px h-6 bg-border mx-1" />
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="secondary" className="rounded-full gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                <Button variant="secondary" className="rounded-full gap-2">
                  <BookmarkPlus className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-secondary rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2 text-sm font-semibold">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </div>
              <p className={showFullDescription ? "" : "line-clamp-3"}>
                {video.description}
              </p>
              <Button
                variant="ghost"
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="mt-2 text-sm"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </Button>
            </div>

            {/* Comments */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">{videoComments.length} Comments</h2>
              
              {/* Comment Input */}
              <div className="flex gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                  alt="Your avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                />
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    className="bg-secondary border-border focus:border-primary min-h-[80px]"
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <Button variant="ghost">Cancel</Button>
                    <Button className="bg-gradient-primary">Comment</Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {videoComments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations Sidebar */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold mb-4">Recommended</h2>
            {recommendedVideos.map((recommendedVideo) => (
              <div key={recommendedVideo.id} className="group cursor-pointer">
                <VideoCard video={recommendedVideo} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Watch;
