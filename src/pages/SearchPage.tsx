import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/mockData";

const SearchPage = () => {
  const { query } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const searchResults = videos.filter((video) =>
    video.title.toLowerCase().includes(query?.toLowerCase() || "") ||
    video.channel.toLowerCase().includes(query?.toLowerCase() || "") ||
    video.description.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main
        className={`transition-all duration-300 pt-6 pb-12 ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-20"
        }`}
      >
        <div className="px-6">
          <h1 className="text-2xl font-bold mb-6">
            Search results for "{query}"
          </h1>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {searchResults.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold mb-2">No results found</h2>
              <p className="text-muted-foreground">
                Try different keywords or check your spelling
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
