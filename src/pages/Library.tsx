import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/mockData";

const Library = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const recentVideos = videos.slice(0, 4);
  const likedVideos = videos.slice(2, 6);
  const watchLaterVideos = videos.slice(4, 8);

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main
        className={`transition-all duration-300 pt-6 pb-12 ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-20"
        }`}
      >
        <div className="px-6 space-y-10">
          {/* Recently Watched */}
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Recently Watched</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recentVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          {/* Liked Videos */}
          <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-4">Liked Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {likedVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          {/* Watch Later */}
          <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-4">Watch Later</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {watchLaterVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Library;
