import { Home, TrendingUp, Users, Library, History, Clock, ThumbsUp, Video } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: TrendingUp, label: "Trending", path: "/trending" },
  { icon: Users, label: "Subscriptions", path: "/subscriptions" },
];

const libraryItems = [
  { icon: Library, label: "Library", path: "/library" },
  { icon: History, label: "History", path: "/history" },
  { icon: Video, label: "Your Videos", path: "/your-videos" },
  { icon: Clock, label: "Watch Later", path: "/watch-later" },
  { icon: ThumbsUp, label: "Liked Videos", path: "/liked" },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background border-r border-border transition-all duration-300 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent",
        isOpen ? "w-64" : "w-0 md:w-20"
      )}
    >
      <div className="py-4">
        {/* Main Navigation */}
        <div className="mb-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 px-6 py-3 transition-all duration-200 group",
                  isActive
                    ? "bg-secondary border-l-4 border-primary text-primary"
                    : "hover:bg-secondary/50"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive && "text-primary"
                  )}
                />
                {isOpen && (
                  <span className={cn("font-medium", isActive && "text-primary")}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        {isOpen && <div className="border-t border-border my-4" />}

        {/* Library Section */}
        <div>
          {isOpen && (
            <h3 className="px-6 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Library
            </h3>
          )}
          {libraryItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 px-6 py-3 transition-all duration-200 group",
                  isActive
                    ? "bg-secondary border-l-4 border-primary text-primary"
                    : "hover:bg-secondary/50"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive && "text-primary"
                  )}
                />
                {isOpen && (
                  <span className={cn("font-medium", isActive && "text-primary")}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
