import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const VideoCard = ({ video }: { video: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/watch/${video.id}`}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
            {video.duration}
          </div>
          {/* Play Button Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-fade-in">
              <div className="bg-primary rounded-full p-4 shadow-glow-primary">
                <Play className="h-8 w-8 fill-white" />
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-3">
          <div className="flex gap-3">
            {/* Channel Avatar */}
            <img
              src={video.channelAvatar}
              alt={video.channel}
              className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-primary/20"
            />
            
            {/* Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {video.channel}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
