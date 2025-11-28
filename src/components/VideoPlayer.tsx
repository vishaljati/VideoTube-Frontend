import { Play } from "lucide-react";

const VideoPlayer = ({ video }: { video: any }) => {
  return (
    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
      />
      {/* Play Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
        <div className="bg-primary rounded-full p-6 shadow-glow-primary group-hover:scale-110 transition-transform">
          <Play className="h-12 w-12 fill-white" />
        </div>
      </div>
      {/* In a real app, this would be a video element */}
    </div>
  );
};

export default VideoPlayer;
