import { Search, Bell, Upload, Menu, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 h-16">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="hover:bg-secondary"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg group-hover:shadow-glow-primary transition-all duration-300">
              <Play className="h-5 w-5 fill-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VideoTube
            </span>
          </Link>
        </div>

        {/* Center - Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 h-11 bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-full"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-full h-9 w-9"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary relative group"
          >
            <Upload className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              +
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-destructive rounded-full w-2 h-2"></span>
          </Button>
          <Link to="/login">
            <Button
              variant="ghost"
              className="rounded-full hover:bg-secondary"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-primary"
              />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
